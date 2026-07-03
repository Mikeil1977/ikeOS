param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot),
    [switch]$NoWrite
)

$ErrorActionPreference = 'Stop'

function Get-RelativeContent {
    param(
        [Parameter(Mandatory = $true)][string]$Path
    )

    $fullPath = Join-Path $Root $Path
    if (Test-Path -LiteralPath $fullPath -PathType Leaf) {
        return Get-Content -LiteralPath $fullPath -Raw
    }

    return ''
}

function Get-MarkdownTableRows {
    param(
        [Parameter(Mandatory = $true)][string]$Markdown
    )

    $rows = [System.Collections.Generic.List[object]]::new()
    foreach ($line in ($Markdown -split "`r?`n")) {
        if ($line -match '^\|\s*[-: ]+\|') {
            continue
        }
        if ($line -match '^\|(.+)\|$') {
            $cells = $line.Trim('|') -split '\|'
            $trimmed = @()
            foreach ($cell in $cells) {
                $trimmed += $cell.Trim()
            }
            if ($trimmed.Count -gt 1 -and $trimmed[0] -notin @('Name', 'Automation', 'Source')) {
                $rows.Add([pscustomobject]@{ Cells = [string[]]$trimmed }) | Out-Null
            }
        }
    }

    return $rows.ToArray()
}

function Add-Card {
    param(
        [Parameter(Mandatory = $true)][string]$Id,
        [Parameter(Mandatory = $true)][string]$Title,
        [Parameter(Mandatory = $true)][string]$Domain,
        [Parameter(Mandatory = $true)][string]$WhyNow,
        [Parameter(Mandatory = $true)][string]$NextAction,
        [Parameter(Mandatory = $true)][string]$Owner,
        [Parameter(Mandatory = $true)][string]$Urgency,
        [Parameter(Mandatory = $true)][string]$SourceRefs,
        [Parameter(Mandatory = $true)][string]$Freshness,
        [Parameter(Mandatory = $true)][string]$ActionMode
    )

    $script:Lines.Add("### $Id - $Title") | Out-Null
    $script:Lines.Add('') | Out-Null
    $script:Lines.Add("- ``domain``: $Domain") | Out-Null
    $script:Lines.Add("- ``why_now``: $WhyNow") | Out-Null
    $script:Lines.Add("- ``next_action``: $NextAction") | Out-Null
    $script:Lines.Add("- ``owner``: $Owner") | Out-Null
    $script:Lines.Add("- ``urgency``: $Urgency") | Out-Null
    $script:Lines.Add("- ``source_refs``: $SourceRefs") | Out-Null
    $script:Lines.Add("- ``freshness``: $Freshness") | Out-Null
    $script:Lines.Add("- ``action_mode``: $ActionMode") | Out-Null
    $script:Lines.Add('') | Out-Null
}

$today = Get-Date -Format 'yyyy-MM-dd'
$timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm zzz'

$systems = Get-MarkdownTableRows -Markdown (Get-RelativeContent -Path 'registries/systems.md')
$automations = Get-MarkdownTableRows -Markdown (Get-RelativeContent -Path 'registries/automations.md')
$freshness = Get-MarkdownTableRows -Markdown (Get-RelativeContent -Path 'state/source-freshness.md')

$activeAutomations = @()
foreach ($row in $automations) {
    if ($row.Cells.Count -ge 5 -and $row.Cells[2] -match 'ACTIVE') {
        $activeAutomations += $row
    }
}

$staleSources = @()
foreach ($row in $freshness) {
    if ($row.Cells.Count -ge 4 -and $row.Cells[2] -match 'stale|unknown|unavailable') {
        $staleSources += $row
    }
}

$manualSummaryRoot = Join-Path $Root 'reports\manual-worker-summaries'
$manualSummaries = @()
if (Test-Path -LiteralPath $manualSummaryRoot -PathType Container) {
    $manualSummaries = Get-ChildItem -LiteralPath $manualSummaryRoot -File -Filter '*.md' |
        Where-Object { $_.Name -ne 'README.md' } |
        Sort-Object LastWriteTime -Descending
}

$script:Lines = [System.Collections.Generic.List[string]]::new()
$script:Lines.Add('# MikeOS Today') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add("Generated: $timestamp") | Out-Null
$script:Lines.Add('Freshness: local MikeOS registry composition only') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('This state was built from MikeOS registries, source-freshness notes, active automation registry rows, and any manual worker summaries under `reports/manual-worker-summaries/`. It did not query live mail, Teams, ADO, Motion, Home Assistant, or external connectors.') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('## Current focus') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('- Turn MikeOS from a static scaffold into a usable read-first daily cockpit.') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('## Cards today') | Out-Null
$script:Lines.Add('') | Out-Null

Add-Card `
    -Id "$today-system-001" `
    -Title 'Dogfood MikeOS daily composition' `
    -Domain 'system' `
    -WhyNow 'Mike approved the next-step plan to move from scaffold to usable cockpit.' `
    -NextAction 'Review this generated state, then use it as the baseline for the first live-source daily pass.' `
    -Owner 'MikeOS' `
    -Urgency 'today' `
    -SourceRefs 'AGENTS.md; protocols/daily-cards.md; scripts/build-today.ps1' `
    -Freshness 'fresh' `
    -ActionMode 'read_only'

Add-Card `
    -Id "$today-system-002" `
    -Title 'Verify live connector availability before trusting current-source answers' `
    -Domain 'system' `
    -WhyNow 'The scaffold records that connector availability was not verified; current calendars, mail, Motion, ADO, and Home Assistant state may differ from local notes.' `
    -NextAction 'Before a live daily brief, run bounded source checks through the owning route and update source freshness.' `
    -Owner 'MikeOS' `
    -Urgency 'soon' `
    -SourceRefs 'state/source-freshness.md; registries/systems.md' `
    -Freshness 'today' `
    -ActionMode 'route_only'

if ($activeAutomations.Count -gt 0) {
    Add-Card `
        -Id "$today-system-003" `
        -Title 'Active Codex automations are visible to the cockpit' `
        -Domain 'system' `
        -WhyNow "$($activeAutomations.Count) active automation registry rows are available for daily composition." `
        -NextAction 'Review only automations that change what Mike should do today.' `
        -Owner 'Codex' `
        -Urgency 'watch' `
        -SourceRefs 'registries/automations.md' `
        -Freshness 'today' `
        -ActionMode 'read_only'
}

if ($manualSummaries.Count -gt 0) {
    Add-Card `
        -Id "$today-system-004" `
        -Title 'Manual worker summaries are available' `
        -Domain 'system' `
        -WhyNow "$($manualSummaries.Count) manual worker summary file(s) can be composed into the cockpit." `
        -NextAction 'Review the newest manual worker summaries and promote only distilled cards.' `
        -Owner 'MikeOS' `
        -Urgency 'watch' `
        -SourceRefs 'reports/manual-worker-summaries/' `
        -Freshness 'today' `
        -ActionMode 'read_only'
}

$script:Lines.Add('## Waiting on Mike') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('- Review whether this generated local-only composition is the right shape before adding live-source checks.') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('## Waiting on others') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('- None identified from local MikeOS registries.') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('## Active workers / automations') | Out-Null
$script:Lines.Add('') | Out-Null
if ($activeAutomations.Count -eq 0) {
    $script:Lines.Add('- No active automations found in the MikeOS automation registry.') | Out-Null
} else {
    foreach ($row in $activeAutomations) {
        $script:Lines.Add("- $($row.Cells[0]) - $($row.Cells[4])") | Out-Null
    }
}
$script:Lines.Add('') | Out-Null
$script:Lines.Add('## Stale or untrusted sources') | Out-Null
$script:Lines.Add('') | Out-Null
if ($staleSources.Count -eq 0) {
    $script:Lines.Add('- No stale or untrusted sources are recorded in `state/source-freshness.md`.') | Out-Null
} else {
    foreach ($row in $staleSources) {
        $script:Lines.Add("- $($row.Cells[0]) - freshness ``$($row.Cells[2])``: $($row.Cells[3])") | Out-Null
    }
}
$script:Lines.Add('') | Out-Null
$script:Lines.Add('## Recommended next action') | Out-Null
$script:Lines.Add('') | Out-Null
$script:Lines.Add('- Run the first live-source daily pass from MikeOS with bounded checks: CLARA/PM for work state, Home Assistant for live home blockers, Motion for tasks, and calendar/mail only through their owning routes.') | Out-Null
$script:Lines.Add('') | Out-Null

$content = ($script:Lines -join "`r`n")
$reportDir = Join-Path $Root 'reports'
$reportPath = Join-Path $reportDir "$today-daily-composition.md"
$todayPath = Join-Path $Root 'state/today.md'

if ($NoWrite) {
    Write-Output $content
    return
}

$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
[System.IO.File]::WriteAllText($todayPath, $content, $utf8NoBom)
[System.IO.File]::WriteAllText($reportPath, $content, $utf8NoBom)

Write-Output "Wrote $todayPath"
Write-Output "Wrote $reportPath"
