param(
    [string]$Search,
    [string]$Category,
    [string]$Root,
    [string]$Since,
    [string]$Until,
    [int]$Limit = 25,
    [string]$DbPath = 'C:\IkeOS\private\life-index\life-index.sqlite',
    [ValidateSet('csv', 'json')]
    [string]$Format = 'csv'
)

$ErrorActionPreference = 'Stop'

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonScript = Join-Path $ScriptDir 'life_index.py'

$argsList = @('--db', $DbPath, 'query', '--limit', "$Limit", '--format', $Format)
if ($Search) {
    $argsList += @('--search', $Search)
}
if ($Category) {
    $argsList += @('--category', $Category)
}
if ($Root) {
    $argsList += @('--root', $Root)
}
if ($Since) {
    $argsList += @('--since', $Since)
}
if ($Until) {
    $argsList += @('--until', $Until)
}

python $PythonScript @argsList
