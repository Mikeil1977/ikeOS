import argparse
import json
import re
import sqlite3
from datetime import datetime
from pathlib import Path


FORBIDDEN_PATTERNS = [
    re.compile(r"\\work\\archives\\asb", re.I),
    re.compile(r"/work/archives/asb", re.I),
    re.compile(r"D:\\ASB", re.I),
    re.compile(r"C:\\Users\\", re.I),
    re.compile(r"private\\life-index", re.I),
    re.compile(r"life-index\.sqlite", re.I),
    re.compile(r"@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,}"),
]


def route_to_view_id(route: str) -> str:
    return route.strip("/").replace("/", "-") or "control-room"


def item(label: str, route: str) -> dict:
    return {"id": route_to_view_id(route), "label": label, "route": route}


ZONE_DEFS = [
    {
        "id": "today",
        "label": "Today",
        "route": "/today",
        "icon": "target",
        "summary": "Daily pulse, due work, waiting items, and stale signals.",
        "theme": "today",
        "items": [
            item("Due today", "/today/due"),
            item("Waiting on me", "/today/waiting-on-me"),
            item("Waiting on others", "/today/waiting-on-others"),
            item("Parked", "/today/parked"),
            item("Source freshness", "/today/source-freshness"),
        ],
    },
    {
        "id": "work",
        "label": "Work",
        "route": "/work",
        "icon": "laptop",
        "summary": "Companies, business lines, customer delivery, products, and admin.",
        "theme": "work",
        "items": [
            item("Elysium", "/work/elysium-dynamics"),
            item("Invigorate", "/work/invigorate-it"),
            item("BC/NAV consulting", "/work/invigorate-it/bc-nav-consulting"),
            item("Products", "/work/invigorate-it/products"),
            item("Customer projects", "/work/invigorate-it/bc-nav-consulting/customer-projects"),
        ],
    },
    {
        "id": "life-admin",
        "label": "Life Admin",
        "route": "/life-admin",
        "icon": "person",
        "summary": "Personal obligations, documents, policies, vehicles, properties, and health.",
        "theme": "life",
        "items": [
            item("Insurance", "/life-admin/insurance"),
            item("Vehicles / properties", "/life-admin/vehicles-properties"),
            item("Money", "/life-admin/personal-money"),
            item("Identity / legal", "/life-admin/identity-legal"),
            item("Health", "/life-admin/health"),
            item("Family / education", "/life-admin/family-education"),
            item("Documents", "/life-admin/documents"),
        ],
    },
    {
        "id": "home",
        "label": "Home",
        "route": "/home",
        "icon": "home",
        "summary": "Live home state, chores, devices, batteries, appliances, and automations.",
        "theme": "home",
        "items": [
            item("Live state", "/home/live-state"),
            item("Batteries", "/home/batteries"),
            item("Devices", "/home/devices"),
            item("Chores", "/home/chores"),
            item("Appliances", "/home/appliances"),
            item("Automations", "/home/automations"),
        ],
    },
    {
        "id": "projects",
        "label": "Projects",
        "route": "/projects",
        "icon": "bulb",
        "summary": "MikeOS, CLARA, DnD, experiments, parked builds, and ideas.",
        "theme": "projects",
        "items": [
            item("MikeOS", "/projects/mikeos"),
            item("CLARA", "/projects/clara"),
            item("DnD / worldbuilding", "/projects/dnd-worldbuilding"),
            item("Experiments", "/projects/experiments"),
            item("Parked ideas", "/projects/parked"),
        ],
    },
    {
        "id": "system",
        "label": "System",
        "route": "/system",
        "icon": "gear",
        "summary": "Source health, automations, Motion trust, Life Index, PC Analysis, and model health.",
        "theme": "system",
        "items": [
            item("Sources", "/system/sources"),
            item("Automations", "/system/automations"),
            item("Motion", "/system/motion"),
            item("Life Index", "/system/life-index"),
            item("PC Analysis", "/system/pc-analysis"),
            item("Model health", "/system/model-health"),
        ],
    },
]


def read_text(root: Path, relative: str) -> str:
    path = root / relative
    if not path.is_file():
        raise FileNotFoundError(f"Required Pulse source is missing: {relative}")
    return path.read_text(encoding="utf-8")


def read_optional_text(root: Path, relative: str) -> str:
    path = root / relative
    return path.read_text(encoding="utf-8") if path.is_file() else ""


def section_text(content: str, heading: str) -> str:
    pattern = rf"(?ms)^##\s+{re.escape(heading)}\s*\n(?P<body>.*?)(?=^##\s+|\Z)"
    match = re.search(pattern, content)
    return match.group("body").strip() if match else ""


def list_items(section: str) -> list[str]:
    return [line.strip()[2:] for line in section.splitlines() if line.strip().startswith("- ")]


def table_rows(markdown: str) -> list[dict]:
    rows: list[list[str]] = []
    for line in markdown.splitlines():
        stripped = line.strip()
        if not stripped.startswith("|") or re.match(r"^\|\s*-+\s*\|", stripped):
            continue
        cells = [cell.strip().replace("`", "") for cell in stripped.strip("|").split("|")]
        rows.append(cells)
    if len(rows) < 2:
        return []
    headers = [re.sub(r"[^A-Za-z0-9]+", "_", cell).strip("_").lower() for cell in rows[0]]
    return [dict(zip(headers, row + [""] * (len(headers) - len(row)))) for row in rows[1:]]


def daily_cards(cards_text: str) -> list[dict]:
    cards = []
    matches = re.finditer(
        r"(?ms)^###\s+(?P<id>\S+)\s+-\s+(?P<title>[^\n]+)\n(?P<body>.*?)(?=^###\s+|\Z)",
        cards_text,
    )
    for match in matches:
        card = {
            "id": match.group("id").strip(),
            "title": match.group("title").strip(),
            "domain": "unknown",
            "whyNow": "",
            "nextAction": "",
            "owner": "",
            "urgency": "watch",
            "sourceRefs": [],
            "freshness": "",
            "actionMode": "read_only",
        }
        for line in match.group("body").splitlines():
            field = re.match(r"^\s*-\s+`(?P<key>[^`]+)`:\s*(?P<value>.*)$", line)
            if not field:
                continue
            key = field.group("key").strip()
            value = field.group("value").strip()
            if key == "domain":
                card["domain"] = value
            elif key == "why_now":
                card["whyNow"] = value
            elif key == "next_action":
                card["nextAction"] = value
            elif key == "owner":
                card["owner"] = value
            elif key == "urgency":
                card["urgency"] = value
            elif key == "source_refs":
                card["sourceRefs"] = [part.strip() for part in value.split(";") if part.strip()]
            elif key == "freshness":
                card["freshness"] = value
            elif key == "action_mode":
                card["actionMode"] = value
            elif key == "entity_id":
                card["entityId"] = value
            elif key == "asset_type":
                card["assetType"] = value
            elif key == "obligation_type":
                card["obligationType"] = value
        cards.append(card)
    return cards


def page_model(page_plan: str) -> dict:
    views_match = re.search(r"(?ms)^## Top-Level Views\s*\n(?P<body>.*?)(?=^##\s+|\Z)", page_plan)
    views = table_rows(views_match.group("body")) if views_match else []
    sections = []
    for match in re.finditer(r"(?ms)^##\s+(?P<name>Today|Work|Life Admin|Home|Projects|System) Pages\s*\n(?P<body>.*?)(?=^##\s+|\Z)", page_plan):
        name = match.group("name")
        sections.append(
            {
                "name": name,
                "slug": name.lower().replace(" ", "-"),
                "routes": [item.replace("`", "") for item in list_items(match.group("body"))],
            }
        )
    return {"views": views, "sections": sections}


def pulse_task(task_id: str, title: str, urgency: str, next_action: str, route: str, freshness: str, source: str, action_mode: str = "route_only") -> dict:
    return {
        "id": task_id,
        "title": title,
        "urgency": urgency or "watch",
        "nextAction": next_action or "",
        "route": route,
        "freshness": freshness or "",
        "source": source or "",
        "actionMode": action_mode or "route_only",
    }


def card_task(card: dict, route: str) -> dict:
    return pulse_task(
        card["id"],
        card["title"],
        card["urgency"],
        card["nextAction"],
        route,
        card["freshness"],
        "; ".join(card.get("sourceRefs", [])),
        card["actionMode"],
    )


def is_property_maintenance_card(card: dict) -> bool:
    return card.get("obligationType") == "property-maintenance" or "property-maintenance" in "; ".join(card.get("sourceRefs", []))


def build_tasks(cards: list[dict], waiting_mike: list[str], waiting_others: list[str], stale_sources: list[str], generated_source: str) -> dict[str, list[dict]]:
    tasks = {zone["id"]: [] for zone in ZONE_DEFS}
    tasks["today"].extend(card_task(card, "/today/due") for card in cards)
    tasks["today"].extend(
        pulse_task(f"waiting-mike-{index}", item, "today", item, "/today/waiting-on-me", generated_source, "state/today.md")
        for index, item in enumerate(waiting_mike, start=1)
    )
    tasks["today"].extend(
        pulse_task(f"waiting-others-{index}", item, "watch", item, "/today/waiting-on-others", generated_source, "state/today.md", "read_only")
        for index, item in enumerate(waiting_others, start=1)
    )
    tasks["work"].extend(card_task(card, "/work") for card in cards if card["domain"] == "work")
    tasks["work"].extend(card_task(card, "/work/invigorate-it/company-admin") for card in cards if card["domain"] == "admin/money")
    tasks["life-admin"].extend(card_task(card, "/life-admin/health") for card in cards if card["domain"] == "health")
    tasks["life-admin"].extend(card_task(card, "/life-admin/properties") for card in cards if is_property_maintenance_card(card))
    tasks["home"].extend(card_task(card, "/home") for card in cards if card["domain"] == "home")
    tasks["projects"].append(
        pulse_task(
            "projects-board",
            "Review parked and active project boards",
            "watch",
            "Use Projects for MikeOS, CLARA, DnD/worldbuilding, experiments, and parked ideas after today's obligations are clear.",
            "/projects",
            generated_source,
            "dashboard/pulse/page-plan.md",
            "read_only",
        )
    )
    tasks["system"].extend(card_task(card, "/system") for card in cards if card["domain"] == "system")
    tasks["system"].extend(
        pulse_task(f"stale-source-{index}", item, "soon", item, "/system/sources", generated_source, "state/today.md")
        for index, item in enumerate(stale_sources, start=1)
    )
    fallbacks = {
        "work": ("work-review", "Review active work routes", "/work"),
        "life-admin": ("life-admin-review", "Review life admin obligations", "/life-admin"),
        "home": ("home-review", "Review live home state", "/home"),
        "system": ("system-review", "Review source and automation health", "/system"),
    }
    for zone_id, (task_id, title, route) in fallbacks.items():
        if not tasks[zone_id]:
            tasks[zone_id].append(
                pulse_task(task_id, title, "watch", f"Open {route} when this area needs attention.", route, generated_source, "dashboard/pulse/page-plan.md", "read_only")
            )
    return tasks


def task_matches(task: dict, *needles: str) -> bool:
    haystack = " ".join(
        [
            str(task.get("title", "")),
            str(task.get("nextAction", "")),
            str(task.get("route", "")),
            str(task.get("source", "")),
        ]
    ).lower()
    return any(needle.lower() in haystack for needle in needles)


def fallback_view_task(view: dict, generated_source: str) -> dict:
    return pulse_task(
        f"{view['id']}-review",
        f"Review {view['label']}",
        "watch",
        f"No specific generated actions are waiting here yet. Open {view['route']} when this area needs a focused pass.",
        view["route"],
        generated_source,
        "dashboard/pulse/page-plan.md",
        "read_only",
    )


def build_views_and_tasks(
    cards: list[dict],
    waiting_mike: list[str],
    waiting_others: list[str],
    stale_sources: list[str],
    tasks_by_zone: dict[str, list[dict]],
    generated_source: str,
) -> tuple[dict[str, dict], dict[str, list[dict]]]:
    views_by_id: dict[str, dict] = {}
    tasks_by_view: dict[str, list[dict]] = {}

    for zone in ZONE_DEFS:
        views_by_id[zone["id"]] = {
            "id": zone["id"],
            "label": zone["label"],
            "route": zone["route"],
            "summary": zone["summary"],
            "parentZoneId": zone["id"],
            "theme": zone["theme"],
        }
        tasks_by_view[zone["id"]] = list(tasks_by_zone.get(zone["id"], []))

    view_routes: dict[str, dict] = {}
    for zone in ZONE_DEFS:
        for option in zone["items"]:
            view = {
                "id": option["id"],
                "label": option["label"],
                "route": option["route"],
                "summary": f"{option['label']} tasks and safe handoff routes inside {zone['label']}.",
                "parentZoneId": zone["id"],
                "theme": zone["theme"],
            }
            views_by_id[view["id"]] = view
            view_routes[view["id"]] = view

    tasks_by_view["today-due"] = [card_task(card, "/today/due") for card in cards if card["urgency"] == "today"]
    tasks_by_view["today-waiting-on-me"] = [
        pulse_task(f"waiting-mike-{index}", item, "today", item, "/today/waiting-on-me", generated_source, "state/today.md")
        for index, item in enumerate(waiting_mike, start=1)
    ]
    tasks_by_view["today-waiting-on-others"] = [
        pulse_task(f"waiting-others-{index}", item, "watch", item, "/today/waiting-on-others", generated_source, "state/today.md", "read_only")
        for index, item in enumerate(waiting_others, start=1)
    ]
    tasks_by_view["today-parked"] = [
        pulse_task("parked-review", "Review parked items", "watch", "Parked count is currently generated as zero. Revisit once new parked items enter MikeOS state.", "/today/parked", generated_source, "state/today.md", "read_only")
    ]
    tasks_by_view["today-source-freshness"] = [
        pulse_task(f"stale-source-{index}", item, "soon", item, "/today/source-freshness", generated_source, "state/today.md")
        for index, item in enumerate(stale_sources, start=1)
    ]

    work_tasks = tasks_by_zone.get("work", [])
    tasks_by_view["work-elysium-dynamics"] = [task for task in work_tasks if task_matches(task, "elysium", "practice manager")] or list(work_tasks[:2])
    tasks_by_view["work-invigorate-it"] = [task for task in work_tasks if task_matches(task, "invigorate", "company-admin", "vat")] or list(work_tasks[:2])
    tasks_by_view["work-invigorate-it-bc-nav-consulting"] = [task for task in work_tasks if task_matches(task, "bc", "nav", "consulting", "customer")]
    tasks_by_view["work-invigorate-it-products"] = [
        pulse_task("products-review", "Review product line tasks", "watch", "Track NAV to BC Bridge and Outlook to Timesheet as products under Invigorate IT.", "/work/invigorate-it/products", generated_source, "registries/entities.md", "read_only")
    ]
    tasks_by_view["work-invigorate-it-bc-nav-consulting-customer-projects"] = list(work_tasks)

    life_tasks = tasks_by_zone.get("life-admin", [])
    tasks_by_view["life-admin-health"] = list(life_tasks)
    tasks_by_view["life-admin-personal-money"] = [card_task(card, "/life-admin/personal-money") for card in cards if card["domain"] == "admin/money"]
    tasks_by_view["life-admin-insurance"] = [
        pulse_task("insurance-index", "Find and review insurance documents", "watch", "Use the Life Index and Life Admin routes to surface policies, renewals, and document links without exposing raw document text.", "/life-admin/insurance", generated_source, "protocols/life-index.md", "read_only")
    ]
    tasks_by_view["life-admin-vehicles-properties"] = [
        pulse_task("vehicles-properties-index", "Review vehicle and property obligations", "watch", "Keep MOT, vehicle tax, property, landlord, and household obligations visible here as sources are connected.", "/life-admin/vehicles-properties", generated_source, "registries/obligation-types.md", "read_only")
    ]
    tasks_by_view["life-admin-identity-legal"] = [
        pulse_task("identity-legal-index", "Review identity and legal document coverage", "watch", "Use representative filenames and category counts only until an explicit document is requested.", "/life-admin/identity-legal", generated_source, "protocols/life-index.md", "read_only")
    ]
    tasks_by_view["life-admin-family-education"] = [
        pulse_task("family-education-index", "Review family and education admin", "watch", "Keep school, family, and education paperwork surfaced as distilled Life Index summaries.", "/life-admin/family-education", generated_source, "protocols/life-index.md", "read_only")
    ]
    tasks_by_view["life-admin-documents"] = [
        pulse_task("documents-index", "Review document coverage", "watch", "Use the private Life Index for local document discovery and publish only safe summaries into MikeOS.", "/life-admin/documents", generated_source, "protocols/life-index.md", "read_only")
    ]

    home_tasks = tasks_by_zone.get("home", [])
    tasks_by_view["home-live-state"] = list(home_tasks)
    tasks_by_view["home-chores"] = list(home_tasks)
    tasks_by_view["home-batteries"] = [
        pulse_task("battery-review", "Check low battery signals", "soon", "Review Home Assistant battery state and the Watergate battery signal before deciding on a change.", "/home/batteries", generated_source, "Home Assistant live-state route", "read_only")
    ]
    tasks_by_view["home-devices"] = [
        pulse_task("device-review", "Review device health", "watch", "Start from live Home Assistant evidence before any device write or automation change.", "/home/devices", generated_source, "Home Assistant live-state route", "read_only")
    ]
    tasks_by_view["home-appliances"] = [
        pulse_task("appliance-review", "Review appliance state", "watch", "Use live Home Assistant state before changing appliance controls or blocker logic.", "/home/appliances", generated_source, "Home Assistant live-state route", "read_only")
    ]
    tasks_by_view["home-automations"] = [
        pulse_task("home-automation-review", "Review home automations", "watch", "Check automation health and approval boundaries before any write-capable route.", "/home/automations", generated_source, "Home Assistant live-state route", "read_only")
    ]

    tasks_by_view["projects-mikeos"] = [
        pulse_task("mikeos-pulse-review", "Continue MikeOS Pulse build", "soon", "Keep the landing map and task workbench generated from safe state.", "/projects/mikeos", generated_source, "dashboard/pulse/page-plan.md")
    ]
    tasks_by_view["projects-clara"] = [
        pulse_task("clara-review", "Review CLARA front-door fit", "watch", "Keep CLARA as the chief-of-staff layer beneath MikeOS rather than replacing it.", "/projects/clara", generated_source, "routes.md", "read_only")
    ]
    tasks_by_view["projects-dnd-worldbuilding"] = [
        pulse_task("dnd-review", "Review DnD and worldbuilding queue", "watch", "Open this route when creative project work is the selected focus.", "/projects/dnd-worldbuilding", generated_source, "dashboard/pulse/page-plan.md", "read_only")
    ]
    tasks_by_view["projects-experiments"] = [
        pulse_task("experiments-review", "Review experiments", "watch", "Keep speculative ideas parked until today's obligations are clear.", "/projects/experiments", generated_source, "dashboard/pulse/page-plan.md", "read_only")
    ]
    tasks_by_view["projects-parked"] = [
        pulse_task("parked-projects-review", "Review parked project ideas", "watch", "Choose one parked idea only after active work and life-admin obligations are stable.", "/projects/parked", generated_source, "dashboard/pulse/page-plan.md", "read_only")
    ]

    system_tasks = tasks_by_zone.get("system", [])
    tasks_by_view["system-sources"] = [task for task in system_tasks if task_matches(task, "source", "stale")] or list(system_tasks)
    tasks_by_view["system-automations"] = [
        pulse_task("automation-health", "Review automation health", "watch", "Check active workers, build scripts, and route freshness before trusting generated views.", "/system/automations", generated_source, "state/today.md", "read_only")
    ]
    tasks_by_view["system-motion"] = [task for task in system_tasks if task_matches(task, "motion")] or [
        pulse_task("motion-review", "Review Motion trust", "watch", "Treat Motion as task-state input only after connector freshness is confirmed.", "/system/motion", generated_source, "state/source-freshness.md", "read_only")
    ]
    tasks_by_view["system-life-index"] = [
        pulse_task("life-index-review", "Review Life Index status", "watch", "Use private SQLite for search and publish only category counts or explicitly requested representative filenames.", "/system/life-index", generated_source, "protocols/life-index.md", "read_only")
    ]
    tasks_by_view["system-pc-analysis"] = [task for task in system_tasks if task_matches(task, "pc analysis", "machine-health")] or [
        pulse_task("pc-analysis-review", "Review PC Analysis route", "watch", "Reuse Utilities / PC Analysis for machine scans instead of creating a second scanner.", "/system/pc-analysis", generated_source, "protocols/machine-health.md", "read_only")
    ]
    tasks_by_view["system-model-health"] = [
        pulse_task("model-health-review", "Review model health", "watch", "Use this panel for model reliability and route confidence when automation evidence becomes stale.", "/system/model-health", generated_source, "state/source-freshness.md", "read_only")
    ]

    for view_id, view in view_routes.items():
        if not tasks_by_view.get(view_id):
            tasks_by_view[view_id] = [fallback_view_task(view, generated_source)]

    for zone in ZONE_DEFS:
        if not tasks_by_view.get(zone["id"]):
            tasks_by_view[zone["id"]] = [fallback_view_task(views_by_id[zone["id"]], generated_source)]

    return views_by_id, tasks_by_view


def connect_db(root: Path) -> sqlite3.Connection:
    db_path = root / "private" / "pulse" / "pulse.sqlite"
    db_path.parent.mkdir(parents=True, exist_ok=True)
    return sqlite3.connect(db_path)


def ensure_schema(conn: sqlite3.Connection) -> None:
    conn.executescript(
        """
        create table if not exists metadata (
            key text primary key,
            value text not null
        );
        create table if not exists zones (
            id text primary key,
            label text not null,
            route text not null,
            icon text,
            summary text,
            theme text,
            items_json text not null
        );
        create table if not exists tasks (
            id text primary key,
            zone_id text not null references zones(id),
            title text not null,
            urgency text not null,
            next_action text,
            route text not null,
            freshness text,
            source text,
            action_mode text,
            status text not null default 'open',
            sort_order integer not null
        );
        create table if not exists task_links (
            id integer primary key autoincrement,
            task_id text not null references tasks(id),
            label text not null,
            route text not null
        );
        create table if not exists sources (
            source text primary key,
            last_checked text,
            freshness text,
            notes text
        );
        create table if not exists views (
            id text primary key,
            route text not null,
            label text not null,
            purpose text
        );
        create table if not exists kpis (
            key text primary key,
            value integer not null,
            route text,
            label text
        );
        """
    )


def refresh_db(conn: sqlite3.Connection, data: dict) -> None:
    ensure_schema(conn)
    conn.execute("delete from zones")
    conn.execute("delete from tasks")
    conn.execute("delete from task_links")
    conn.execute("delete from sources")
    conn.execute("delete from views")
    conn.execute("delete from kpis")
    conn.execute("insert or replace into metadata(key, value) values (?, ?)", ("generatedAt", data["generatedAt"]))
    conn.execute("insert or replace into metadata(key, value) values (?, ?)", ("schemaVersion", str(data["schemaVersion"])))
    for zone in data["zones"]:
        conn.execute(
            "insert into zones(id, label, route, icon, summary, theme, items_json) values (?, ?, ?, ?, ?, ?, ?)",
            (zone["id"], zone["label"], zone["route"], zone["icon"], zone["summary"], zone["theme"], json.dumps(zone["items"])),
        )
    for view_id, tasks in data["tasksByView"].items():
        zone_id = data["viewsById"][view_id]["parentZoneId"]
        for index, task in enumerate(tasks):
            db_task_id = f"{view_id}:{task['id']}"
            conn.execute(
                """
                insert into tasks(id, zone_id, title, urgency, next_action, route, freshness, source, action_mode, status, sort_order)
                values (?, ?, ?, ?, ?, ?, ?, ?, ?, 'open', ?)
                """,
                (db_task_id, zone_id, task["title"], task["urgency"], task["nextAction"], task["route"], task["freshness"], task["source"], task["actionMode"], index),
            )
            conn.execute(
                "insert into task_links(task_id, label, route) values (?, ?, ?)",
                (db_task_id, task["route"], task["route"]),
            )
    for source in data["sources"]:
        conn.execute(
            "insert into sources(source, last_checked, freshness, notes) values (?, ?, ?, ?)",
            (source.get("source", ""), source.get("last_checked", ""), source.get("freshness", ""), source.get("notes", "")),
        )
    for view in data["viewsById"].values():
        conn.execute(
            "insert into views(id, route, label, purpose) values (?, ?, ?, ?)",
            (view.get("id", ""), view.get("route", ""), view.get("label", ""), view.get("summary", "")),
        )
    for key, value in data["kpis"].items():
        conn.execute(
            "insert into kpis(key, value, route, label) values (?, ?, ?, ?)",
            (key, int(value), "", key),
        )
    conn.commit()


def compose_data(root: Path) -> dict:
    today = read_text(root, "state/today.md")
    freshness = read_text(root, "state/source-freshness.md")
    entities = read_text(root, "registries/entities.md")
    page_plan = read_text(root, "dashboard/pulse/page-plan.md")
    photo_intake = read_optional_text(root, "state/photo-intake.md")
    generated_match = re.search(r"(?m)^Generated:\s*(?P<generated>.+)$", today)
    generated_source = generated_match.group("generated").strip() if generated_match else ""
    cards = daily_cards(section_text(today, "Cards today"))
    cards.extend(daily_cards(section_text(photo_intake, "Photo intake cards")))
    waiting_mike = list_items(section_text(today, "Waiting on Mike"))
    waiting_others = list_items(section_text(today, "Waiting on others"))
    active_workers = list_items(section_text(today, "Active workers / automations"))
    stale_sources = list_items(section_text(today, "Stale or untrusted sources"))
    recommended = list_items(section_text(today, "Recommended next action"))
    source_rows = table_rows(freshness)
    entity_rows = table_rows(entities)
    model = page_model(page_plan)
    fresh_count = sum(1 for source in source_rows if re.search(r"fresh|today|route confirmed", source.get("freshness", ""), re.I))
    stale_count = sum(1 for source in source_rows if re.search(r"stale|untrusted", source.get("freshness", ""), re.I))
    tasks_by_zone = build_tasks(cards, waiting_mike, waiting_others, stale_sources, generated_source)
    views_by_id, tasks_by_view = build_views_and_tasks(cards, waiting_mike, waiting_others, stale_sources, tasks_by_zone, generated_source)
    data = {
        "schemaVersion": 3,
        "generatedAt": datetime.now().astimezone().strftime("%Y-%m-%d %H:%M %z"),
        "generatedFrom": {
            "today": "state/today.md",
            "sourceFreshness": "state/source-freshness.md",
            "entities": "registries/entities.md",
            "pagePlan": "dashboard/pulse/page-plan.md",
            "pulseStore": "private local Pulse SQLite",
            "todayGenerated": generated_source,
        },
        "privacy": {
            "mode": "distilled_read_only",
            "rawEvidenceIncluded": False,
            "notes": "Generated from private Pulse SQLite and MikeOS-safe Markdown. Raw evidence, private paths, message bodies, and private Life Index state are omitted.",
        },
        "currentFocus": list_items(section_text(today, "Current focus")),
        "recommendedNextAction": recommended,
        "cards": cards,
        "waitingOnMike": waiting_mike,
        "waitingOnOthers": waiting_others,
        "activeWorkers": active_workers,
        "staleSources": stale_sources,
        "sources": source_rows,
        "sourceSummary": {"total": len(source_rows), "fresh": fresh_count, "stale": stale_count},
        "kpis": {
            "dueToday": sum(1 for card in cards if card["urgency"] == "today"),
            "waitingOnMike": len(waiting_mike),
            "waitingOnOthers": len(waiting_others),
            "parked": 0,
            "staleSources": len(stale_sources),
            "sourceFreshnessPercent": round((fresh_count / len(source_rows)) * 100) if source_rows else 0,
        },
        "zones": ZONE_DEFS,
        "tasksByZone": tasks_by_zone,
        "viewsById": views_by_id,
        "tasksByView": tasks_by_view,
        "entities": entity_rows,
        "views": model["views"],
        "sections": model["sections"],
    }
    return data


def assert_safe(text: str) -> None:
    for pattern in FORBIDDEN_PATTERNS:
        if pattern.search(text):
            raise ValueError(f"Generated Pulse data failed privacy check for pattern: {pattern.pattern}")


def write_data(root: Path, data: dict) -> None:
    output = "window.MIKEOS_PULSE_DATA = " + json.dumps(data, indent=2) + ";\n"
    assert_safe(output)
    (root / "dashboard" / "pulse" / "pulse-data.js").write_text(output, encoding="utf-8")


def check(root: Path) -> None:
    data_path = root / "dashboard" / "pulse" / "pulse-data.js"
    db_path = root / "private" / "pulse" / "pulse.sqlite"
    if not data_path.is_file():
        raise FileNotFoundError(f"Pulse data bundle does not exist: {data_path}")
    if not db_path.is_file():
        raise FileNotFoundError(f"Pulse database does not exist: {db_path}")
    content = data_path.read_text(encoding="utf-8")
    assert_safe(content)
    for required in ["MIKEOS_PULSE_DATA", "generatedAt", "cards", "sources", "sections", "zones", "tasksByZone", "viewsById", "tasksByView"]:
        if required not in content:
            raise ValueError(f"Pulse data bundle is missing required term: {required}")
    with sqlite3.connect(db_path) as conn:
        for table in ["zones", "tasks", "sources", "views", "kpis"]:
            count = conn.execute(f"select count(*) from {table}").fetchone()[0]
            if count < 1:
                raise ValueError(f"Pulse database table is empty: {table}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Build MikeOS Pulse private SQLite store and safe browser data.")
    parser.add_argument("--repo-root", default=str(Path(__file__).resolve().parents[2]))
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    root = Path(args.repo_root).resolve()
    if args.check:
        check(root)
        print("Pulse database and data bundle are structurally valid and privacy-safe.")
        return 0
    data = compose_data(root)
    with connect_db(root) as conn:
        refresh_db(conn, data)
    write_data(root, data)
    print(f"Wrote {root / 'private' / 'pulse' / 'pulse.sqlite'}")
    print(f"Wrote {root / 'dashboard' / 'pulse' / 'pulse-data.js'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
