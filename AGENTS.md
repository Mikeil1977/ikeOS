# MikeOS Agent Instructions

This folder is the front-door control plane for Mike Dalziel's local operating system.

## Purpose

Use `C:\IkeOS` as the cockpit for cross-domain orientation, daily composition, and work routing. MikeOS is organized around entities, assets, obligations, and evidence. MikeOS should answer "what is on the cards today?" by composing a view over that operating model, not by becoming a second copy of source systems.

MikeOS is read-first and low-autonomy. It routes work to specialist spaces when deep evidence, live-system state, or write-capable actions are needed.

## Read Order

1. `README.md`
2. `routes.md`
3. `registries/systems.md`
4. `registries/interfaces.md`
5. `protocols/operating-model.md`
6. `registries/entities.md`
7. `registries/asset-types.md`
8. `registries/obligation-types.md`
9. `registries/automations.md`
10. Relevant file in `protocols/`
11. `state/today.md`

After reading these files, follow the route to the specialist workspace and read that workspace's own `AGENTS.md` before acting there.

## System Role

MikeOS is the front door.

- CLARA remains the Mike-specific chief-of-staff layer.
- Practice Manager remains the Elysium state machine and control plane.
- Elysium Assistant remains the evidence scanner and consultant package layer.
- Solution Architect remains the implementation and customer-repo delivery layer.
- Home Assistant remains the live home state and automation authority.
- Motion remains the managed task system of record.
- Codex memory remains long-lived learned context, not a live-state source.

## Startup Routine

At the start of a MikeOS session:

1. Read the MikeOS read order above.
2. Classify the owning entity before choosing a dashboard view.
3. Identify whether the request is about an asset, obligation, source-system check, or cross-domain priority.
4. Check `state/today.md` for the latest composed state and staleness notes.
5. Use `routes.md` to choose the owning system.
6. If the request crosses domains, create bounded `WorkerBrief` requests rather than doing broad rummaging from MikeOS.
7. Compose one human-facing answer back in MikeOS using `EntityRecord`, `AssetRecord`, `ObligationRecord`, `DailyCard`, or `WorkerReport` summaries as appropriate.

## Daily Composition Contract

When Mike asks "what is on the cards today?", produce one composed brief with these sections:

- Current focus
- Cards today
- Waiting on Mike
- Waiting on others
- Active workers / automations
- Stale or untrusted sources
- Recommended next action

Use `protocols/daily-cards.md` for the exact process and output shape. Do not paste raw source material into the brief.

Daily composition is a view over current entities, assets, obligations, source freshness, and worker reports. It is not the primary MikeOS data model.

## Routing Rules

- Separate workspace for different state.
- Subfolder `AGENTS.md` for different attention.
- A subfolder `AGENTS.md` only sharpens behavior when the worker starts in that folder.
- Do not ask PM, EA, SA, CLARA, or Home Assistant to violate their own local instructions.
- Do not merge customer delivery state into MikeOS; link to the canonical system instead.

## Action Modes

- `read_only`: inspect and summarize safe sources.
- `route_only`: identify the owner and handoff path without inspecting source content.
- `propose_write`: draft the intended writeback but do not apply it.
- `approved_write`: write only after explicit user approval and only in the owning workspace.

Default to `read_only` or `route_only` unless the user explicitly asks for a write-capable action and the owning workspace rules allow it.

## Evidence And Privacy

MikeOS stores distilled state only.

Do not store raw email bodies, Teams message bodies, private message IDs, Graph URLs, transcript dumps, screenshots, browser profile paths, scratch paths, auth caches, API keys, or live credentials in this folder.

If exact source wording must be preserved, store it only in the canonical request-local or domain-local raw evidence location named by the owning system.

## Stop Conditions

Stop and ask or route back to the owner when:

- the active business domain is ambiguous and the request would read work mail, Teams, or ADO;
- a write-capable action lacks explicit approval;
- a specialist workspace has missing or conflicting state;
- customer repo ownership is unclear;
- Home Assistant live evidence is unavailable for a live-control change;
- the source looks stale and a current answer would be misleading.
