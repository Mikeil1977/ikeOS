# Source Boundary Protocol

MikeOS is useful only if it keeps source ownership clean.

## Golden Rule

MikeOS stores state about work, not the raw source material behind the work.

## Allowed In MikeOS

- distilled daily cards;
- worker reports;
- source names and canonical links;
- freshness markers;
- routing decisions;
- next actions;
- automation health summaries;
- dashboard-ready metrics.

## Not Allowed In MikeOS

- raw email bodies;
- raw Teams bodies;
- private message IDs;
- Microsoft Graph URLs;
- transcript dumps;
- attachment text dumps;
- screenshots unless explicitly generated as a MikeOS report artifact;
- browser profile paths;
- scratch paths;
- auth caches;
- API keys or secrets;
- customer implementation artifacts that belong in customer repos.

## Writeback By Owner

| Owner | Writes belong where |
| --- | --- |
| MikeOS | Distilled cockpit state and routing protocols. |
| CLARA | Mike-specific operating policy, plans, and domain interpretation. |
| PM | Elysium request state, queue state, business operations records, distilled evidence pointers. |
| EA | Consultant packages, evidence summaries, local assistant memory. |
| SA | Customer repo implementation outputs and helper assets. |
| Home | Home Assistant live config, context docs, change log, executed plans. |
| Motion | Managed task records. |
| PC Analysis | Generated machine diagnostics reports. |

## Customer Delivery Boundary

For customer work, MikeOS may point to the canonical customer request or implementation location. It must not become that location.

If the customer owns a repo, treat that upstream repo as canonical delivery storage. PM remains the status/control plane, and local worktrees remain temporary execution surfaces.
