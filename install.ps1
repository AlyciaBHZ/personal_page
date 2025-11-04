# ============================================
# Portfolio Installation Script (Windows)
# ============================================

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "Portfolio Installation Script" -ForegroundColor Cyan
Write-Host "============================================`n" -ForegroundColor Cyan

# Check Node.js version
Write-Host "[1/4] Checking Node.js version..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "Node.js not found. Please install from: https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check npm version
$npmVersion = npm --version 2>$null
Write-Host "npm version: $npmVersion`n" -ForegroundColor Green

# Clean old installation
Write-Host "[2/4] Cleaning old installation..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "  Removing node_modules..." -ForegroundColor Gray
    Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
}
if (Test-Path "package-lock.json") {
    Write-Host "  Removing package-lock.json..." -ForegroundColor Gray
    Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
}
Write-Host "Cleanup complete`n" -ForegroundColor Green

# Clean npm cache
Write-Host "[3/4] Cleaning npm cache..." -ForegroundColor Yellow
npm cache clean --force 2>&1 | Out-Null
Write-Host "Cache cleaned`n" -ForegroundColor Green

# Install dependencies
Write-Host "[4/4] Installing dependencies..." -ForegroundColor Yellow
Write-Host "  This may take 2-3 minutes, please wait..." -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nInstallation successful!`n" -ForegroundColor Green
    
    # Verify installation
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "Verification" -ForegroundColor Cyan
    Write-Host "============================================`n" -ForegroundColor Cyan
    
    $nodeModulesCount = (Get-ChildItem node_modules -Directory -ErrorAction SilentlyContinue).Count
    Write-Host "  Installed packages: $nodeModulesCount" -ForegroundColor White
    
    if ($nodeModulesCount -lt 100) {
        Write-Host "`nWARNING: Package count is unusually low (should be > 400)" -ForegroundColor Yellow
        Write-Host "Please retry: .\install.ps1" -ForegroundColor Yellow
    } else {
        Write-Host "`nVerification passed! Ready to use.`n" -ForegroundColor Green
        
        Write-Host "============================================" -ForegroundColor Cyan
        Write-Host "Next Steps" -ForegroundColor Cyan
        Write-Host "============================================`n" -ForegroundColor Cyan
        
        Write-Host "1. Start dev server (Mock mode):" -ForegroundColor White
        Write-Host "   npm run dev:mock`n" -ForegroundColor Yellow
        
        Write-Host "2. Or configure Supabase and run:" -ForegroundColor White
        Write-Host "   npm run dev`n" -ForegroundColor Yellow
        
        Write-Host "3. Visit:" -ForegroundColor White
        Write-Host "   http://localhost:5173`n" -ForegroundColor Cyan
    }
    
} else {
    Write-Host "`nInstallation failed!`n" -ForegroundColor Red
    Write-Host "Please check the error and retry:" -ForegroundColor Yellow
    Write-Host "  - Check network connection" -ForegroundColor White
    Write-Host "  - Try with verbose mode: npm install --verbose" -ForegroundColor White
    Write-Host "  - Check firewall/antivirus settings" -ForegroundColor White
    exit 1
}

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "Documentation" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  WINDOWS_QUICKSTART.md - Windows quick start" -ForegroundColor White
Write-Host "  README.md             - Full documentation" -ForegroundColor White
Write-Host "  EXECUTION_GUIDE.md    - Detailed guide" -ForegroundColor White
Write-Host "`n" -ForegroundColor White

