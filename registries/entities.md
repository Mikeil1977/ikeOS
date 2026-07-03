# MikeOS Entities Registry

Entities are the owners of assets, obligations, evidence, and dashboard cards. Classify by entity first, then by asset or obligation type.

| Entity ID | Name | Kind | Parent | Purpose | Canonical route | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `household` | Mike / household | person_household |  | Personal, family, home, health, and household administration. | Life Admin / CLARA as needed | active |
| `elysium-dynamics-ltd` | Elysium Dynamics Ltd | business |  | Elysium company admin and customer operations. | Practice Manager / Elysium Assistant | active |
| `invigorate-it-ltd` | Invigorate IT Ltd | business |  | Invigorate company admin and business-line ownership. | CLARA Work / Invigorate routes | active |
| `invigorate-bc-nav` | BC/NAV Consulting / Development | business_line | `invigorate-it-ltd` | Business Central and NAV consulting, support, development, customer projects, and delivery artefacts. | Solution Architect | active |
| `invigorate-products` | Products | business_line | `invigorate-it-ltd` | Product and IP work owned by Invigorate IT Ltd. | CLARA Work / project route | active |
| `product-nav-to-bc-bridge` | NAV to BC Bridge | product | `invigorate-products` | Product concept for NAV-to-Business-Central transition support. | Products business line | planned |
| `product-outlook-to-timesheet` | Outlook to Timesheet | product | `invigorate-products` | Product concept for turning Outlook/calendar activity into timesheet support. | Products business line | planned |
| `invigorate-wearyourmanual` | WearYourManual | business_line | `invigorate-it-ltd` | WearYourManual product/shop/fulfilment line under Invigorate IT Ltd. | WearYourManual route | active |

## Rules

- Do not use dashboard tabs as entity names.
- Do not put VAT, insurance, banking, or subscriptions under generic admin until the owning entity is known.
- Customer delivery work belongs either under Elysium customer operations or under `BC/NAV Consulting / Development`, depending on the business that owns the relationship.
