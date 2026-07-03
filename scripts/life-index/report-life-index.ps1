param(
    [string]$DbPath = 'C:\IkeOS\private\life-index\life-index.sqlite',
    [string]$Output,
    [switch]$IncludeFilenames
)

$ErrorActionPreference = 'Stop'

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonScript = Join-Path $ScriptDir 'life_index.py'

$argsList = @('--db', $DbPath, 'report')
if ($Output) {
    $argsList += @('--output', $Output)
}
if ($IncludeFilenames) {
    $argsList += '--include-filenames'
}

python $PythonScript @argsList
