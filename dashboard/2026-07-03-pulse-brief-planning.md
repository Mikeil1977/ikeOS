# MikeOS Pulse Brief Planning Note

Date: 2026-07-03

## Current Direction

The first visual MikeOS dashboard should be a soft daily brief, not a control-room wall. It should borrow the useful part of a Pulse-style experience: a finite, curated morning feed that tells Mike what deserves attention now, while keeping source freshness and routing discipline visible but quiet.

The selected direction is:

- Main title: `Today's pulse`
- Focus sentence: `Protect the TWMA block. Clear one admin knot. Leave the rest parked.`
- Four primary cards on the first screen, with lower-priority items parked in a softer shelf.
- Read-only by default; actions route, draft, or propose, but do not write to source systems.

## First Screen Shape

Top navigation headings:

- `Today`: the default brief with current focus, priority cards, parked items, waiting items, stale sources, and one recommended next action.
- `Work`: customer/delivery state, PM queue, EA/SA handoffs, implementation-ready work, blockers, and waiting-on-customer items.
- `Home`: Home Assistant state, chores, household blockers, appliance/sensor warnings, and home automation health.
- `Health`: health admin, medicine todos, appointment prep, and follow-ups that need deliberate scheduling.
- `Admin/Money`: invoicing, receipts, subscriptions, Azure/admin decisions, accountant/tax/bank items, and renewal deadlines.
- `Projects`: longer-running non-urgent work such as CLARA ideas, MikeOS buildout, DnD/worldbuilding, print/shop experiments, and parked creative/build projects.
- `System`: MikeOS reliability, source freshness, connector health, automations, Motion trust level, PC Analysis status, and verification needs.

Primary `Today` cards from the current composition:

- `TWMA has the morning`: show the 08:30-13:00 work block and prompt Mike to capture the outcome before opening new work.
- `Admin knot after lunch`: combine invoicing and the Azure subscription decision, with a warning that subscription changes need explicit approval.
- `PM handoffs are stale`: surface the June 26 PM scheduled rows as stale handoffs that need PM-route cleanup.
- `Home is mostly calm`: show no current chore blockers, but do not claim home is fully clear if source checks are incomplete.

Lower shelf:

- `Health admin`: sleep-study follow-up and medicine list.
- `Motion cleanup`: Motion is live but the open-task order is messy.
- `PC Analysis`: utility exists, but the latest observed report is stale.
- `Watergate battery`: Gmail surfaced a Watergate low-battery email for the Sonic at 46 Mount Street; this should become a Home card or parked Home item requiring 4 x AA lithium batteries.

## Important Lesson From Gmail

The first live MikeOS pass did not read Gmail, so it missed the Watergate battery warning. Future daily composition needs either:

- a bounded Gmail safety search for home/admin alerts, or
- a separate Gmail worker summary that MikeOS reads as distilled state.

The cockpit must store only the distilled result: Watergate Sonic batteries low; replace with 4 x AA lithium batteries. Do not store raw Gmail bodies, message IDs, Gmail URLs, or mailbox-private metadata.

## Visual Treatment

Use a softer brief style:

- Warm white background, charcoal text, restrained sage/blue/amber accents.
- Four calm primary cards rather than a dense grid.
- A `Parked, not forgotten` shelf for non-immediate items.
- A compact source freshness strip with human labels such as `Calendar fresh`, `Motion fresh but messy`, `PM queue stale handoffs`, and `PC Analysis stale`.
- One bottom recommended-next-action panel.
- No decorative blobs, marketing hero, raw dashboards, or heavy tables on the first screen.

## Data And Privacy Boundaries

Dashboard v1 should read from MikeOS-owned distilled state first:

- `state/today.md`
- `state/source-freshness.md`
- `reports/`
- `registries/systems.md`
- `registries/automations.md`

Live connectors should remain outside the visual dashboard initially. MikeOS should update Markdown/state through bounded daily composition, then the dashboard renders that distilled state.

Never render:

- raw email or Teams bodies
- private message IDs or Graph/Gmail URLs
- scratch paths or local browser traces
- full source dumps
- unapproved write buttons

## Next Planning Decisions

- Add Gmail to the daily composition route as a narrow alert scan, not a general inbox triage.
- Decide whether `Watergate battery` appears as a primary Home card when urgent or as a parked Home item when non-urgent.
- Keep the first build read-only and Markdown-backed until at least three to five daily compositions prove the card shape.
- When implementation starts, prefer a static/read-only dashboard that renders the current MikeOS state before adding live connector queries or write-capable controls.
