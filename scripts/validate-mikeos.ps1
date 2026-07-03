param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'

$requiredFiles = @(
    'AGENTS.md',
    'README.md',
    'routes.md',
    'registries/interfaces.md',
    'registries/systems.md',
    'registries/automations.md',
    'registries/entities.md',
    'registries/asset-types.md',
    'registries/obligation-types.md',
    'protocols/operating-model.md',
    'protocols/daily-cards.md',
    'protocols/worker-dispatch.md',
    'protocols/source-boundaries.md',
    'protocols/machine-health.md',
    'protocols/dashboard.md',
    'protocols/photo-intake.md',
    'state/today.md',
    'state/photo-intake.md',
    'state/source-freshness.md',
    'state/history/README.md',
    'reports/README.md',
    'dashboard/README.md',
    'dashboard/pulse/index.html',
    'dashboard/pulse/page-plan.md',
    'dashboard/pulse/pulse.css',
    'dashboard/pulse/pulse-app.js',
    'dashboard/pulse/pulse-data.js',
    'templates/README.md',
    'templates/daily-card.md',
    'templates/worker-brief.md',
    'templates/worker-report.md',
    'scripts/build-today.ps1',
    'scripts/pulse/build-pulse-data.ps1',
    'scripts/pulse/pulse_store.py'
)

$missing = foreach ($file in $requiredFiles) {
    $path = Join-Path $Root $file
    if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        $file
    }
}

if ($missing.Count -gt 0) {
    Write-Error ("Missing required MikeOS files: " + ($missing -join ', '))
}

$requiredTerms = @{
    'AGENTS.md' = @('Daily Composition Contract', 'Evidence And Privacy', 'Action Modes')
    'routes.md' = @('Route Matrix', 'Worker Dispatch Rules', 'Handoff Discipline', 'operating-model.md')
    'registries/interfaces.md' = @('DailyCard', 'WorkerBrief', 'WorkerReport', 'SystemRegistryEntry', 'EntityRecord', 'AssetRecord', 'ObligationRecord', 'EvidenceRef')
    'registries/entities.md' = @('Mike / household', 'Elysium Dynamics Ltd', 'Invigorate IT Ltd', 'BC/NAV Consulting / Development', 'Products', 'NAV to BC Bridge', 'Outlook to Timesheet', 'WearYourManual')
    'registries/asset-types.md' = @('property', 'vehicle', 'bank account', 'insurance policy', 'customer project')
    'registries/obligation-types.md' = @('VAT', 'Insurance renewal', 'Subscription renewal', 'MOT', 'Vehicle tax', 'Health admin', 'Customer delivery', 'Property maintenance')
    'protocols/operating-model.md' = @('Source evidence -> Entity -> Asset / Obligation -> View', 'Classification Order', 'Entity First Rules')
    'protocols/source-boundaries.md' = @('Not Allowed In MikeOS', 'Writeback By Owner')
    'protocols/dashboard.md' = @('views over the operating model', 'Admin/Money is not a top-level model')
    'protocols/photo-intake.md' = @('Photo evidence -> Entity -> Asset / Obligation -> View', 'private evidence store', 'raw image bytes', 'property-maintenance')
    'protocols/life-index.md' = @('category guesses are weak hints', 'EvidenceRef')
    'dashboard/pulse/index.html' = @('MikeOS Pulse', 'Evidence -> Entity -> Asset / Obligation -> View', 'Life Admin')
    'dashboard/pulse/pulse-app.js' = @('MIKEOS_PULSE_DATA', 'generatedAt', 'tasksByZone', 'setSelectedView', 'task-board')
    'dashboard/pulse/pulse-data.js' = @('MIKEOS_PULSE_DATA', 'generatedAt', 'cards', 'sources', 'sections', 'zones', 'tasksByZone')
    'scripts/pulse/build-pulse-data.ps1' = @('source-freshness.md', 'Assert-PulseSafe', 'pulse-data.js', 'tasksByZone')
    'scripts/pulse/pulse_store.py' = @('sqlite3', 'private', 'pulse.sqlite', 'tasksByZone', 'assert_safe')
    'dashboard/pulse/page-plan.md' = @('/today', '/work/invigorate-it/products/nav-to-bc-bridge', '/life-admin/vehicles', '/life-admin/properties/maintenance', '/home/property-maintenance', '/system/life-index')
    'state/today.md' = @('Current focus', 'Cards today', 'Recommended next action')
    'state/photo-intake.md' = @('Photo intake cards', 'Photo evidence', 'property-maintenance')
    'templates/daily-card.md' = @('DailyCard Template', 'Rules')
    'templates/worker-brief.md' = @('WorkerBrief Template', 'write_allowed')
    'templates/worker-report.md' = @('WorkerReport Template', 'confidence')
    'scripts/build-today.ps1' = @('registries/systems.md', 'reports/manual-worker-summaries', 'state/today.md')
}

foreach ($entry in $requiredTerms.GetEnumerator()) {
    $path = Join-Path $Root $entry.Key
    $content = Get-Content -LiteralPath $path -Raw
    foreach ($term in $entry.Value) {
        if ($content -notmatch [regex]::Escape($term)) {
            Write-Error "Required term '$term' not found in $($entry.Key)"
        }
    }
}

$bannedPatterns = @(
    'raw email body:',
    'raw teams body:',
    'api_key=',
    'password=',
    'access_token='
)

$markdownFiles = Get-ChildItem -LiteralPath $Root -Recurse -File -Filter '*.md'
foreach ($file in $markdownFiles) {
    $content = Get-Content -LiteralPath $file.FullName -Raw
    foreach ($pattern in $bannedPatterns) {
        if ($content -imatch [regex]::Escape($pattern)) {
            Write-Error "Banned pattern '$pattern' found in $($file.FullName)"
        }
    }
}

Write-Output "MikeOS scaffold validation passed for $Root"
