# MikeOS Obligation Types Registry

Obligation types describe things that can become due, blocked, waiting, paid, renewed, or completed.

| Obligation Type ID | Name | Typical owner | View hints | Source hints |
| --- | --- | --- | --- | --- |
| `vat` | VAT | Business entity | Work, Today when due | Banking, accountant, email, Motion |
| `invoicing` | Invoicing | Business entity or business line | Work, Today when due | Motion, accounting/banking, email |
| `insurance-renewal` | Insurance renewal | Household, business, vehicle, or property | Life Admin or Work | Life Index, banking, email |
| `subscription-renewal` | Subscription renewal | Household, business, product, or system | Life Admin, Work, System | Banking, email, registries |
| `mot` | MOT | Vehicle owner | Life Admin, Today when due | Life Index, banking, manual notes |
| `vehicle-tax` | Vehicle tax | Vehicle owner | Life Admin, Today when due | Banking, DVLA/manual notes |
| `health-admin` | Health admin | Mike / household | Life Admin, Today when due | Motion, Home Assistant, Life Index |
| `utility` | Utility | Property owner | Life Admin, Home | Banking, email, Life Index |
| `property-maintenance` | Property maintenance | Property owner | Home, Life Admin, Today when urgent | Photo intake, Home Assistant, Life Index, Motion |
| `customer-delivery` | Customer delivery | Elysium or BC/NAV business line | Work, Today when due | PM, EA, SA, Motion |
| `system-maintenance` | System maintenance | MikeOS/System | System, Today when blocking | PC Analysis, automations, source freshness |

## Rules

- VAT belongs to Elysium Dynamics Ltd or Invigorate IT Ltd, not to generic Life Admin.
- A policy document plus a recurring payment can become an insurance renewal candidate, but MikeOS must mark uncertainty until an owner and renewal date are verified.
- Photo-backed property issues should start as `property-maintenance` candidates until the property, severity, and next owner are confirmed.
- Obligations may be manually seeded before a source connector exists.
