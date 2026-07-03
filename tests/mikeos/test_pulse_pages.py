import json
import re
import sqlite3
import subprocess
import unittest
from pathlib import Path
import xml.etree.ElementTree as ET


REPO_ROOT = Path(__file__).resolve().parents[2]


def read(relative_path: str) -> str:
    return (REPO_ROOT / relative_path).read_text(encoding="utf-8")


def read_pulse_data() -> dict:
    content = read("dashboard/pulse/pulse-data.js")
    match = re.match(r"window\.MIKEOS_PULSE_DATA\s*=\s*(.*);\s*$", content, re.S)
    if not match:
        raise AssertionError("pulse-data.js does not assign window.MIKEOS_PULSE_DATA")
    return json.loads(match.group(1))


class PulsePagesTests(unittest.TestCase):
    def test_asb_is_not_a_pulse_entity_or_page(self):
        entities = read("registries/entities.md")
        life_map = ET.parse(REPO_ROOT / "Life.mm").getroot()

        self.assertNotIn("asb-archive", entities.lower())
        self.assertNotIn("ASB", entities)
        self.assertNotIn("/work/archives/asb", read("dashboard/pulse/page-plan.md"))
        self.assertFalse(
            any(node.attrib.get("TEXT") == "ASB" for node in life_map.findall(".//node"))
        )

    def test_pulse_page_plan_defines_views_and_required_subpages(self):
        content = read("dashboard/pulse/page-plan.md")

        for term in [
            "/today",
            "/work/invigorate-it/products/nav-to-bc-bridge",
            "/work/invigorate-it/products/outlook-to-timesheet",
            "/work/invigorate-it/wearyourmanual",
            "/life-admin/vehicles",
            "/home/batteries",
            "/system/life-index",
        ]:
            self.assertIn(term, content)

    def test_generated_pulse_cockpit_exists(self):
        index = REPO_ROOT / "dashboard" / "pulse" / "index.html"
        stylesheet = REPO_ROOT / "dashboard" / "pulse" / "pulse.css"
        app = REPO_ROOT / "dashboard" / "pulse" / "pulse-app.js"
        data = REPO_ROOT / "dashboard" / "pulse" / "pulse-data.js"

        self.assertTrue(index.is_file())
        self.assertTrue(stylesheet.is_file())
        self.assertTrue(app.is_file())
        self.assertTrue(data.is_file())
        html = index.read_text(encoding="utf-8")
        self.assertIn("MikeOS Pulse", html)
        self.assertIn("Control Room", html)
        self.assertIn('id="generated-at"', html)
        self.assertIn('id="task-list"', html)
        self.assertIn('src="pulse-data.js"', html)
        self.assertIn('src="pulse-app.js"', html)
        self.assertNotIn("/work/archives/asb", html)

    def test_pulse_data_builder_generates_safe_live_bundle(self):
        result = subprocess.run(
            [
                "powershell.exe",
                "-NoProfile",
                "-ExecutionPolicy",
                "Bypass",
                "-File",
                str(REPO_ROOT / "scripts" / "pulse" / "build-pulse-data.ps1"),
            ],
            cwd=REPO_ROOT,
            text=True,
            capture_output=True,
            check=True,
        )

        self.assertIn("pulse-data.js", result.stdout)
        self.assertTrue((REPO_ROOT / "private" / "pulse" / "pulse.sqlite").is_file())
        data = read_pulse_data()

        self.assertEqual(data["schemaVersion"], 3)
        self.assertRegex(data["generatedAt"], r"^\d{4}-\d{2}-\d{2} ")
        self.assertGreaterEqual(len(data["cards"]), 1)
        self.assertGreaterEqual(len(data["sources"]), 1)
        self.assertGreaterEqual(len(data["entities"]), 1)
        self.assertGreaterEqual(len(data["sections"]), 1)
        self.assertGreaterEqual(len(data["zones"]), 6)
        self.assertIn("tasksByZone", data)
        self.assertIn("viewsById", data)
        self.assertIn("tasksByView", data)
        self.assertEqual(data["privacy"]["mode"], "distilled_read_only")

        zone_ids = {zone["id"] for zone in data["zones"]}
        self.assertEqual(
            {"today", "work", "life-admin", "home", "projects", "system"},
            zone_ids,
        )
        for zone_id in zone_ids:
            self.assertIn(zone_id, data["tasksByZone"])
            self.assertGreaterEqual(len(data["tasksByZone"][zone_id]), 1)
            first_task = data["tasksByZone"][zone_id][0]
            for key in ["id", "title", "urgency", "nextAction", "route"]:
                self.assertIn(key, first_task)

        for view_id in [
            "today-due",
            "today-waiting-on-me",
            "life-admin-insurance",
            "home-batteries",
            "system-life-index",
        ]:
            self.assertIn(view_id, data["viewsById"])
            self.assertIn(view_id, data["tasksByView"])
            self.assertGreaterEqual(len(data["tasksByView"][view_id]), 1)
            self.assertIn("parentZoneId", data["viewsById"][view_id])

        first_card = data["cards"][0]
        self.assertIn("id", first_card)
        self.assertIn("title", first_card)
        self.assertIn("domain", first_card)
        self.assertNotIn("`domain`", first_card["title"])

    def test_photo_intake_property_issue_routes_without_private_media(self):
        subprocess.run(
            [
                "powershell.exe",
                "-NoProfile",
                "-ExecutionPolicy",
                "Bypass",
                "-File",
                str(REPO_ROOT / "scripts" / "pulse" / "build-pulse-data.ps1"),
            ],
            cwd=REPO_ROOT,
            text=True,
            capture_output=True,
            check=True,
        )

        data = read_pulse_data()
        all_tasks = [
            task
            for tasks in data["tasksByZone"].values()
            for task in tasks
        ]
        property_tasks = [
            task
            for task in all_tasks
            if task["id"] == "2026-07-03-home-property-001"
        ]

        self.assertGreaterEqual(len(property_tasks), 3)
        self.assertIn(
            "2026-07-03-home-property-001",
            {task["id"] for task in data["tasksByZone"]["today"]},
        )
        self.assertIn(
            "2026-07-03-home-property-001",
            {task["id"] for task in data["tasksByZone"]["home"]},
        )
        self.assertIn(
            "2026-07-03-home-property-001",
            {task["id"] for task in data["tasksByZone"]["life-admin"]},
        )

        browser_bundle = read("dashboard/pulse/pulse-data.js")
        self.assertIn("Photo evidence", browser_bundle)
        for forbidden in [
            "codex-remote-attachments",
            "1-Photo-1.jpg",
            "private/media",
            "raw image bytes",
        ]:
            self.assertNotIn(forbidden, browser_bundle)

    def test_pulse_private_sqlite_store_is_populated(self):
        subprocess.run(
            [
                "powershell.exe",
                "-NoProfile",
                "-ExecutionPolicy",
                "Bypass",
                "-File",
                str(REPO_ROOT / "scripts" / "pulse" / "build-pulse-data.ps1"),
            ],
            cwd=REPO_ROOT,
            text=True,
            capture_output=True,
            check=True,
        )

        db_path = REPO_ROOT / "private" / "pulse" / "pulse.sqlite"
        self.assertTrue(db_path.is_file())
        with sqlite3.connect(db_path) as conn:
            for table in ["zones", "tasks", "sources", "views", "kpis", "task_links"]:
                count = conn.execute(f"select count(*) from {table}").fetchone()[0]
                self.assertGreaterEqual(count, 1, table)

    def test_pulse_app_supports_control_room_interaction_model(self):
        app = read("dashboard/pulse/pulse-app.js")
        css = read("dashboard/pulse/pulse.css")

        for term in [
            "tasksByZone",
            "tasksByView",
            "viewsById",
            "setSelectedView",
            "currentViewId",
            "hashchange",
            "workbench-open",
            "task-board",
            "quick-panel",
            "data-view",
            "data-zone",
        ]:
            self.assertIn(term, app)

        for term in [
            ".control-room",
            ".scene-canvas",
            ".task-drawer",
            ".task-row",
            ".quick-panel",
        ]:
            self.assertIn(term, css)

    def test_pulse_generated_files_do_not_expose_private_evidence(self):
        combined = "\n".join(
            read(path)
            for path in [
                "dashboard/pulse/index.html",
                "dashboard/pulse/pulse-app.js",
                "dashboard/pulse/pulse-data.js",
            "dashboard/pulse/page-plan.md",
            ]
        )

        for forbidden in [
            "/work/archives/asb",
            "\\work\\archives\\asb",
            "C:\\Users\\",
            "D:\\ASB",
            "private\\life-index",
            "life-index.sqlite",
            "codex-remote-attachments",
            "1-Photo-1.jpg",
            "private\\media",
            "private/media",
        ]:
            self.assertNotIn(forbidden, combined)

        browser_data = read("dashboard/pulse/pulse-data.js")
        self.assertNotIn("private/pulse", browser_data)
        self.assertNotIn("pulse.sqlite", browser_data)


if __name__ == "__main__":
    unittest.main()
