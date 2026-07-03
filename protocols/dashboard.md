# Dashboard Protocol

The v1 dashboard is Markdown-first. A visual dashboard can be added later once the operating model and state contracts are stable.

Dashboard tabs are views over the operating model. They are not the primary data model.

## Operating Model Source

The dashboard should read the canonical model before rendering any view:

- `protocols/operating-model.md`
- `registries/entities.md`
- `registries/asset-types.md`
- `registries/obligation-types.md`
- `registries/interfaces.md`
- `state/today.md`
- `state/source-freshness.md`

## Views

- `Today`: current focus, due/blocked obligations, priority DailyCards, waiting items, and recommended next action.
- `Work`: business entities, business lines, customer delivery, business admin, PM/EA/SA handoffs, and stale work obligations.
- `Life Admin`: personal/household assets and obligations such as property, vehicles, personal insurance, health admin, identity/legal, family admin, and personal money.
- `Home`: Home Assistant state, property/device issues, chores, household blockers, and live home warnings.
- `Projects`: non-urgent initiatives, product ideas, creative work, and parked builds.
- `System`: connector health, automation health, Motion trust level, PC Analysis, source freshness, and model freshness.

Admin/Money is not a top-level model. Business admin belongs under the relevant business entity, and personal admin belongs under Life Admin.

## Core Panels

- Current focus
- Due or blocked obligations
- Cards today
- Waiting on Mike
- Waiting on others
- Active workers
- Automation health
- Stale sources
- Recommended next action

## Data Sources

The dashboard should read from MikeOS state and registries, not directly from raw evidence:

- `state/today.md`
- `state/source-freshness.md`
- `reports/`
- `registries/systems.md`
- `registries/automations.md`
- operating-model registries

## Design Boundary

The visual dashboard should be read-only at first. Any action buttons should create drafts or route instructions, not perform writes.

Do not display sensitive raw content. Use source names, statuses, canonical links, entity IDs, asset IDs, and obligation IDs.
