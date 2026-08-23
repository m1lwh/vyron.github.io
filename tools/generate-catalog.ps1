$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$productsDir = Join-Path $root "assets\products"
$outFile = Join-Path $root "js\catalog.data.js"
$exts = @(".jpg", ".jpeg", ".png", ".webp")
$sizeOrder = @{ "XS" = 0; "S" = 1; "M" = 2; "L" = 3; "XL" = 4; "2XL" = 5; "3XL" = 6; "4XL" = 7; "5XL" = 8 }

if (-not (Test-Path -LiteralPath $productsDir)) {
    Write-Error "Not found: $productsDir"
    exit 1
}

function Get-ImageFiles([string]$path) {
    @(Get-ChildItem -LiteralPath $path -File -ErrorAction SilentlyContinue |
        Where-Object { $exts -contains $_.Extension.ToLower() } |
        Sort-Object Name)
}

function Format-Sizes([System.Collections.Generic.List[object]]$sizes) {
    ($sizes | Sort-Object { $sizeOrder[$_.code] } | ForEach-Object {
        '{ code: "' + $_.code + '", usd: ' + ([math]::Round($_.usd, 2)) + ' }'
    }) -join ", "
}

$items = New-Object System.Collections.Generic.List[string]
$dirs = Get-ChildItem -LiteralPath $productsDir -Directory | Sort-Object Name

foreach ($dir in $dirs) {
    $mains = Get-ImageFiles $dir.FullName

    $extras = New-Object System.Collections.Generic.List[object]
    $subDirs = @(Get-ChildItem -LiteralPath $dir.FullName -Directory | Sort-Object Name)
    foreach ($sub in $subDirs) {
        $files = @(Get-ChildItem -LiteralPath $sub.FullName -File -Recurse -ErrorAction SilentlyContinue |
            Where-Object { $exts -contains $_.Extension.ToLower() })
        foreach ($f in $files) { $extras.Add($f) }
    }

    $mainHashes = @{}
    foreach ($m in $mains) {
        $mainHashes[(Get-FileHash -LiteralPath $m.FullName -Algorithm MD5).Hash] = $true
    }

    $imagePaths = New-Object System.Collections.Generic.List[string]
    foreach ($m in $mains) {
        $imagePaths.Add("assets/products/" + $dir.Name + "/" + $m.Name)
    }
    $seen = New-Object System.Collections.Generic.HashSet[string]
    foreach ($e in ($extras | Sort-Object FullName)) {
        $hash = (Get-FileHash -LiteralPath $e.FullName -Algorithm MD5).Hash
        if (-not $seen.Add($hash)) { continue }
        if ($mainHashes.ContainsKey($hash)) { continue }
        $rel = $e.FullName.Substring($dir.FullName.Length + 1).Replace("\", "/")
        $imagePaths.Add("assets/products/" + $dir.Name + "/" + $rel)
    }

    if ($imagePaths.Count -eq 0) {
        Write-Warning "Skip '$($dir.Name)': no images"
        continue
    }

    $sizesParsed = New-Object System.Collections.Generic.List[object]
    $descPath = Join-Path $dir.FullName "description.txt"
    $type = "tee"
    if (Test-Path -LiteralPath $descPath) {
        $raw = [IO.File]::ReadAllText($descPath)
        if ($raw -match "(?i)sweatshirt") { $type = "sweatshirt" }
        $inPricing = $false
        foreach ($line in ($raw -split "`r?`n")) {
            $trim = $line.Trim()
            if ($trim -match "(?i)^pricing breakdown") { $inPricing = $true; continue }
            if ($trim -match "(?i)^care instructions") { $inPricing = $false; continue }
            if (-not $inPricing) { continue }
            if ($trim -match "(?i)^([A-Za-z0-9]+)\s*[-\u2013\u2014\u2212]\s*([A-Za-z0-9]+)\s*:\s*USD\s*([0-9]+(?:\.[0-9]+)?)") {
                $from = $Matches[1].ToUpper()
                $to = $Matches[2].ToUpper()
                $price = [double]$Matches[3]
                if ($sizeOrder.ContainsKey($from) -and $sizeOrder.ContainsKey($to)) {
                    for ($i = $sizeOrder[$from]; $i -le $sizeOrder[$to]; $i++) {
                        $code = ($sizeOrder.GetEnumerator() | Where-Object { $_.Value -eq $i } | Select-Object -First 1).Key
                        $sizesParsed.Add([pscustomobject]@{ code = $code; usd = $price })
                    }
                }
                continue
            }
            if ($trim -match "(?i)^([A-Za-z0-9]+)\s*:\s*USD\s*([0-9]+(?:\.[0-9]+)?)") {
                $code = $Matches[1].ToUpper()
                $price = [double]$Matches[2]
                if ($sizeOrder.ContainsKey($code)) {
                    $sizesParsed.Add([pscustomobject]@{ code = $code; usd = $price })
                }
            }
        }
    }

    if ($sizesParsed.Count -eq 0) {
        Write-Warning "Skip sizes for '$($dir.Name)': no pricing breakdown found"
    }

    $imgJs = ""
    $first = $true
    foreach ($p in $imagePaths) {
        if (-not $first) { $imgJs += ",`n" }
        $imgJs += '      "' + $p + '"'
        $first = $false
    }

    $items.Add(@(
        "  {",
        "    slug: `"$($dir.Name)`",",
        "    type: `"$type`",",
        "    images: [",
        $imgJs,
        "    ],",
        "    sizesUSD: [" + (Format-Sizes $sizesParsed) + "]",
        "  }"
    ) -join "`n")

    Write-Host ("+ {0} ({1} img, {2} sizes)" -f $dir.Name, $imagePaths.Count, $sizesParsed.Count)
}

$body = $items -join ",`n"
$content = "window.VY = window.VY || {};`nwindow.VY.CATALOG_DATA = [`n$body`n];`n"

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outFile, $content, $utf8NoBom)
Write-Host ""
Write-Host "Written: $outFile ($($items.Count) products)"
