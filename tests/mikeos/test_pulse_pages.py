import unittest
from pathlib import Path
import xml.etree.ElementTree as ET


REPO_ROOT = Path(__file__).resolve().parents[2]


def read(relative_path: str) -> str:
    return (REPO_ROOT / relative_path).read_text(encoding="utf-8")


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

    def test_static_pulse_prototype_exists(self):
        index = REPO_ROOT / "dashboard" / "pulse" / "index.html"
        stylesheet = REPO_ROOT / "dashboard" / "pulse" / "pulse.css"

        self.assertTrue(index.is_file())
        self.assertTrue(stylesheet.is_file())
        html = index.read_text(encoding="utf-8")
        self.assertIn("MikeOS Pulse", html)
        self.assertIn("Evidence -> Entity -> Asset / Obligation -> View", html)
        self.assertIn("Life Admin", html)
        self.assertNotIn("/work/archives/asb", html)


if __name__ == "__main__":
    unittest.main()
