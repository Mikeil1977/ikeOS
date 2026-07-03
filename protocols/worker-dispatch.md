# Worker Dispatch Protocol

MikeOS delegates bounded inspection to specialist systems. It does not ask specialist workers to become general-purpose rummagers.

## When To Dispatch

Dispatch when:

- the owning system has current state MikeOS should not guess;
- the question requires local workspace rules;
- a source may contain raw evidence;
- a live connector or runtime must be checked;
- a write-capable action must be prepared by the owner.

Do not dispatch when the answer can be safely derived from MikeOS registries or current `state/today.md`.

## Dispatch Steps

1. Identify the owning route in `routes.md`.
2. Read the owning workspace `AGENTS.md`.
3. Create a narrow `WorkerBrief`.
4. Start the worker in the owning workspace or folder.
5. Ask for a `WorkerReport`.
6. Compose the returned facts into MikeOS output.
7. Store only distilled state or report links in `state/` or `reports/`.

## Default Worker Briefs

### Practice Manager

```markdown
- `role`: PM
- `workspace`: Practice Manager
- `question`: Which Elysium items require Mike input or routing today?
- `allowed_sources`: PM registers, role queue, request index, operation index, named request files.
- `forbidden_sources`: Broad raw mail/Teams scans, customer repo implementation work.
- `expected_report`: Changed facts, blockers, next owner, source links, PM readiness.
- `deadline`: immediate
- `write_allowed`: false
```

### Elysium Assistant

```markdown
- `role`: EA
- `workspace`: Elysium Assistant
- `question`: Is there new evidence or a consultant package that changes PM state?
- `allowed_sources`: EA workflows, local request memory, named customer request packages, Elysium connector when available.
- `forbidden_sources`: Generic Outlook/Teams connectors unless Mike explicitly names Invigorate/personal evidence.
- `expected_report`: Customer/request ref, changed fact, package path, PM status recommendation, next owner.
- `deadline`: immediate
- `write_allowed`: false
```

### Solution Architect

```markdown
- `role`: SA
- `workspace`: Solution Architect
- `question`: Is any PM/EA-ready implementation item blocked or ready for dev action?
- `allowed_sources`: PM solution architect queue, customer-map, named EA packages, mapped customer repos.
- `forbidden_sources`: Raw mail/Teams, open-actions as direct dev priority, guessed customer repos.
- `expected_report`: Queue item, readiness, branch/worktree/output path, blocker, next owner.
- `deadline`: immediate
- `write_allowed`: false
```

### Home Assistant

```markdown
- `role`: Home
- `workspace`: CLARA/HomeAssistant
- `question`: What live home/reminder state affects Mike's day?
- `allowed_sources`: Home Assistant live state/config, recent traces/logbook/history, local context docs.
- `forbidden_sources`: Desired behavior without live evidence for automation changes.
- `expected_report`: Active blockers, stale automations, user-facing effect, recommended next action.
- `deadline`: immediate
- `write_allowed`: false
```

### PC Analysis

```markdown
- `role`: PC Analysis
- `workspace`: Codex Utilities/PC Analysis
- `question`: Is there a recent machine-health issue or report that needs attention?
- `allowed_sources`: Existing diagnostics scripts, generated reports, restart/service/storage summaries.
- `forbidden_sources`: New destructive diagnostics, credential stores, broad personal file content.
- `expected_report`: Finding, severity, report path, recommended next check.
- `deadline`: immediate
- `write_allowed`: false
```

## Report Rules

Worker reports should be compact. They should not include raw source bodies, private IDs, auth paths, scratch logs, or unneeded traces.

If confidence is not high, say why.
