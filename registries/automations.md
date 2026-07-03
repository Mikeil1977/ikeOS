# MikeOS Automation Registry

This registry makes existing Codex automations visible to the cockpit. It is an index, not the automation source of truth.

| Automation | Kind | Status observed | Working folder | MikeOS meaning |
| --- | --- | --- | --- | --- |
| Elysium Morning/Lunch ADO Triage | cron | ACTIVE | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Elysium Assistant` | EA-owned recurring Elysium scan signal. |
| PM Work Queue - PM Worker | cron | ACTIVE | `C:\Users\MikeDalziel\Elysium Dynamics Ltd\*Practice Manager - Documents` | PM queue/state-machine worker. |
| PM Work Queue - EA Worker | cron | ACTIVE | `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd\Documents\Elysium Assistant` | EA package/evidence worker. |
| PM Work Queue - Solution Architect Worker | cron | ACTIVE | `C:\Users\MikeDalziel\Invigorate IT Ltd\Invigorate IT Ltd - General\Visual Studio\Solution Architect` | SA implementation/handoff worker. |
| Weekday Morning Brief | cron | ACTIVE | `C:\Users\MikeDalziel\Documents\Codex\2026-05-24\set-up-an-automation-that-gives` | Existing daily brief source; useful pattern for MikeOS daily cards. |

## Review Protocol

When MikeOS reports automation health:

1. Inspect automation metadata through the Codex automation tool or read-only config listing.
2. Report active, paused, failed, stale, or unavailable status.
3. Link automation status to daily cards only when it changes what Mike should do.
4. Do not copy raw automation prompts into `state/today.md`.

## Worker Cadence Notes

Prior PM/EA/SA worker design used cheap dispatchers and heavier role workers. Preserve that model if MikeOS later adds dispatch automation: MikeOS should decide what bounded question to ask, then the role worker should start in the correct owning workspace.
