# MikeOS Interface Contracts

These contracts keep MikeOS summaries structured and low-noise.

## `EntityRecord`

Use `EntityRecord` for a person, household, business, business line, product, archive, customer, property owner, or other owner in the MikeOS operating model.

| Field | Meaning |
| --- | --- |
| `entity_id` | Stable local identifier, e.g. `invigorate-it-ltd`. |
| `name` | Human-readable entity name. |
| `kind` | `person_household`, `business`, `business_line`, `product`, `customer`, `property`, `vehicle`, `archive`, or `system`. |
| `parent_entity_id` | Optional parent entity, e.g. `invigorate-it-ltd` for a business line. |
| `canonical_route` | Owning route or workspace for deeper evidence. |
| `status` | `active`, `planned`, `archive`, or `unknown`. |

## `AssetRecord`

Use `AssetRecord` for something an entity owns, maintains, or needs evidence about.

| Field | Meaning |
| --- | --- |
| `asset_id` | Stable local identifier. |
| `entity_id` | Owning entity. |
| `asset_type` | Type from `registries/asset-types.md`. |
| `title` | Human-readable asset name. |
| `status` | `active`, `candidate`, `stale`, `archive`, or `unknown`. |
| `evidence_refs` | Distilled `EvidenceRef` pointers only. |

## `ObligationRecord`

Use `ObligationRecord` for something that can become due, blocked, waiting, paid, renewed, or completed.

| Field | Meaning |
| --- | --- |
| `obligation_id` | Stable local identifier. |
| `entity_id` | Owning entity. |
| `asset_id` | Optional related asset. |
| `obligation_type` | Type from `registries/obligation-types.md`. |
| `title` | Human-readable obligation name. |
| `status` | `open`, `due`, `waiting`, `paid`, `renewed`, `complete`, `stale`, or `unknown`. |
| `due_date` | Optional date when known. |
| `next_action` | Smallest useful next action. |
| `evidence_refs` | Distilled `EvidenceRef` pointers only. |

## `EvidenceRef`

Use `EvidenceRef` for a safe pointer to source evidence without copying raw source content.

| Field | Meaning |
| --- | --- |
| `source_system` | `Life Index`, `Banking`, `Motion`, `Home Assistant`, `CLARA`, `PM`, `EA`, `SA`, `PC Analysis`, or another registered system. |
| `source_ref` | Safe file path, canonical record link, or source label. |
| `summary` | Distilled fact, never raw body text. |
| `freshness` | `fresh`, `today`, `stale`, `unknown`, or timestamp. |
| `confidence` | `high`, `medium`, or `low`. |

## `DailyCard`

Use `DailyCard` for an item that may appear in the daily cockpit brief.

| Field | Meaning |
| --- | --- |
| `id` | Stable local identifier, e.g. `2026-07-03-elysium-001`. |
| `domain` | `work`, `home`, `health`, `admin_money`, `projects`, `system`, or `personal`. |
| `view` | View where the card should appear, e.g. `Today`, `Work`, `Life Admin`, `Home`, `Projects`, or `System`. |
| `entity_id` | Optional entity from `registries/entities.md`. |
| `asset_id` | Optional related asset. |
| `obligation_id` | Optional related obligation. |
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
