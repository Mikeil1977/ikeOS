# MikeOS Interface Contracts

These contracts keep MikeOS summaries structured and low-noise.

## `DailyCard`

Use `DailyCard` for an item that may appear in the daily cockpit brief.

| Field | Meaning |
| --- | --- |
| `id` | Stable local identifier, e.g. `2026-07-03-elysium-001`. |
| `domain` | `work`, `home`, `health`, `admin_money`, `projects`, `system`, or `personal`. |
| `title` | Human-readable card title. |
| `why_now` | Why this matters today. |
| `next_action` | The smallest useful next action. |
| `owner` | `Mike`, `PM`, `EA`, `SA`, `CLARA`, `Home`, `Motion`, `customer`, or another named owner. |
| `urgency` | `now`, `today`, `soon`, `watch`, or `blocked`. |
| `source_refs` | Distilled links or file paths to authoritative sources. |
| `freshness` | `fresh`, `today`, `stale`, `unknown`, or exact timestamp when available. |
| `action_mode` | `read_only`, `route_only`, `propose_write`, or `approved_write`. |

## `WorkerBrief`

Use `WorkerBrief` when MikeOS delegates bounded inspection to a specialist workspace.

| Field | Meaning |
| --- | --- |
| `role` | `CLARA`, `PM`, `EA`, `SA`, `Home`, `Motion`, `PC Analysis`, or another named route. |
| `workspace` | Exact folder or connector context the worker should start from. |
| `question` | The bounded question to answer. |
| `allowed_sources` | Sources the worker may inspect. |
| `forbidden_sources` | Sources the worker must not inspect or copy. |
| `expected_report` | Required fields or report shape. |
| `deadline` | When the report is useful; use `immediate` for interactive turns. |
| `write_allowed` | `false` unless explicitly approved. |

## `WorkerReport`

Use `WorkerReport` for the specialist response that returns to MikeOS.

| Field | Meaning |
| --- | --- |
| `role` | Worker role that produced the report. |
| `status` | `clear`, `attention_needed`, `blocked`, `stale`, or `unavailable`. |
| `changed_facts` | Facts that changed since the last known state. |
| `blockers` | Any blocker, missing source, or required decision. |
| `recommended_actions` | Short action list for MikeOS to compose. |
| `next_owner` | Who owns the next move. |
| `evidence_links` | Distilled links to canonical records only. |
| `confidence` | `high`, `medium`, or `low`, with reason when not high. |
| `follow_up_needed` | `none`, `today`, `scheduled`, or exact follow-up. |

## `SystemRegistryEntry`

Use `SystemRegistryEntry` to keep routes inspectable.

| Field | Meaning |
| --- | --- |
| `name` | System name. |
| `system_of_record` | What truth this system owns. |
| `path_or_connector` | Folder, connector, or utility path. |
| `owner_layer` | `MikeOS`, `CLARA`, `PM`, `EA`, `SA`, `Home`, `Codex`, or `external`. |
| `safe_read_scope` | What MikeOS may read directly. |
| `write_rules` | Where writes are allowed and approval requirements. |
| `last_verified` | Last date this registry entry was checked. |

## Markdown Examples

### Daily Card

```markdown
### 2026-07-03-elysium-001 - Example customer blocker

- `domain`: work
- `why_now`: PM queue says Mike decision is needed before EA can package evidence.
- `next_action`: Ask PM for the current blocker and canonical request link.
- `owner`: PM
- `urgency`: today
- `source_refs`: Practice Manager request index
- `freshness`: unknown
- `action_mode`: read_only
```

### Worker Brief

```markdown
## WorkerBrief

- `role`: PM
- `workspace`: Practice Manager
- `question`: Which queue items require Mike input today?
- `allowed_sources`: PM registers and request files named by PM.
- `forbidden_sources`: Raw email bodies, raw Teams messages, broad customer repo scans.
- `expected_report`: WorkerReport with next owner and source links.
- `deadline`: immediate
- `write_allowed`: false
```
