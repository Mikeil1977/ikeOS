# Machine Health Protocol

Use this protocol for PC health, restart, storage, service, network, or developer-environment questions.

## Owning Utility

Reuse the existing utility area:

`C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Codex\Utilities\PC Analysis`

Do not create a second diagnostics framework under MikeOS unless the existing utility is unsuitable and Mike explicitly approves the change.

## Default Flow

1. Read the Utilities `AGENTS.md`.
2. Read the relevant PC Analysis README or script help.
3. Prefer existing scripts:
   - `Check-LastRestartReason.ps1`
   - `TroubleshootTools`
   - `DeveloperProfileMigration`
4. Run read-only diagnostics first.
5. Store generated reports in the owning utility reports folder unless the report is specifically a MikeOS cockpit summary.
6. Link the report from `reports/` or `state/today.md`.

## Cockpit Summary

When reporting machine health in MikeOS, include:

- finding;
- severity;
- source command or report path;
- timestamp;
- next check;
- whether action is safe, needs approval, or should be deferred.

## Safety

Do not run destructive repairs, cleanup, service restarts, profile imports, or config rewrites from MikeOS without explicit approval and a backup plan.
