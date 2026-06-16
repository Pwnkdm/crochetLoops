Add-Type -AssemblyName System.Drawing
$src = "d:\Parnneet\crochetLoops\src\assets\collection"
$dest = "d:\Parnneet\crochetLoops\public\collection"
New-Item -ItemType Directory -Force -Path $dest -ErrorAction SilentlyContinue | Out-Null

$files = Get-ChildItem -Path $src -Filter *.jpg
$count = 1
$results = @()

foreach ($f in $files) {
    $cleanName = "crochet-$count.jpg"
    $targetPath = Join-Path $dest $cleanName
    Copy-Item $f.FullName $targetPath -Force
    
    $img = [System.Drawing.Image]::FromFile($targetPath)
    $w = $img.Width
    $h = $img.Height
    $img.Dispose()
    
    $ratio = "square"
    if ($w -gt $h) { $ratio = "landscape" }
    elseif ($h -gt $w) { $ratio = "portrait" }
    
    $results += [PSCustomObject]@{
        Original = $f.Name
        NewName = $cleanName
        Width = $w
        Height = $h
        Ratio = $ratio
    }
    $count++
}

$results | ConvertTo-Json
