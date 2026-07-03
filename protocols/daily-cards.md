# Daily Cards Protocol

Use this protocol for "what is on the cards today?", "what should I do next?", and other cockpit-style questions.

## Goal

Produce one short, useful brief that helps Mike choose the next action without making him manually reconcile CLARA, PM, EA, SA, Home Assistant, Motion, automations, and memory.

## Inputs

Read in this order:

1. `state/today.md`
2. `registries/systems.md`
3. `registries/automations.md`
4. CLARA context only if cross-domain interpretation is needed.
5. Specialist workspaces only through bounded `WorkerBrief` questions.

Refresh live sources only when needed for the answer. Prefer bounded checks over broad scans.

## Output Shape

Use these headings:

```markdown
## Current focus

## Cards today

## Waiting on Mike

## Waiting on others

## Active workers / automations

## Stale or untrusted sources

## Recommended next action
```

## Card Selection

Include a card when it is:

- due today;
- blocking a worker;
- waiting for Mike;
- newly changed by an automation;
- stale enough to require attention;
- related to a scheduled meeting or commitment;
- a home, health, admin, or machine issue that affects Mike's day.

Do not include every possible open loop.

## Source Freshness

Mark freshness explicitly:

- `fresh`: verified in this turn.
- `today`: generated today but not rechecked in this turn.
- `stale`: older than useful for the question.
- `unknown`: source exists but freshness is unclear.
- `unavailable`: source could not be checked.

## Bounded Worker Pattern

If a specialist check is needed, create a `WorkerBrief` with a narrow question. Examples:

- PM: "Which PM queue items require Mike input today?"
- EA: "Has the Elysium scan produced any new consultant-package changes since the last PM update?"
- SA: "Is any PM-ready dev handoff blocked by missing evidence?"
- Home: "Are any live home reminders or blockers active now?"
- PC Analysis: "Is there a recent diagnostics report or restart issue that needs attention?"

The final MikeOS answer should summarize results, not concatenate worker output.

## State Writeback

When a daily composition is useful, update `state/today.md` with:

- generated date and time;
- cards that remain active;
- source freshness;
- follow-up needed;
- links to reports, not raw evidence.

Move older daily snapshots to `state/history/YYYY-MM-DD.md` only when the active state would otherwise become noisy.
