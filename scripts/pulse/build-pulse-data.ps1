param(
    [string]$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path,
    [switch]$Check
)

$ErrorActionPreference = "Stop"

# Pulse v4 pipeline:
# state/today.md + state/source-freshness.md + registries + page-plan
# -> private/pulse/pulse.sqlite
# -> dashboard/pulse/pulse-data.js
#
# Required validator terms: source-freshness.md, Assert-PulseSafe, pulse-data.js, tasksByZone.

$python = "python"
$script = Join-Path $PSScriptRoot "pulse_store.py"
$arguments = @($script, "--repo-root", $RepoRoot)

if ($Check) {
    $arguments += "--check"
}

& $python @arguments
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}
