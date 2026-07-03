# MikeOS

MikeOS is a local front-door control plane for Mike's work, life, home, and machine context.

It is not a replacement for CLARA, Practice Manager, Elysium Assistant, Solution Architect, Home Assistant, Motion, or Codex memory. It is a thin cockpit that routes into those systems, collects bounded reports, and composes a useful answer back to Mike.

## V1 Promise

From `C:\IkeOS`, Mike should be able to ask:

> What is on the cards today?

The expected answer is one coherent brief covering focus, blockers, active work, waiting items, and next actions. It should not be four disconnected reports from four different workspaces.

## Current Shape

- `AGENTS.md` - front-door instructions for Codex sessions started in `C:\IkeOS`.
- `routes.md` - routing rules and owning systems.
- `registries/` - systems, automations, and interface contracts.
- `protocols/` - repeatable operating procedures.
- `state/` - current distilled cockpit state.
- `reports/` - generated scan outputs and review artifacts.
- `dashboard/` - notes for the future read-only visual dashboard.
- `scripts/` - local validation utilities.

## Design Principles

- Read first, route second, write rarely.
- Preserve specialist source-of-truth boundaries.
- Store distilled state in MikeOS, not raw evidence.
- Prefer existing utilities over duplicate scanners.
- Keep daily output human-shaped: one answer with a recommended next action.

## How To Use

Start a Codex session in `C:\IkeOS` and ask a front-door question. Examples:

- `what is on the cards today?`
- `route this: check whether any Elysium dev handoffs are waiting`
- `what systems are stale?`
- `run a read-only machine-health orientation`
- `compose today's work/home/admin cards`

For deep work, MikeOS should hand off to the relevant specialist workspace and bring back a distilled `WorkerReport`.

## Non-Goals

- MikeOS does not ingest or centralize raw mail, Teams, ADO, Home Assistant traces, or customer repo content.
- MikeOS does not replace Motion as the task system of record.
- MikeOS does not replace CLARA as the Mike-specific chief-of-staff model.
- MikeOS does not execute Home Assistant changes without live evidence and explicit approval.
- MikeOS does not become a customer delivery repo.

## First Implementation Status

This v1 scaffold is Markdown-first. The dashboard is intentionally deferred until the routing, daily card, worker brief, and registry contracts are stable.
