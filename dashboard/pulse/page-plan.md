# MikeOS Pulse Page Plan

Pulse is the read-only front end over the MikeOS operating model.

The page rule is:

`Evidence -> Entity -> Asset / Obligation -> View`

Source systems feed evidence. Pulse pages render views. They do not own the truth.

## Top-Level Views

| View | Route | Purpose |
| --- | --- | --- |
| Today | `/today` | Daily priority surface across due obligations, waiting items, source freshness, and recommended next action. |
| Work | `/work` | Business entities, business lines, customer delivery, business admin, and work obligations. |
| Life Admin | `/life-admin` | Personal and household obligations, documents, vehicles, properties, health, legal, and family admin. |
| Home | `/home` | Live home state, chores, devices, batteries, appliances, and automations. |
| Projects | `/projects` | Non-urgent initiatives, creative work, parked builds, and MikeOS/CLARA buildout. |
| System | `/system` | Source health, automation health, Motion trust, Life Index state, PC Analysis, and model health. |

## Today Pages

- `/today`
- `/today/due`
- `/today/waiting-on-me`
- `/today/waiting-on-others`
- `/today/parked`
- `/today/source-freshness`

## Work Pages

- `/work`
- `/work/elysium-dynamics`
- `/work/elysium-dynamics/company-admin`
- `/work/elysium-dynamics/customer-operations`
- `/work/invigorate-it`
- `/work/invigorate-it/company-admin`
- `/work/invigorate-it/bc-nav-consulting`
- `/work/invigorate-it/bc-nav-consulting/customers`
- `/work/invigorate-it/bc-nav-consulting/customer-projects`
- `/work/invigorate-it/products`
- `/work/invigorate-it/products/nav-to-bc-bridge`
- `/work/invigorate-it/products/outlook-to-timesheet`
- `/work/invigorate-it/wearyourmanual`

## Life Admin Pages

- `/life-admin`
- `/life-admin/insurance`
- `/life-admin/vehicles`
- `/life-admin/properties`
- `/life-admin/properties/maintenance`
- `/life-admin/personal-money`
- `/life-admin/identity-legal`
- `/life-admin/health`
- `/life-admin/family-education`
- `/life-admin/documents`

## Home Pages

- `/home`
- `/home/live-state`
- `/home/property-maintenance`
- `/home/chores`
- `/home/devices`
- `/home/batteries`
- `/home/appliances`
- `/home/automations`

## Projects Pages

- `/projects`
- `/projects/mikeos`
- `/projects/clara`
- `/projects/dnd-worldbuilding`
- `/projects/experiments`
- `/projects/parked`

## System Pages

- `/system`
- `/system/sources`
- `/system/automations`
- `/system/motion`
- `/system/life-index`
- `/system/pc-analysis`
- `/system/model-health`

## Prototype

The first prototype is `dashboard/pulse/index.html`.

It is a generated, read-only static-file cockpit. `scripts/pulse/build-pulse-data.ps1` reads MikeOS-safe Markdown and registries, writes `dashboard/pulse/pulse-data.js`, and the browser renders that bundle through `dashboard/pulse/pulse-app.js`.

The browser does not query live connectors, render raw evidence, expose private Life Index paths, or perform writes.

## V4 Correction

The landing page is the visual control-room map. A section workbench opens only when a top-level section or KPI is selected, for example `#today`, `#work`, or `#life-admin`.

Pulse task state is generated into private local SQLite at `private/pulse/pulse.sqlite`, which is ignored by git. The browser receives only distilled `pulse-data.js` output.
