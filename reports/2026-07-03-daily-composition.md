# MikeOS Today

Generated: 2026-07-03 01:45 +01:00
Freshness: local MikeOS registry composition only

This state was built from MikeOS registries, source-freshness notes, active automation registry rows, and any manual worker summaries under `reports/manual-worker-summaries/`. It did not query live mail, Teams, ADO, Motion, Home Assistant, or external connectors.

## Current focus

- Turn MikeOS from a static scaffold into a usable read-first daily cockpit.

## Cards today

### 2026-07-03-system-001 - Dogfood MikeOS daily composition

- `domain`: system
- `why_now`: Mike approved the next-step plan to move from scaffold to usable cockpit.
- `next_action`: Review this generated state, then use it as the baseline for the first live-source daily pass.
- `owner`: MikeOS
- `urgency`: today
- `source_refs`: AGENTS.md; protocols/daily-cards.md; scripts/build-today.ps1
- `freshness`: fresh
- `action_mode`: read_only

### 2026-07-03-system-002 - Verify live connector availability before trusting current-source answers

- `domain`: system
- `why_now`: The scaffold records that connector availability was not verified; current calendars, mail, Motion, ADO, and Home Assistant state may differ from local notes.
- `next_action`: Before a live daily brief, run bounded source checks through the owning route and update source freshness.
- `owner`: MikeOS
- `urgency`: soon
- `source_refs`: state/source-freshness.md; registries/systems.md
- `freshness`: today
- `action_mode`: route_only

### 2026-07-03-system-003 - Active Codex automations are visible to the cockpit

- `domain`: system
- `why_now`: 5 active automation registry rows are available for daily composition.
- `next_action`: Review only automations that change what Mike should do today.
- `owner`: Codex
- `urgency`: watch
- `source_refs`: registries/automations.md
- `freshness`: today
- `action_mode`: read_only

## Waiting on Mike

- Review whether this generated local-only composition is the right shape before adding live-source checks.

## Waiting on others

- None identified from local MikeOS registries.

## Active workers / automations

- Elysium Morning/Lunch ADO Triage - EA-owned recurring Elysium scan signal.
- PM Work Queue - PM Worker - PM queue/state-machine worker.
- PM Work Queue - EA Worker - EA package/evidence worker.
- PM Work Queue - Solution Architect Worker - SA implementation/handoff worker.
- Weekday Morning Brief - Existing daily brief source; useful pattern for MikeOS daily cards.

## Stale or untrusted sources

- Motion - freshness `unknown`: Requires live connector check.

## Recommended next action

- Run the first live-source daily pass from MikeOS with bounded checks: CLARA/PM for work state, Home Assistant for live home blockers, Motion for tasks, and calendar/mail only through their owning routes.
