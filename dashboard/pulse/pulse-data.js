window.MIKEOS_PULSE_DATA = {
  "schemaVersion": 3,
  "generatedAt": "2026-07-03 18:39 +0100",
  "generatedFrom": {
    "today": "state/today.md",
    "sourceFreshness": "state/source-freshness.md",
    "entities": "registries/entities.md",
    "pagePlan": "dashboard/pulse/page-plan.md",
    "pulseStore": "private local Pulse SQLite",
    "todayGenerated": "2026-07-03 02:14 +01:00"
  },
  "privacy": {
    "mode": "distilled_read_only",
    "rawEvidenceIncluded": false,
    "notes": "Generated from private Pulse SQLite and MikeOS-safe Markdown. Raw evidence, private paths, message bodies, and private Life Index state are omitted."
  },
  "currentFocus": [
    "Protect the TWMA/work block already on the calendar, then use the first clear admin slot for invoicing, the stale Azure subscription decision, and PM queue cleanup."
  ],
  "recommendedNextAction": [
    "Stay on TWMA for the morning block, then run a 45-60 minute admin cleanup: invoicing, Azure subscription decision, and PM scheduled-row triage in that order unless Mike chooses a different focus."
  ],
  "cards": [
    {
      "id": "2026-07-03-work-001",
      "title": "TWMA owns the morning work shape",
      "domain": "work",
      "whyNow": "Elysium calendar shows TWMA blocks early today, including the main 08:30-13:00 Europe/London work block, and Motion still has a TWMA review task in the open backlog.",
      "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
      "owner": "Mike",
      "urgency": "today",
      "sourceRefs": [
        "Elysium M365 calendar",
        "Motion open tasks"
      ],
      "freshness": "2026-07-03 02:14 +01:00",
      "actionMode": "read_only"
    },
    {
      "id": "2026-07-03-admin-001",
      "title": "Invoicing and Azure subscription decision need a bounded admin pass",
      "domain": "admin/money",
      "whyNow": "Motion has invoicing scheduled for today and an overdue hard-deadline Azure subscription decision still open.",
      "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
      "owner": "Mike",
      "urgency": "today",
      "sourceRefs": [
        "Motion open tasks"
      ],
      "freshness": "2026-07-03 02:14 +01:00",
      "actionMode": "route_only"
    },
    {
      "id": "2026-07-03-work-002",
      "title": "PM Work Queue has stale scheduled handoffs",
      "domain": "work",
      "whyNow": "The live PM Work Queue is reachable, but top scheduled rows are still paused against June 26 calendar blocks, including high-priority Solution Architect and EA handoffs.",
      "nextAction": "Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.",
      "owner": "PM / Mike",
      "urgency": "today",
      "sourceRefs": [
        "PM Work Queue",
        "PM request index",
        "PM open actions",
        "Solution Architect queue"
      ],
      "freshness": "2026-07-03 02:14 +01:00",
      "actionMode": "route_only"
    },
    {
      "id": "2026-07-03-home-001",
      "title": "Home is reachable and not currently chore-blocked",
      "domain": "home",
      "whyNow": "Home Assistant is reachable, chores show zero open items, and the CLARA todo list has seven infrastructure ideas waiting behind higher-priority work.",
      "nextAction": "Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.",
      "owner": "Home / CLARA",
      "urgency": "watch",
      "sourceRefs": [
        "Home Assistant overview",
        "Home Assistant todo lists"
      ],
      "freshness": "2026-07-03 02:14 +01:00",
      "actionMode": "read_only"
    },
    {
      "id": "2026-07-03-health-001",
      "title": "Health admin is present but should be deliberately slotted",
      "domain": "health",
      "whyNow": "Motion has an overdue sleep-study follow-up, and Home Assistant's medicine list has two needs-action items.",
      "nextAction": "Give health admin one bounded slot or explicitly defer it in Motion; MikeOS should not write health task state without approval.",
      "owner": "Mike",
      "urgency": "soon",
      "sourceRefs": [
        "Motion open tasks",
        "Home Assistant medicine todo"
      ],
      "freshness": "2026-07-03 02:14 +01:00",
      "actionMode": "route_only"
    },
    {
      "id": "2026-07-03-system-001",
      "title": "Motion needs a cleanup/replan pass before it can be trusted as order",
      "domain": "system",
      "whyNow": "Motion's first open-task page returned 50 unresolved tasks, with old due dates and at least one scheduling issue.",
      "nextAction": "Use Motion as a task inventory today, not as a perfect priority order; run a daily Motion connection and replan pass after the urgent admin items.",
      "owner": "Motion / MikeOS",
      "urgency": "soon",
      "sourceRefs": [
        "Motion open tasks",
        "Home Assistant CLARA todo"
      ],
      "freshness": "2026-07-03 02:14 +01:00",
      "actionMode": "route_only"
    },
    {
      "id": "2026-07-03-system-002",
      "title": "PC Analysis exists but its evidence is stale",
      "domain": "system",
      "whyNow": "The existing PC Analysis utility area is present, but the newest observed report folder is from 2026-03-05.",
      "nextAction": "If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.",
      "owner": "MikeOS",
      "urgency": "watch",
      "sourceRefs": [
        "PC Analysis report listing",
        "protocols/machine-health.md"
      ],
      "freshness": "stale",
      "actionMode": "route_only"
    },
    {
      "id": "2026-07-03-home-property-001",
      "title": "Window surround repair candidate",
      "domain": "home",
      "whyNow": "Photo evidence shows apparent cracking or damage around an exterior window surround; it needs triage before it becomes forgotten.",
      "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
      "owner": "Mike",
      "urgency": "today",
      "sourceRefs": [
        "Photo evidence",
        "property-maintenance candidate"
      ],
      "freshness": "fresh",
      "actionMode": "route_only",
      "entityId": "household",
      "assetType": "property",
      "obligationType": "property-maintenance"
    }
  ],
  "waitingOnMike": [
    "Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.",
    "Confirm whether health admin gets a bounded slot today or is deliberately deferred."
  ],
  "waitingOnOthers": [
    "Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed."
  ],
  "activeWorkers": [
    "Elysium Morning/Lunch ADO Triage - EA-owned recurring Elysium scan signal.",
    "PM Work Queue - PM Worker - PM queue/state-machine worker.",
    "PM Work Queue - EA Worker - EA package/evidence worker.",
    "PM Work Queue - Solution Architect Worker - SA implementation/handoff worker.",
    "Weekday Morning Brief - Existing daily brief source; useful pattern for MikeOS daily cards."
  ],
  "staleSources": [
    "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
    "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
    "PC Analysis - existing reports are stale."
  ],
  "sources": [
    {
      "source": "MikeOS scaffold",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "fresh",
      "notes": "Current repo state read before live pass."
    },
    {
      "source": "Elysium M365 calendar",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "fresh",
      "notes": "Bounded read for 2026-07-03 only; stored as distilled schedule shape."
    },
    {
      "source": "Outlook calendar route",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "fresh",
      "notes": "Bounded read for 2026-07-03 only; no event bodies stored."
    },
    {
      "source": "Motion",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "fresh",
      "notes": "Default open-task page and schedules read; backlog/order needs replan."
    },
    {
      "source": "Home Assistant route",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "fresh",
      "notes": "Overview and selected todo lists read; no Home Assistant writes."
    },
    {
      "source": "Practice Manager local registers",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "fresh",
      "notes": "PM request index, open actions, role queue, and Solution Architect queue read; no raw evidence copied."
    },
    {
      "source": "PM Work Queue",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "fresh",
      "notes": "Live SharePoint list reachable; stale scheduled rows need PM review."
    },
    {
      "source": "Elysium Assistant route",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "route confirmed",
      "notes": "No raw mail or Teams read in this pass; use EA only for evidence/package refresh."
    },
    {
      "source": "Solution Architect route",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "route confirmed",
      "notes": "Read PM readiness state only; no dev workspace changes."
    },
    {
      "source": "Codex automations",
      "last_checked": "2026-07-03 01:45 +01:00",
      "freshness": "today",
      "notes": "Active automation names observed by read-only metadata scan."
    },
    {
      "source": "PC Analysis utility",
      "last_checked": "2026-07-03 02:14 +01:00",
      "freshness": "stale",
      "notes": "Utility area exists; newest observed report folder is 2026-03-05."
    },
    {
      "source": "CLARA registries",
      "last_checked": "2026-07-03",
      "freshness": "today",
      "notes": "Route known from MikeOS/CLARA planning; no CLARA filesystem refresh in this live pass."
    }
  ],
  "sourceSummary": {
    "total": 12,
    "fresh": 11,
    "stale": 1
  },
  "kpis": {
    "dueToday": 4,
    "waitingOnMike": 2,
    "waitingOnOthers": 1,
    "parked": 0,
    "staleSources": 3,
    "sourceFreshnessPercent": 92
  },
  "zones": [
    {
      "id": "today",
      "label": "Today",
      "route": "/today",
      "icon": "target",
      "summary": "Daily pulse, due work, waiting items, and stale signals.",
      "theme": "today",
      "items": [
        {
          "id": "today-due",
          "label": "Due today",
          "route": "/today/due"
        },
        {
          "id": "today-waiting-on-me",
          "label": "Waiting on me",
          "route": "/today/waiting-on-me"
        },
        {
          "id": "today-waiting-on-others",
          "label": "Waiting on others",
          "route": "/today/waiting-on-others"
        },
        {
          "id": "today-parked",
          "label": "Parked",
          "route": "/today/parked"
        },
        {
          "id": "today-source-freshness",
          "label": "Source freshness",
          "route": "/today/source-freshness"
        }
      ]
    },
    {
      "id": "work",
      "label": "Work",
      "route": "/work",
      "icon": "laptop",
      "summary": "Companies, business lines, customer delivery, products, and admin.",
      "theme": "work",
      "items": [
        {
          "id": "work-elysium-dynamics",
          "label": "Elysium",
          "route": "/work/elysium-dynamics"
        },
        {
          "id": "work-invigorate-it",
          "label": "Invigorate",
          "route": "/work/invigorate-it"
        },
        {
          "id": "work-invigorate-it-bc-nav-consulting",
          "label": "BC/NAV consulting",
          "route": "/work/invigorate-it/bc-nav-consulting"
        },
        {
          "id": "work-invigorate-it-products",
          "label": "Products",
          "route": "/work/invigorate-it/products"
        },
        {
          "id": "work-invigorate-it-bc-nav-consulting-customer-projects",
          "label": "Customer projects",
          "route": "/work/invigorate-it/bc-nav-consulting/customer-projects"
        }
      ]
    },
    {
      "id": "life-admin",
      "label": "Life Admin",
      "route": "/life-admin",
      "icon": "person",
      "summary": "Personal obligations, documents, policies, vehicles, properties, and health.",
      "theme": "life",
      "items": [
        {
          "id": "life-admin-insurance",
          "label": "Insurance",
          "route": "/life-admin/insurance"
        },
        {
          "id": "life-admin-vehicles-properties",
          "label": "Vehicles / properties",
          "route": "/life-admin/vehicles-properties"
        },
        {
          "id": "life-admin-properties-maintenance",
          "label": "Property maintenance",
          "route": "/life-admin/properties/maintenance"
        },
        {
          "id": "life-admin-personal-money",
          "label": "Money",
          "route": "/life-admin/personal-money"
        },
        {
          "id": "life-admin-identity-legal",
          "label": "Identity / legal",
          "route": "/life-admin/identity-legal"
        },
        {
          "id": "life-admin-health",
          "label": "Health",
          "route": "/life-admin/health"
        },
        {
          "id": "life-admin-family-education",
          "label": "Family / education",
          "route": "/life-admin/family-education"
        },
        {
          "id": "life-admin-documents",
          "label": "Documents",
          "route": "/life-admin/documents"
        }
      ]
    },
    {
      "id": "home",
      "label": "Home",
      "route": "/home",
      "icon": "home",
      "summary": "Live home state, chores, devices, batteries, appliances, and automations.",
      "theme": "home",
      "items": [
        {
          "id": "home-live-state",
          "label": "Live state",
          "route": "/home/live-state"
        },
        {
          "id": "home-property-maintenance",
          "label": "Property maintenance",
          "route": "/home/property-maintenance"
        },
        {
          "id": "home-batteries",
          "label": "Batteries",
          "route": "/home/batteries"
        },
        {
          "id": "home-devices",
          "label": "Devices",
          "route": "/home/devices"
        },
        {
          "id": "home-chores",
          "label": "Chores",
          "route": "/home/chores"
        },
        {
          "id": "home-appliances",
          "label": "Appliances",
          "route": "/home/appliances"
        },
        {
          "id": "home-automations",
          "label": "Automations",
          "route": "/home/automations"
        }
      ]
    },
    {
      "id": "projects",
      "label": "Projects",
      "route": "/projects",
      "icon": "bulb",
      "summary": "MikeOS, CLARA, DnD, experiments, parked builds, and ideas.",
      "theme": "projects",
      "items": [
        {
          "id": "projects-mikeos",
          "label": "MikeOS",
          "route": "/projects/mikeos"
        },
        {
          "id": "projects-clara",
          "label": "CLARA",
          "route": "/projects/clara"
        },
        {
          "id": "projects-dnd-worldbuilding",
          "label": "DnD / worldbuilding",
          "route": "/projects/dnd-worldbuilding"
        },
        {
          "id": "projects-experiments",
          "label": "Experiments",
          "route": "/projects/experiments"
        },
        {
          "id": "projects-parked",
          "label": "Parked ideas",
          "route": "/projects/parked"
        }
      ]
    },
    {
      "id": "system",
      "label": "System",
      "route": "/system",
      "icon": "gear",
      "summary": "Source health, automations, Motion trust, Life Index, PC Analysis, and model health.",
      "theme": "system",
      "items": [
        {
          "id": "system-sources",
          "label": "Sources",
          "route": "/system/sources"
        },
        {
          "id": "system-automations",
          "label": "Automations",
          "route": "/system/automations"
        },
        {
          "id": "system-motion",
          "label": "Motion",
          "route": "/system/motion"
        },
        {
          "id": "system-life-index",
          "label": "Life Index",
          "route": "/system/life-index"
        },
        {
          "id": "system-pc-analysis",
          "label": "PC Analysis",
          "route": "/system/pc-analysis"
        },
        {
          "id": "system-model-health",
          "label": "Model health",
          "route": "/system/model-health"
        }
      ]
    }
  ],
  "tasksByZone": {
    "today": [
      {
        "id": "2026-07-03-work-001",
        "title": "TWMA owns the morning work shape",
        "urgency": "today",
        "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Elysium M365 calendar; Motion open tasks",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-work-002",
        "title": "PM Work Queue has stale scheduled handoffs",
        "urgency": "today",
        "nextAction": "Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "PM Work Queue; PM request index; PM open actions; Solution Architect queue",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-001",
        "title": "Home is reachable and not currently chore-blocked",
        "urgency": "watch",
        "nextAction": "Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant overview; Home Assistant todo lists",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-health-001",
        "title": "Health admin is present but should be deliberately slotted",
        "urgency": "soon",
        "nextAction": "Give health admin one bounded slot or explicitly defer it in Motion; MikeOS should not write health task state without approval.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant medicine todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-system-001",
        "title": "Motion needs a cleanup/replan pass before it can be trusted as order",
        "urgency": "soon",
        "nextAction": "Use Motion as a task inventory today, not as a perfect priority order; run a daily Motion connection and replan pass after the urgent admin items.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant CLARA todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-system-002",
        "title": "PC Analysis exists but its evidence is stale",
        "urgency": "watch",
        "nextAction": "If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.",
        "route": "/today/due",
        "freshness": "stale",
        "source": "PC Analysis report listing; protocols/machine-health.md",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/today/due",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      },
      {
        "id": "waiting-mike-1",
        "title": "Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.",
        "urgency": "today",
        "nextAction": "Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.",
        "route": "/today/waiting-on-me",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "waiting-mike-2",
        "title": "Confirm whether health admin gets a bounded slot today or is deliberately deferred.",
        "urgency": "today",
        "nextAction": "Confirm whether health admin gets a bounded slot today or is deliberately deferred.",
        "route": "/today/waiting-on-me",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "waiting-others-1",
        "title": "Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed.",
        "urgency": "watch",
        "nextAction": "Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed.",
        "route": "/today/waiting-on-others",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "read_only"
      }
    ],
    "work": [
      {
        "id": "2026-07-03-work-001",
        "title": "TWMA owns the morning work shape",
        "urgency": "today",
        "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
        "route": "/work",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Elysium M365 calendar; Motion open tasks",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-work-002",
        "title": "PM Work Queue has stale scheduled handoffs",
        "urgency": "today",
        "nextAction": "Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.",
        "route": "/work",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "PM Work Queue; PM request index; PM open actions; Solution Architect queue",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/work/invigorate-it/company-admin",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      }
    ],
    "life-admin": [
      {
        "id": "2026-07-03-health-001",
        "title": "Health admin is present but should be deliberately slotted",
        "urgency": "soon",
        "nextAction": "Give health admin one bounded slot or explicitly defer it in Motion; MikeOS should not write health task state without approval.",
        "route": "/life-admin/health",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant medicine todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/life-admin/properties",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "home": [
      {
        "id": "2026-07-03-home-001",
        "title": "Home is reachable and not currently chore-blocked",
        "urgency": "watch",
        "nextAction": "Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.",
        "route": "/home",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant overview; Home Assistant todo lists",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/home",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "projects": [
      {
        "id": "projects-board",
        "title": "Review parked and active project boards",
        "urgency": "watch",
        "nextAction": "Use Projects for MikeOS, CLARA, DnD/worldbuilding, experiments, and parked ideas after today's obligations are clear.",
        "route": "/projects",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "dashboard/pulse/page-plan.md",
        "actionMode": "read_only"
      }
    ],
    "system": [
      {
        "id": "2026-07-03-system-001",
        "title": "Motion needs a cleanup/replan pass before it can be trusted as order",
        "urgency": "soon",
        "nextAction": "Use Motion as a task inventory today, not as a perfect priority order; run a daily Motion connection and replan pass after the urgent admin items.",
        "route": "/system",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant CLARA todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-system-002",
        "title": "PC Analysis exists but its evidence is stale",
        "urgency": "watch",
        "nextAction": "If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.",
        "route": "/system",
        "freshness": "stale",
        "source": "PC Analysis report listing; protocols/machine-health.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-1",
        "title": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "urgency": "soon",
        "nextAction": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-2",
        "title": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "urgency": "soon",
        "nextAction": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-3",
        "title": "PC Analysis - existing reports are stale.",
        "urgency": "soon",
        "nextAction": "PC Analysis - existing reports are stale.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      }
    ]
  },
  "viewsById": {
    "today": {
      "id": "today",
      "label": "Today",
      "route": "/today",
      "summary": "Daily pulse, due work, waiting items, and stale signals.",
      "parentZoneId": "today",
      "theme": "today"
    },
    "work": {
      "id": "work",
      "label": "Work",
      "route": "/work",
      "summary": "Companies, business lines, customer delivery, products, and admin.",
      "parentZoneId": "work",
      "theme": "work"
    },
    "life-admin": {
      "id": "life-admin",
      "label": "Life Admin",
      "route": "/life-admin",
      "summary": "Personal obligations, documents, policies, vehicles, properties, and health.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "home": {
      "id": "home",
      "label": "Home",
      "route": "/home",
      "summary": "Live home state, chores, devices, batteries, appliances, and automations.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "projects": {
      "id": "projects",
      "label": "Projects",
      "route": "/projects",
      "summary": "MikeOS, CLARA, DnD, experiments, parked builds, and ideas.",
      "parentZoneId": "projects",
      "theme": "projects"
    },
    "system": {
      "id": "system",
      "label": "System",
      "route": "/system",
      "summary": "Source health, automations, Motion trust, Life Index, PC Analysis, and model health.",
      "parentZoneId": "system",
      "theme": "system"
    },
    "today-due": {
      "id": "today-due",
      "label": "Due today",
      "route": "/today/due",
      "summary": "Due today tasks and safe handoff routes inside Today.",
      "parentZoneId": "today",
      "theme": "today"
    },
    "today-waiting-on-me": {
      "id": "today-waiting-on-me",
      "label": "Waiting on me",
      "route": "/today/waiting-on-me",
      "summary": "Waiting on me tasks and safe handoff routes inside Today.",
      "parentZoneId": "today",
      "theme": "today"
    },
    "today-waiting-on-others": {
      "id": "today-waiting-on-others",
      "label": "Waiting on others",
      "route": "/today/waiting-on-others",
      "summary": "Waiting on others tasks and safe handoff routes inside Today.",
      "parentZoneId": "today",
      "theme": "today"
    },
    "today-parked": {
      "id": "today-parked",
      "label": "Parked",
      "route": "/today/parked",
      "summary": "Parked tasks and safe handoff routes inside Today.",
      "parentZoneId": "today",
      "theme": "today"
    },
    "today-source-freshness": {
      "id": "today-source-freshness",
      "label": "Source freshness",
      "route": "/today/source-freshness",
      "summary": "Source freshness tasks and safe handoff routes inside Today.",
      "parentZoneId": "today",
      "theme": "today"
    },
    "work-elysium-dynamics": {
      "id": "work-elysium-dynamics",
      "label": "Elysium",
      "route": "/work/elysium-dynamics",
      "summary": "Elysium tasks and safe handoff routes inside Work.",
      "parentZoneId": "work",
      "theme": "work"
    },
    "work-invigorate-it": {
      "id": "work-invigorate-it",
      "label": "Invigorate",
      "route": "/work/invigorate-it",
      "summary": "Invigorate tasks and safe handoff routes inside Work.",
      "parentZoneId": "work",
      "theme": "work"
    },
    "work-invigorate-it-bc-nav-consulting": {
      "id": "work-invigorate-it-bc-nav-consulting",
      "label": "BC/NAV consulting",
      "route": "/work/invigorate-it/bc-nav-consulting",
      "summary": "BC/NAV consulting tasks and safe handoff routes inside Work.",
      "parentZoneId": "work",
      "theme": "work"
    },
    "work-invigorate-it-products": {
      "id": "work-invigorate-it-products",
      "label": "Products",
      "route": "/work/invigorate-it/products",
      "summary": "Products tasks and safe handoff routes inside Work.",
      "parentZoneId": "work",
      "theme": "work"
    },
    "work-invigorate-it-bc-nav-consulting-customer-projects": {
      "id": "work-invigorate-it-bc-nav-consulting-customer-projects",
      "label": "Customer projects",
      "route": "/work/invigorate-it/bc-nav-consulting/customer-projects",
      "summary": "Customer projects tasks and safe handoff routes inside Work.",
      "parentZoneId": "work",
      "theme": "work"
    },
    "life-admin-insurance": {
      "id": "life-admin-insurance",
      "label": "Insurance",
      "route": "/life-admin/insurance",
      "summary": "Insurance tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "life-admin-vehicles-properties": {
      "id": "life-admin-vehicles-properties",
      "label": "Vehicles / properties",
      "route": "/life-admin/vehicles-properties",
      "summary": "Vehicles / properties tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "life-admin-properties-maintenance": {
      "id": "life-admin-properties-maintenance",
      "label": "Property maintenance",
      "route": "/life-admin/properties/maintenance",
      "summary": "Property maintenance tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "life-admin-personal-money": {
      "id": "life-admin-personal-money",
      "label": "Money",
      "route": "/life-admin/personal-money",
      "summary": "Money tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "life-admin-identity-legal": {
      "id": "life-admin-identity-legal",
      "label": "Identity / legal",
      "route": "/life-admin/identity-legal",
      "summary": "Identity / legal tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "life-admin-health": {
      "id": "life-admin-health",
      "label": "Health",
      "route": "/life-admin/health",
      "summary": "Health tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "life-admin-family-education": {
      "id": "life-admin-family-education",
      "label": "Family / education",
      "route": "/life-admin/family-education",
      "summary": "Family / education tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "life-admin-documents": {
      "id": "life-admin-documents",
      "label": "Documents",
      "route": "/life-admin/documents",
      "summary": "Documents tasks and safe handoff routes inside Life Admin.",
      "parentZoneId": "life-admin",
      "theme": "life"
    },
    "home-live-state": {
      "id": "home-live-state",
      "label": "Live state",
      "route": "/home/live-state",
      "summary": "Live state tasks and safe handoff routes inside Home.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "home-property-maintenance": {
      "id": "home-property-maintenance",
      "label": "Property maintenance",
      "route": "/home/property-maintenance",
      "summary": "Property maintenance tasks and safe handoff routes inside Home.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "home-batteries": {
      "id": "home-batteries",
      "label": "Batteries",
      "route": "/home/batteries",
      "summary": "Batteries tasks and safe handoff routes inside Home.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "home-devices": {
      "id": "home-devices",
      "label": "Devices",
      "route": "/home/devices",
      "summary": "Devices tasks and safe handoff routes inside Home.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "home-chores": {
      "id": "home-chores",
      "label": "Chores",
      "route": "/home/chores",
      "summary": "Chores tasks and safe handoff routes inside Home.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "home-appliances": {
      "id": "home-appliances",
      "label": "Appliances",
      "route": "/home/appliances",
      "summary": "Appliances tasks and safe handoff routes inside Home.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "home-automations": {
      "id": "home-automations",
      "label": "Automations",
      "route": "/home/automations",
      "summary": "Automations tasks and safe handoff routes inside Home.",
      "parentZoneId": "home",
      "theme": "home"
    },
    "projects-mikeos": {
      "id": "projects-mikeos",
      "label": "MikeOS",
      "route": "/projects/mikeos",
      "summary": "MikeOS tasks and safe handoff routes inside Projects.",
      "parentZoneId": "projects",
      "theme": "projects"
    },
    "projects-clara": {
      "id": "projects-clara",
      "label": "CLARA",
      "route": "/projects/clara",
      "summary": "CLARA tasks and safe handoff routes inside Projects.",
      "parentZoneId": "projects",
      "theme": "projects"
    },
    "projects-dnd-worldbuilding": {
      "id": "projects-dnd-worldbuilding",
      "label": "DnD / worldbuilding",
      "route": "/projects/dnd-worldbuilding",
      "summary": "DnD / worldbuilding tasks and safe handoff routes inside Projects.",
      "parentZoneId": "projects",
      "theme": "projects"
    },
    "projects-experiments": {
      "id": "projects-experiments",
      "label": "Experiments",
      "route": "/projects/experiments",
      "summary": "Experiments tasks and safe handoff routes inside Projects.",
      "parentZoneId": "projects",
      "theme": "projects"
    },
    "projects-parked": {
      "id": "projects-parked",
      "label": "Parked ideas",
      "route": "/projects/parked",
      "summary": "Parked ideas tasks and safe handoff routes inside Projects.",
      "parentZoneId": "projects",
      "theme": "projects"
    },
    "system-sources": {
      "id": "system-sources",
      "label": "Sources",
      "route": "/system/sources",
      "summary": "Sources tasks and safe handoff routes inside System.",
      "parentZoneId": "system",
      "theme": "system"
    },
    "system-automations": {
      "id": "system-automations",
      "label": "Automations",
      "route": "/system/automations",
      "summary": "Automations tasks and safe handoff routes inside System.",
      "parentZoneId": "system",
      "theme": "system"
    },
    "system-motion": {
      "id": "system-motion",
      "label": "Motion",
      "route": "/system/motion",
      "summary": "Motion tasks and safe handoff routes inside System.",
      "parentZoneId": "system",
      "theme": "system"
    },
    "system-life-index": {
      "id": "system-life-index",
      "label": "Life Index",
      "route": "/system/life-index",
      "summary": "Life Index tasks and safe handoff routes inside System.",
      "parentZoneId": "system",
      "theme": "system"
    },
    "system-pc-analysis": {
      "id": "system-pc-analysis",
      "label": "PC Analysis",
      "route": "/system/pc-analysis",
      "summary": "PC Analysis tasks and safe handoff routes inside System.",
      "parentZoneId": "system",
      "theme": "system"
    },
    "system-model-health": {
      "id": "system-model-health",
      "label": "Model health",
      "route": "/system/model-health",
      "summary": "Model health tasks and safe handoff routes inside System.",
      "parentZoneId": "system",
      "theme": "system"
    }
  },
  "tasksByView": {
    "today": [
      {
        "id": "2026-07-03-work-001",
        "title": "TWMA owns the morning work shape",
        "urgency": "today",
        "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Elysium M365 calendar; Motion open tasks",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-work-002",
        "title": "PM Work Queue has stale scheduled handoffs",
        "urgency": "today",
        "nextAction": "Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "PM Work Queue; PM request index; PM open actions; Solution Architect queue",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-001",
        "title": "Home is reachable and not currently chore-blocked",
        "urgency": "watch",
        "nextAction": "Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant overview; Home Assistant todo lists",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-health-001",
        "title": "Health admin is present but should be deliberately slotted",
        "urgency": "soon",
        "nextAction": "Give health admin one bounded slot or explicitly defer it in Motion; MikeOS should not write health task state without approval.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant medicine todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-system-001",
        "title": "Motion needs a cleanup/replan pass before it can be trusted as order",
        "urgency": "soon",
        "nextAction": "Use Motion as a task inventory today, not as a perfect priority order; run a daily Motion connection and replan pass after the urgent admin items.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant CLARA todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-system-002",
        "title": "PC Analysis exists but its evidence is stale",
        "urgency": "watch",
        "nextAction": "If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.",
        "route": "/today/due",
        "freshness": "stale",
        "source": "PC Analysis report listing; protocols/machine-health.md",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/today/due",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      },
      {
        "id": "waiting-mike-1",
        "title": "Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.",
        "urgency": "today",
        "nextAction": "Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.",
        "route": "/today/waiting-on-me",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "waiting-mike-2",
        "title": "Confirm whether health admin gets a bounded slot today or is deliberately deferred.",
        "urgency": "today",
        "nextAction": "Confirm whether health admin gets a bounded slot today or is deliberately deferred.",
        "route": "/today/waiting-on-me",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "waiting-others-1",
        "title": "Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed.",
        "urgency": "watch",
        "nextAction": "Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed.",
        "route": "/today/waiting-on-others",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "read_only"
      }
    ],
    "work": [
      {
        "id": "2026-07-03-work-001",
        "title": "TWMA owns the morning work shape",
        "urgency": "today",
        "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
        "route": "/work",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Elysium M365 calendar; Motion open tasks",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-work-002",
        "title": "PM Work Queue has stale scheduled handoffs",
        "urgency": "today",
        "nextAction": "Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.",
        "route": "/work",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "PM Work Queue; PM request index; PM open actions; Solution Architect queue",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/work/invigorate-it/company-admin",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      }
    ],
    "life-admin": [
      {
        "id": "2026-07-03-health-001",
        "title": "Health admin is present but should be deliberately slotted",
        "urgency": "soon",
        "nextAction": "Give health admin one bounded slot or explicitly defer it in Motion; MikeOS should not write health task state without approval.",
        "route": "/life-admin/health",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant medicine todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/life-admin/properties",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "home": [
      {
        "id": "2026-07-03-home-001",
        "title": "Home is reachable and not currently chore-blocked",
        "urgency": "watch",
        "nextAction": "Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.",
        "route": "/home",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant overview; Home Assistant todo lists",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/home",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "projects": [
      {
        "id": "projects-board",
        "title": "Review parked and active project boards",
        "urgency": "watch",
        "nextAction": "Use Projects for MikeOS, CLARA, DnD/worldbuilding, experiments, and parked ideas after today's obligations are clear.",
        "route": "/projects",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "dashboard/pulse/page-plan.md",
        "actionMode": "read_only"
      }
    ],
    "system": [
      {
        "id": "2026-07-03-system-001",
        "title": "Motion needs a cleanup/replan pass before it can be trusted as order",
        "urgency": "soon",
        "nextAction": "Use Motion as a task inventory today, not as a perfect priority order; run a daily Motion connection and replan pass after the urgent admin items.",
        "route": "/system",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant CLARA todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-system-002",
        "title": "PC Analysis exists but its evidence is stale",
        "urgency": "watch",
        "nextAction": "If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.",
        "route": "/system",
        "freshness": "stale",
        "source": "PC Analysis report listing; protocols/machine-health.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-1",
        "title": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "urgency": "soon",
        "nextAction": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-2",
        "title": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "urgency": "soon",
        "nextAction": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-3",
        "title": "PC Analysis - existing reports are stale.",
        "urgency": "soon",
        "nextAction": "PC Analysis - existing reports are stale.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      }
    ],
    "today-due": [
      {
        "id": "2026-07-03-work-001",
        "title": "TWMA owns the morning work shape",
        "urgency": "today",
        "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Elysium M365 calendar; Motion open tasks",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-work-002",
        "title": "PM Work Queue has stale scheduled handoffs",
        "urgency": "today",
        "nextAction": "Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.",
        "route": "/today/due",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "PM Work Queue; PM request index; PM open actions; Solution Architect queue",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/today/due",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "today-waiting-on-me": [
      {
        "id": "waiting-mike-1",
        "title": "Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.",
        "urgency": "today",
        "nextAction": "Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.",
        "route": "/today/waiting-on-me",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "waiting-mike-2",
        "title": "Confirm whether health admin gets a bounded slot today or is deliberately deferred.",
        "urgency": "today",
        "nextAction": "Confirm whether health admin gets a bounded slot today or is deliberately deferred.",
        "route": "/today/waiting-on-me",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      }
    ],
    "today-waiting-on-others": [
      {
        "id": "waiting-others-1",
        "title": "Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed.",
        "urgency": "watch",
        "nextAction": "Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed.",
        "route": "/today/waiting-on-others",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "read_only"
      }
    ],
    "today-parked": [
      {
        "id": "parked-review",
        "title": "Review parked items",
        "urgency": "watch",
        "nextAction": "Parked count is currently generated as zero. Revisit once new parked items enter MikeOS state.",
        "route": "/today/parked",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "read_only"
      }
    ],
    "today-source-freshness": [
      {
        "id": "stale-source-1",
        "title": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "urgency": "soon",
        "nextAction": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "route": "/today/source-freshness",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-2",
        "title": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "urgency": "soon",
        "nextAction": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "route": "/today/source-freshness",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-3",
        "title": "PC Analysis - existing reports are stale.",
        "urgency": "soon",
        "nextAction": "PC Analysis - existing reports are stale.",
        "route": "/today/source-freshness",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      }
    ],
    "work-elysium-dynamics": [
      {
        "id": "2026-07-03-work-001",
        "title": "TWMA owns the morning work shape",
        "urgency": "today",
        "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
        "route": "/work",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Elysium M365 calendar; Motion open tasks",
        "actionMode": "read_only"
      }
    ],
    "work-invigorate-it": [
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/work/invigorate-it/company-admin",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      }
    ],
    "work-invigorate-it-bc-nav-consulting": [
      {
        "id": "work-invigorate-it-bc-nav-consulting-review",
        "title": "Review BC/NAV consulting",
        "urgency": "watch",
        "nextAction": "No specific generated actions are waiting here yet. Open /work/invigorate-it/bc-nav-consulting when this area needs a focused pass.",
        "route": "/work/invigorate-it/bc-nav-consulting",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "dashboard/pulse/page-plan.md",
        "actionMode": "read_only"
      }
    ],
    "work-invigorate-it-products": [
      {
        "id": "products-review",
        "title": "Review product line tasks",
        "urgency": "watch",
        "nextAction": "Track NAV to BC Bridge and Outlook to Timesheet as products under Invigorate IT.",
        "route": "/work/invigorate-it/products",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "registries/entities.md",
        "actionMode": "read_only"
      }
    ],
    "work-invigorate-it-bc-nav-consulting-customer-projects": [
      {
        "id": "2026-07-03-work-001",
        "title": "TWMA owns the morning work shape",
        "urgency": "today",
        "nextAction": "Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.",
        "route": "/work",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Elysium M365 calendar; Motion open tasks",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-work-002",
        "title": "PM Work Queue has stale scheduled handoffs",
        "urgency": "today",
        "nextAction": "Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.",
        "route": "/work",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "PM Work Queue; PM request index; PM open actions; Solution Architect queue",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/work/invigorate-it/company-admin",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      }
    ],
    "life-admin-health": [
      {
        "id": "2026-07-03-health-001",
        "title": "Health admin is present but should be deliberately slotted",
        "urgency": "soon",
        "nextAction": "Give health admin one bounded slot or explicitly defer it in Motion; MikeOS should not write health task state without approval.",
        "route": "/life-admin/health",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant medicine todo",
        "actionMode": "route_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/life-admin/properties",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "life-admin-personal-money": [
      {
        "id": "2026-07-03-admin-001",
        "title": "Invoicing and Azure subscription decision need a bounded admin pass",
        "urgency": "today",
        "nextAction": "Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.",
        "route": "/life-admin/personal-money",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks",
        "actionMode": "route_only"
      }
    ],
    "life-admin-insurance": [
      {
        "id": "insurance-index",
        "title": "Find and review insurance documents",
        "urgency": "watch",
        "nextAction": "Use the Life Index and Life Admin routes to surface policies, renewals, and document links without exposing raw document text.",
        "route": "/life-admin/insurance",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "protocols/life-index.md",
        "actionMode": "read_only"
      }
    ],
    "life-admin-vehicles-properties": [
      {
        "id": "vehicles-properties-index",
        "title": "Review vehicle and property obligations",
        "urgency": "watch",
        "nextAction": "Keep MOT, vehicle tax, property, landlord, and household obligations visible here as sources are connected.",
        "route": "/life-admin/vehicles-properties",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "registries/obligation-types.md",
        "actionMode": "read_only"
      }
    ],
    "life-admin-properties-maintenance": [
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/life-admin/properties/maintenance",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "life-admin-identity-legal": [
      {
        "id": "identity-legal-index",
        "title": "Review identity and legal document coverage",
        "urgency": "watch",
        "nextAction": "Use representative filenames and category counts only until an explicit document is requested.",
        "route": "/life-admin/identity-legal",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "protocols/life-index.md",
        "actionMode": "read_only"
      }
    ],
    "life-admin-family-education": [
      {
        "id": "family-education-index",
        "title": "Review family and education admin",
        "urgency": "watch",
        "nextAction": "Keep school, family, and education paperwork surfaced as distilled Life Index summaries.",
        "route": "/life-admin/family-education",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "protocols/life-index.md",
        "actionMode": "read_only"
      }
    ],
    "life-admin-documents": [
      {
        "id": "documents-index",
        "title": "Review document coverage",
        "urgency": "watch",
        "nextAction": "Use the private Life Index for local document discovery and publish only safe summaries into MikeOS.",
        "route": "/life-admin/documents",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "protocols/life-index.md",
        "actionMode": "read_only"
      }
    ],
    "home-live-state": [
      {
        "id": "2026-07-03-home-001",
        "title": "Home is reachable and not currently chore-blocked",
        "urgency": "watch",
        "nextAction": "Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.",
        "route": "/home",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant overview; Home Assistant todo lists",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/home",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "home-chores": [
      {
        "id": "2026-07-03-home-001",
        "title": "Home is reachable and not currently chore-blocked",
        "urgency": "watch",
        "nextAction": "Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.",
        "route": "/home",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant overview; Home Assistant todo lists",
        "actionMode": "read_only"
      },
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/home",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "home-property-maintenance": [
      {
        "id": "2026-07-03-home-property-001",
        "title": "Window surround repair candidate",
        "urgency": "today",
        "nextAction": "Confirm which property/window this is and decide whether to inspect, monitor, or contact a tradesperson.",
        "route": "/home/property-maintenance",
        "freshness": "fresh",
        "source": "Photo evidence; property-maintenance candidate",
        "actionMode": "route_only"
      }
    ],
    "home-batteries": [
      {
        "id": "battery-review",
        "title": "Check low battery signals",
        "urgency": "soon",
        "nextAction": "Review Home Assistant battery state and the Watergate battery signal before deciding on a change.",
        "route": "/home/batteries",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant live-state route",
        "actionMode": "read_only"
      }
    ],
    "home-devices": [
      {
        "id": "device-review",
        "title": "Review device health",
        "urgency": "watch",
        "nextAction": "Start from live Home Assistant evidence before any device write or automation change.",
        "route": "/home/devices",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant live-state route",
        "actionMode": "read_only"
      }
    ],
    "home-appliances": [
      {
        "id": "appliance-review",
        "title": "Review appliance state",
        "urgency": "watch",
        "nextAction": "Use live Home Assistant state before changing appliance controls or blocker logic.",
        "route": "/home/appliances",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant live-state route",
        "actionMode": "read_only"
      }
    ],
    "home-automations": [
      {
        "id": "home-automation-review",
        "title": "Review home automations",
        "urgency": "watch",
        "nextAction": "Check automation health and approval boundaries before any write-capable route.",
        "route": "/home/automations",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Home Assistant live-state route",
        "actionMode": "read_only"
      }
    ],
    "projects-mikeos": [
      {
        "id": "mikeos-pulse-review",
        "title": "Continue MikeOS Pulse build",
        "urgency": "soon",
        "nextAction": "Keep the landing map and task workbench generated from safe state.",
        "route": "/projects/mikeos",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "dashboard/pulse/page-plan.md",
        "actionMode": "route_only"
      }
    ],
    "projects-clara": [
      {
        "id": "clara-review",
        "title": "Review CLARA front-door fit",
        "urgency": "watch",
        "nextAction": "Keep CLARA as the chief-of-staff layer beneath MikeOS rather than replacing it.",
        "route": "/projects/clara",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "routes.md",
        "actionMode": "read_only"
      }
    ],
    "projects-dnd-worldbuilding": [
      {
        "id": "dnd-review",
        "title": "Review DnD and worldbuilding queue",
        "urgency": "watch",
        "nextAction": "Open this route when creative project work is the selected focus.",
        "route": "/projects/dnd-worldbuilding",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "dashboard/pulse/page-plan.md",
        "actionMode": "read_only"
      }
    ],
    "projects-experiments": [
      {
        "id": "experiments-review",
        "title": "Review experiments",
        "urgency": "watch",
        "nextAction": "Keep speculative ideas parked until today's obligations are clear.",
        "route": "/projects/experiments",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "dashboard/pulse/page-plan.md",
        "actionMode": "read_only"
      }
    ],
    "projects-parked": [
      {
        "id": "parked-projects-review",
        "title": "Review parked project ideas",
        "urgency": "watch",
        "nextAction": "Choose one parked idea only after active work and life-admin obligations are stable.",
        "route": "/projects/parked",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "dashboard/pulse/page-plan.md",
        "actionMode": "read_only"
      }
    ],
    "system-sources": [
      {
        "id": "2026-07-03-system-002",
        "title": "PC Analysis exists but its evidence is stale",
        "urgency": "watch",
        "nextAction": "If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.",
        "route": "/system",
        "freshness": "stale",
        "source": "PC Analysis report listing; protocols/machine-health.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-1",
        "title": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "urgency": "soon",
        "nextAction": "PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-2",
        "title": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "urgency": "soon",
        "nextAction": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-3",
        "title": "PC Analysis - existing reports are stale.",
        "urgency": "soon",
        "nextAction": "PC Analysis - existing reports are stale.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      }
    ],
    "system-automations": [
      {
        "id": "automation-health",
        "title": "Review automation health",
        "urgency": "watch",
        "nextAction": "Check active workers, build scripts, and route freshness before trusting generated views.",
        "route": "/system/automations",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "read_only"
      }
    ],
    "system-motion": [
      {
        "id": "2026-07-03-system-001",
        "title": "Motion needs a cleanup/replan pass before it can be trusted as order",
        "urgency": "soon",
        "nextAction": "Use Motion as a task inventory today, not as a perfect priority order; run a daily Motion connection and replan pass after the urgent admin items.",
        "route": "/system",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "Motion open tasks; Home Assistant CLARA todo",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-2",
        "title": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "urgency": "soon",
        "nextAction": "Motion ordering - open-task inventory is live, but priority order needs a replan pass.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      }
    ],
    "system-life-index": [
      {
        "id": "life-index-review",
        "title": "Review Life Index status",
        "urgency": "watch",
        "nextAction": "Use private SQLite for search and publish only category counts or explicitly requested representative filenames.",
        "route": "/system/life-index",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "protocols/life-index.md",
        "actionMode": "read_only"
      }
    ],
    "system-pc-analysis": [
      {
        "id": "2026-07-03-system-002",
        "title": "PC Analysis exists but its evidence is stale",
        "urgency": "watch",
        "nextAction": "If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.",
        "route": "/system",
        "freshness": "stale",
        "source": "PC Analysis report listing; protocols/machine-health.md",
        "actionMode": "route_only"
      },
      {
        "id": "stale-source-3",
        "title": "PC Analysis - existing reports are stale.",
        "urgency": "soon",
        "nextAction": "PC Analysis - existing reports are stale.",
        "route": "/system/sources",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/today.md",
        "actionMode": "route_only"
      }
    ],
    "system-model-health": [
      {
        "id": "model-health-review",
        "title": "Review model health",
        "urgency": "watch",
        "nextAction": "Use this panel for model reliability and route confidence when automation evidence becomes stale.",
        "route": "/system/model-health",
        "freshness": "2026-07-03 02:14 +01:00",
        "source": "state/source-freshness.md",
        "actionMode": "read_only"
      }
    ]
  },
  "entities": [
    {
      "entity_id": "household",
      "name": "Mike / household",
      "kind": "person_household",
      "parent": "",
      "purpose": "Personal, family, home, health, and household administration.",
      "canonical_route": "Life Admin / CLARA as needed",
      "status": "active"
    },
    {
      "entity_id": "elysium-dynamics-ltd",
      "name": "Elysium Dynamics Ltd",
      "kind": "business",
      "parent": "",
      "purpose": "Elysium company admin and customer operations.",
      "canonical_route": "Practice Manager / Elysium Assistant",
      "status": "active"
    },
    {
      "entity_id": "invigorate-it-ltd",
      "name": "Invigorate IT Ltd",
      "kind": "business",
      "parent": "",
      "purpose": "Invigorate company admin and business-line ownership.",
      "canonical_route": "CLARA Work / Invigorate routes",
      "status": "active"
    },
    {
      "entity_id": "invigorate-bc-nav",
      "name": "BC/NAV Consulting / Development",
      "kind": "business_line",
      "parent": "invigorate-it-ltd",
      "purpose": "Business Central and NAV consulting, support, development, customer projects, and delivery artefacts.",
      "canonical_route": "Solution Architect",
      "status": "active"
    },
    {
      "entity_id": "invigorate-products",
      "name": "Products",
      "kind": "business_line",
      "parent": "invigorate-it-ltd",
      "purpose": "Product and IP work owned by Invigorate IT Ltd.",
      "canonical_route": "CLARA Work / project route",
      "status": "active"
    },
    {
      "entity_id": "product-nav-to-bc-bridge",
      "name": "NAV to BC Bridge",
      "kind": "product",
      "parent": "invigorate-products",
      "purpose": "Product concept for NAV-to-Business-Central transition support.",
      "canonical_route": "Products business line",
      "status": "planned"
    },
    {
      "entity_id": "product-outlook-to-timesheet",
      "name": "Outlook to Timesheet",
      "kind": "product",
      "parent": "invigorate-products",
      "purpose": "Product concept for turning Outlook/calendar activity into timesheet support.",
      "canonical_route": "Products business line",
      "status": "planned"
    },
    {
      "entity_id": "invigorate-wearyourmanual",
      "name": "WearYourManual",
      "kind": "business_line",
      "parent": "invigorate-it-ltd",
      "purpose": "WearYourManual product/shop/fulfilment line under Invigorate IT Ltd.",
      "canonical_route": "WearYourManual route",
      "status": "active"
    }
  ],
  "views": [
    {
      "view": "Today",
      "route": "/today",
      "purpose": "Daily priority surface across due obligations, waiting items, source freshness, and recommended next action."
    },
    {
      "view": "Work",
      "route": "/work",
      "purpose": "Business entities, business lines, customer delivery, business admin, and work obligations."
    },
    {
      "view": "Life Admin",
      "route": "/life-admin",
      "purpose": "Personal and household obligations, documents, vehicles, properties, health, legal, and family admin."
    },
    {
      "view": "Home",
      "route": "/home",
      "purpose": "Live home state, chores, devices, batteries, appliances, and automations."
    },
    {
      "view": "Projects",
      "route": "/projects",
      "purpose": "Non-urgent initiatives, creative work, parked builds, and MikeOS/CLARA buildout."
    },
    {
      "view": "System",
      "route": "/system",
      "purpose": "Source health, automation health, Motion trust, Life Index state, PC Analysis, and model health."
    }
  ],
  "sections": [
    {
      "name": "Today",
      "slug": "today",
      "routes": [
        "/today",
        "/today/due",
        "/today/waiting-on-me",
        "/today/waiting-on-others",
        "/today/parked",
        "/today/source-freshness"
      ]
    },
    {
      "name": "Work",
      "slug": "work",
      "routes": [
        "/work",
        "/work/elysium-dynamics",
        "/work/elysium-dynamics/company-admin",
        "/work/elysium-dynamics/customer-operations",
        "/work/invigorate-it",
        "/work/invigorate-it/company-admin",
        "/work/invigorate-it/bc-nav-consulting",
        "/work/invigorate-it/bc-nav-consulting/customers",
        "/work/invigorate-it/bc-nav-consulting/customer-projects",
        "/work/invigorate-it/products",
        "/work/invigorate-it/products/nav-to-bc-bridge",
        "/work/invigorate-it/products/outlook-to-timesheet",
        "/work/invigorate-it/wearyourmanual"
      ]
    },
    {
      "name": "Life Admin",
      "slug": "life-admin",
      "routes": [
        "/life-admin",
        "/life-admin/insurance",
        "/life-admin/vehicles",
        "/life-admin/properties",
        "/life-admin/properties/maintenance",
        "/life-admin/personal-money",
        "/life-admin/identity-legal",
        "/life-admin/health",
        "/life-admin/family-education",
        "/life-admin/documents"
      ]
    },
    {
      "name": "Home",
      "slug": "home",
      "routes": [
        "/home",
        "/home/live-state",
        "/home/property-maintenance",
        "/home/chores",
        "/home/devices",
        "/home/batteries",
        "/home/appliances",
        "/home/automations"
      ]
    },
    {
      "name": "Projects",
      "slug": "projects",
      "routes": [
        "/projects",
        "/projects/mikeos",
        "/projects/clara",
        "/projects/dnd-worldbuilding",
        "/projects/experiments",
        "/projects/parked"
      ]
    },
    {
      "name": "System",
      "slug": "system",
      "routes": [
        "/system",
        "/system/sources",
        "/system/automations",
        "/system/motion",
        "/system/life-index",
        "/system/pc-analysis",
        "/system/model-health"
      ]
    }
  ]
};
