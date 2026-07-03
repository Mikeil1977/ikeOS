# Operating Model Protocol

MikeOS uses an entity / asset / obligation model as its primary structure.

## Core Flow

Source systems provide evidence. MikeOS turns evidence into model records, then renders views.

`Source evidence -> Entity -> Asset / Obligation -> View`

## Classification Order

1. Identify the owning `Entity`.
2. Identify whether the item is about an `Asset`, an `Obligation`, or both.
3. Attach safe `EvidenceRef` pointers.
4. Render the relevant view: `Today`, `Work`, `Life Admin`, `Home`, `Projects`, or `System`.

## Entity First Rules

- VAT belongs to the relevant business entity.
- Personal tax belongs to `Mike / household`.
- Business insurance belongs to the relevant business entity.
- Home or car insurance belongs to `Mike / household` and the related property or vehicle.
- Customer delivery belongs to Elysium customer operations or `BC/NAV Consulting / Development`.
- Product work under Invigorate belongs to `Products`, then to the named product.
- WearYourManual is a business line under Invigorate IT Ltd.

## Source System Rules

- Life Index provides private local document evidence and weak category hints.
- Banking, when added, should provide account, transaction, payment, and recurring-cost evidence.
- Motion provides task and schedule pressure, not ownership.
- Home Assistant provides live home state, not the household admin model.
- PM, EA, and SA provide Elysium/customer delivery state within their existing boundaries.
- CLARA remains the chief-of-staff interpretation layer.

## View Rules

- `Today` is a priority slice over current obligations and cards.
- `Work` groups by business entity and business line.
- `Life Admin` groups personal/household assets and obligations.
- `Home` shows live household state, property/device issues, and Home Assistant-derived blockers.
- `Projects` shows longer-running non-urgent initiatives.
- `System` shows source health, automation health, and MikeOS model freshness.

## Privacy

MikeOS stores distilled records and safe evidence pointers only. Do not store raw email bodies, Teams bodies, private message IDs, credentials, extracted document text, or private SQLite data in tracked files.
