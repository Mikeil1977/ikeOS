# MikeOS Asset Types Registry

Asset types describe what an entity owns, maintains, or needs evidence about.

| Asset Type ID | Name | Typical owner | Examples | Source hints |
| --- | --- | --- | --- | --- |
| `property` | Property | Mike / household or business | House, flat, rented property, office/admin address | Life Index, Home Assistant, banking |
| `vehicle` | Vehicle | Mike / household or business | Car, service record, MOT, V5C | Life Index, banking, DVLA/manual notes |
| `bank-account` | Bank account | Household or business entity | Current account, savings, business account | Future banking system |
| `insurance-policy` | Insurance policy | Household, business, vehicle, or property | Home, car, business, professional cover | Life Index, banking, email |
| `subscription` | Subscription | Household, business, product, or system | Microsoft, Azure, hosting, household services | Banking, email, Motion |
| `product` | Product | Business line | NAV to BC Bridge, Outlook to Timesheet | Project notes, repos, Life Index |
| `customer-project` | Customer project | Elysium or BC/NAV line | EnerMech, TWMA, support or implementation work | PM, EA, SA, Motion |
| `document-set` | Document set | Any entity | Policy pack, tax pack, support pack, family admin pack | Life Index, CLARA private docs |
| `source-system` | Source system | MikeOS/System | Motion, Home Assistant, Life Index, PM, EA, SA | Registries and source freshness |

## Rules

- Assets can have many EvidenceRefs.
- Assets do not imply action by themselves; obligations create action pressure.
- A Life Index file can be evidence for an asset without proving the asset is current.
