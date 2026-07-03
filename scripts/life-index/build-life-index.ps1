param(
    [string[]]$Root,
    [string]$DbPath = 'C:\IkeOS\private\life-index\life-index.sqlite',
    [switch]$DryRun,
    [switch]$Resume,
    [switch]$NoText
)

$ErrorActionPreference = 'Stop'

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonScript = Join-Path $ScriptDir 'life_index.py'

$argsList = @('--db', $DbPath, 'build')
foreach ($item in $Root) {
    if ($item) {
        $argsList += @('--root', $item)
    }
}
if ($DryRun) {
    $argsList += '--dry-run'
}
if ($Resume) {
    $argsList += '--resume'
}
if ($NoText) {
    $argsList += '--no-text'
}

python $PythonScript @argsList
