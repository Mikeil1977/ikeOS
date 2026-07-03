# MikeOS Systems Registry

This registry identifies the systems MikeOS is allowed to route to. Verify drift-prone entries before relying on them for write-capable work.

| Name | System of record | Path or connector | Owner layer | Safe read scope | Write rules | Last verified |
| --- | --- | --- | --- | --- | --- | --- |
| MikeOS | Front-door routing, daily composition, cockpit state | `C:\IkeOS` | MikeOS | All local Markdown in this folder | Write distilled state and protocols only | 2026-07-03 |
| Codex root | Generic workspace governance, registries, scans | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex` | Codex | Root governance docs and workspace registry | Follow root `AGENTS.md` | 2026-07-03 |
| CLARA | Mike-specific chief-of-staff layer | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\CLARA` | CLARA | Context, operating model, domain/tool registries | Follow CLARA plans and `AGENTS.md` | 2026-07-03 |
| CLARA Work | Elysium/Invigorate IT domain routing | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\CLARA\Work` | CLARA | Work routing docs and business-pinned folder rules | Clarify domain before mail/Teams/ADO reads unless pinned | 2026-07-03 |
| CLARA Home Assistant | Live home, PA/EA home workflows, occupancy/reminder logic | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\CLARA\HomeAssistant` | Home | Local context docs after live-state need is known | Live changes require evidence, validation, and approval | 2026-07-03 |
| Practice Manager | Elysium customer and business-operation control plane | `C:\Users\MikeDalziel\Elysium Dynamics Ltd\*Practice Manager - Documents` | PM | Registers, indexes, request summaries | Keep central records distilled; raw source only in request-local raw folders | 2026-07-03 |
| Elysium Assistant | Elysium evidence scan and consultant package layer | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Elysium Assistant` | EA | Assistant memory, workflows, request packages | Use Elysium connector first; PM-facing summaries must be distilled | 2026-07-03 |
| Solution Architect | Implementation and customer-repo delivery | `C:\Users\MikeDalziel\Invigorate IT Ltd\Invigorate IT Ltd - General\Visual Studio\Solution Architect` | SA | Routing docs, customer map, PM handoff inputs | Writes go to mapped customer repos or helper assets as instructed | 2026-07-03 |
| Motion | Managed tasks and task schedules | Motion connector | External | Task summaries and schedules through connector | Motion writes need explicit user intent | 2026-07-03 |
| Life Index | Private local document/file index | `C:\IkeOS\private\life-index\life-index.sqlite` plus `scripts\life-index\` | MikeOS | Query local private DB and render distilled summaries | Rebuild/query only; never commit DB or raw extracted text | 2026-07-03 |
| PC Analysis | Windows diagnostics and support reports | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\Utilities\PC Analysis` | Codex Utilities | Existing diagnostics tools and generated reports | Use utility defaults; avoid unattended destructive actions | 2026-07-03 |
| Codex automations | Scheduled jobs and worker cadence | `C:\Users\MikeDalziel\.codex\automations` | Codex | Automation names, status, cwd, cadence | Use Codex automation tool or approved config workflow | 2026-07-03 |
| Codex memory | Durable lessons and reusable context | `C:\Users\MikeDalziel\.codex\memories` | Codex | Relevant memory summaries and registry entries | Do not edit memory directly; add ad-hoc notes only when asked | 2026-07-03 |

## Drift Notes

- `codex mcp list` was blocked by executable access during planning. Treat connector availability as unverified until checked in the active session.
- Work roots with wildcard path hints should be resolved by folder name before write-capable work.
- Date-specific facts from memory, calendars, mailboxes, ADO, Motion, and Home Assistant must be refreshed live before use.
