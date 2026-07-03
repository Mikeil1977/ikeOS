# Life Index Protocol

Use this protocol when Mike asks to find or orient around locally saved personal documents, archives, policies, insurance documents, household paperwork, finance/tax records, identity/legal files, health admin, or old local profile data.

## Purpose

The Life Index is a private local search index. It helps MikeOS find what exists on this PC without storing raw document contents in tracked MikeOS Markdown.

Life Index category guesses are weak hints. They do not decide final entity, asset, or obligation ownership.

## Storage Boundary

Detailed index data belongs only under:

`C:\IkeOS\private\life-index\`

This folder is git-ignored. It may contain SQLite databases, checkpoints, scan logs, and extraction status. Do not move those files into `reports/`, `state/`, or any tracked folder.

## Default Roots

The v1 scan covers common personal and archive areas:

- `C:\Users\MikeDalziel\Desktop`
- `C:\Users\MikeDalziel\Documents`
- `C:\Users\MikeDalziel\Downloads`
- `C:\Users\MikeDalziel\OneDrive`
- `C:\Users\MikeDalziel\OneDrive - Invigorate IT Ltd`
- `C:\Users\MikeDalziel\Elysium Dynamics Ltd`
- `C:\Users\MikeDalziel\Invigorate IT Ltd`
- `C:\Local Reference`
- `D:\Users`
- `D:\ASB`
- `D:\InterAccount`
- `D:\Server Files`

The scanner excludes system, app, cache, developer-noise, game-library, build-output, and secret-like folders by default.

## Commands

Dry-run the scan without writing a database:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\life-index\build-life-index.ps1 -DryRun
```

Build or resume the private index:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\life-index\build-life-index.ps1 -Resume
```

Build metadata only, without extracting document text:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\life-index\build-life-index.ps1 -NoText
```

Search the index:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\life-index\query-life-index.ps1 -Search insurance -Limit 20
```

Search by category or modified-date window:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\life-index\query-life-index.ps1 -Category insurance -Since 2025-01-01 -Limit 20
```

Render a MikeOS-safe summary:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\life-index\report-life-index.ps1
```

## Operating Model Use

Life Index produces document evidence and candidate mappings for the MikeOS operating model.

Use Life Index output as an `EvidenceRef` when a local file may support an entity, asset, or obligation:

- `entity`: owning person, household, business, business line, product, archive, or customer.
- `asset`: property, vehicle, policy, subscription, product, customer project, document set, or source system.
- `obligation`: VAT, insurance renewal, MOT, vehicle tax, subscription renewal, health admin, utility, customer delivery, or system maintenance.

Examples:

- A car insurance document is evidence for `Mike / household`, a vehicle asset, and an insurance renewal obligation.
- A VAT document is evidence for the owning business entity, not generic Life Admin.
- A NAV to BC Bridge note is evidence for `Invigorate IT Ltd > Products > NAV to BC Bridge`.

Do not promote a Life Index category into a final model record without checking the owning entity.

## Report Rules

MikeOS-safe reports may include:

- category;
- count;
- newest item date;
- top roots;
- representative filenames when Mike asks for them.

Tracked MikeOS reports must not include:

- extracted document text;
- raw full-content dumps;
- credentials or secrets;
- browser traces;
- private SQLite files;
- full sensitive document paths unless Mike explicitly asks for a locate/find answer.

## Current Limits

- OCR is intentionally deferred; image/photo files are metadata-only in v1.
- Categorization is keyword-based and imperfect by design.
- Windows Search is not trusted as the source of truth.
- The private SQLite index is local state, not a backup.
