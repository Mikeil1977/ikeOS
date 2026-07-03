# MikeOS Today

Generated: 2026-07-03 02:14 +01:00
Freshness: bounded live-source composition

This state was built from MikeOS route rules plus read-only checks against Elysium calendar, Outlook calendar, Motion, Home Assistant, Practice Manager registers, the PM Work Queue, and the existing PC Analysis utility area. It stores distilled cards only; raw connector payloads, message bodies, private IDs, and scratch paths are intentionally omitted.

## Current focus

- Protect the TWMA/work block already on the calendar, then use the first clear admin slot for invoicing, the stale Azure subscription decision, and PM queue cleanup.

## Cards today

### 2026-07-03-work-001 - TWMA owns the morning work shape

- `domain`: work
- `why_now`: Elysium calendar shows TWMA blocks early today, including the main 08:30-13:00 Europe/London work block, and Motion still has a TWMA review task in the open backlog.
- `next_action`: Keep the morning on TWMA; if the block is already complete, capture the outcome before starting new work.
- `owner`: Mike
- `urgency`: today
- `source_refs`: Elysium M365 calendar; Motion open tasks
- `freshness`: 2026-07-03 02:14 +01:00
- `action_mode`: read_only

### 2026-07-03-admin-001 - Invoicing and Azure subscription decision need a bounded admin pass

- `domain`: admin/money
- `why_now`: Motion has invoicing scheduled for today and an overdue hard-deadline Azure subscription decision still open.
- `next_action`: Do invoicing first, then decide whether the old Azure credit subscription still hosts anything needed; MikeOS should not make subscription changes without explicit approval.
- `owner`: Mike
- `urgency`: today
- `source_refs`: Motion open tasks
- `freshness`: 2026-07-03 02:14 +01:00
- `action_mode`: route_only

### 2026-07-03-work-002 - PM Work Queue has stale scheduled handoffs

- `domain`: work
- `why_now`: The live PM Work Queue is reachable, but top scheduled rows are still paused against June 26 calendar blocks, including high-priority Solution Architect and EA handoffs.
- `next_action`: Through the PM route, review the stale scheduled rows and mark each as complete, requeue, or blocked with the latest result before starting more Solution Architect work.
- `owner`: PM / Mike
- `urgency`: today
- `source_refs`: PM Work Queue; PM request index; PM open actions; Solution Architect queue
- `freshness`: 2026-07-03 02:14 +01:00
- `action_mode`: route_only

### 2026-07-03-home-001 - Home is reachable and not currently chore-blocked

- `domain`: home
- `why_now`: Home Assistant is reachable, chores show zero open items, and the CLARA todo list has seven infrastructure ideas waiting behind higher-priority work.
- `next_action`: Leave chores unblocked; when there is space, pick one CLARA infrastructure item rather than opening the whole list.
- `owner`: Home / CLARA
- `urgency`: watch
- `source_refs`: Home Assistant overview; Home Assistant todo lists
- `freshness`: 2026-07-03 02:14 +01:00
- `action_mode`: read_only

### 2026-07-03-health-001 - Health admin is present but should be deliberately slotted

- `domain`: health
- `why_now`: Motion has an overdue sleep-study follow-up, and Home Assistant's medicine list has two needs-action items.
- `next_action`: Give health admin one bounded slot or explicitly defer it in Motion; MikeOS should not write health task state without approval.
- `owner`: Mike
- `urgency`: soon
- `source_refs`: Motion open tasks; Home Assistant medicine todo
- `freshness`: 2026-07-03 02:14 +01:00
- `action_mode`: route_only

### 2026-07-03-system-001 - Motion needs a cleanup/replan pass before it can be trusted as order

- `domain`: system
- `why_now`: Motion's first open-task page returned 50 unresolved tasks, with old due dates and at least one scheduling issue.
- `next_action`: Use Motion as a task inventory today, not as a perfect priority order; run a daily Motion connection and replan pass after the urgent admin items.
- `owner`: Motion / MikeOS
- `urgency`: soon
- `source_refs`: Motion open tasks; Home Assistant CLARA todo
- `freshness`: 2026-07-03 02:14 +01:00
- `action_mode`: route_only

### 2026-07-03-system-002 - PC Analysis exists but its evidence is stale

- `domain`: system
- `why_now`: The existing PC Analysis utility area is present, but the newest observed report folder is from 2026-03-05.
- `next_action`: If Mike asks for machine health, route to the existing PC Analysis utilities and generate a fresh report rather than creating a new scanner.
- `owner`: MikeOS
- `urgency`: watch
- `source_refs`: PC Analysis report listing; protocols/machine-health.md
- `freshness`: stale
- `action_mode`: route_only

## Waiting on Mike

- Decide whether the first admin slot after TWMA goes to invoicing/Azure cleanup or PM queue stale-schedule review.
- Confirm whether health admin gets a bounded slot today or is deliberately deferred.

## Waiting on others

- Several EnerMech PM items remain waiting on customer/retest/sample evidence; route status questions through PM first, then EA only if evidence/package refresh is needed.

## Active workers / automations

- Elysium Morning/Lunch ADO Triage - EA-owned recurring Elysium scan signal.
- PM Work Queue - PM Worker - PM queue/state-machine worker.
- PM Work Queue - EA Worker - EA package/evidence worker.
- PM Work Queue - Solution Architect Worker - SA implementation/handoff worker.
- Weekday Morning Brief - Existing daily brief source; useful pattern for MikeOS daily cards.

## Stale or untrusted sources

- PM scheduled rows - live queue reachable, but scheduled dates are past and need PM cleanup.
- Motion ordering - open-task inventory is live, but priority order needs a replan pass.
- PC Analysis - existing reports are stale.

## Recommended next action

- Stay on TWMA for the morning block, then run a 45-60 minute admin cleanup: invoicing, Azure subscription decision, and PM scheduled-row triage in that order unless Mike chooses a different focus.
