# MikeOS Routes

Use this file to choose the owner of a request before collecting evidence or taking action.

## Route Matrix

| Request type | Owning system | Start here | MikeOS behavior |
| --- | --- | --- | --- |
| Daily composition, "what is on the cards" | MikeOS plus CLARA | `protocols/daily-cards.md` | Compose one brief from bounded sources. |
| Cross-domain life/work priority | CLARA | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\CLARA\AGENTS.md` | Route and interpret, do not duplicate CLARA policy. |
| Elysium customer state, request readiness, PM queue | Practice Manager | `C:\Users\MikeDalziel\Elysium Dynamics Ltd\*Practice Manager - Documents\AGENTS.md` | Read PM state first; ask EA/SA only when needed. |
| Elysium evidence scan or consultant package | Elysium Assistant | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Elysium Assistant\AGENTS.md` | Request distilled evidence and PM-facing summary. |
| Implementation, NAV/BC package, customer repo output | Solution Architect | `C:\Users\MikeDalziel\Invigorate IT Ltd\Invigorate IT Ltd - General\Visual Studio\Solution Architect\AGENTS.md` | Require PM queue item plus EA package before dev work. |
| Home automations, reminders, occupancy, live state | Home Assistant | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\CLARA\HomeAssistant\AGENTS.md` | Start from live evidence and Home Assistant workflow. |
| Managed tasks and task scheduling | Motion | Connector plus CLARA tool registry | Treat Motion as task state, not reminder delivery. |
| Local personal documents, archives, insurance, policies, paperwork | Life Index | `protocols/life-index.md` | Query the private local index; store only distilled summaries in MikeOS. |
| Work email, Teams, ADO triage across businesses | CLARA Work | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\CLARA\Work\AGENTS.md` | Clarify Elysium vs Invigorate IT vs both unless context is pinned. |
| Machine diagnostics and restart/service/storage checks | PC Analysis | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\Utilities\PC Analysis` | Reuse existing utilities; store only reports or pointers. |
| Codex automations and thread/runtime state | Codex app / `.codex` | `registries/automations.md` | Inspect active jobs and summarize health/staleness. |
| Long-lived learned context | Codex memory | `C:\Users\MikeDalziel\.codex\memories` | Use as background guidance; verify drift-prone facts. |

## Ambiguity Rules

- If Mike says "check email", "check Teams", or "run triage" from MikeOS without naming a business, ask which business unless the request says `both`.
- If Mike asks about a named Elysium customer or DP/SR item, start with Practice Manager state, then EA, then SA.
- If Mike asks "what should I do", compose daily cards; do not immediately deep-scan every system.
- If Mike asks for a Home Assistant behavior change, route to Home Assistant and require live incident reconstruction.
- If Mike asks for a PC scan, route to PC Analysis utilities rather than writing a new scanner.
- If Mike asks to find local saved personal paperwork, use the Life Index protocol before broad filesystem rummaging.

## Worker Dispatch Rules

Use a `WorkerBrief` when a specialist needs to inspect its own source of truth. The brief must name:

- role;
- workspace;
- question;
- allowed sources;
- forbidden sources;
- expected report shape;
- whether writing is allowed.

Workers report back using `WorkerReport`. MikeOS then composes the final answer.

## Handoff Discipline

MikeOS should never blur these boundaries:

- PM answers current Elysium state and readiness.
- EA interprets evidence and prepares consultant packages.
- SA implements from PM and EA handoffs.
- Customer repos remain canonical for customer delivery artifacts.
- Home Assistant live state outranks local notes for current home behavior.
- Motion is the task source of truth.
- MikeOS is the cockpit, not the warehouse.
