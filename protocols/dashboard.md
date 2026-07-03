# Dashboard Protocol

The v1 dashboard is Markdown-first. A visual dashboard can be added later once the state contracts are stable.

## Intended Tabs

- `Today`
- `Work`
- `Home`
- `Health`
- `Admin/Money`
- `Projects`
- `System`

## Core Panels

- Current focus
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

## Design Boundary

The visual dashboard should be read-only at first. Any action buttons should create drafts or route instructions, not perform writes.

Do not display sensitive raw content. Use source names, statuses, and canonical links.
