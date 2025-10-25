# Script para iniciar o servidor Next.js
# Execute este arquivo sempre que quiser rodar o projeto

Write-Host "Configurando PATH..." -ForegroundColor Green
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")

Write-Host "Verificando Node.js..." -ForegroundColor Yellow
node --version

Write-Host "Verificando npm..." -ForegroundColor Yellow  
npm --version

Write-Host "Iniciando servidor..." -ForegroundColor Cyan
Write-Host "Acesse: http://localhost:3000" -ForegroundColor Green
Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Red

npm run dev
