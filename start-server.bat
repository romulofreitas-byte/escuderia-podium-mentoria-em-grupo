@echo off
echo Configurando PATH...
set PATH=%PATH%;C:\Program Files\nodejs

echo Verificando Node.js...
node --version

echo Verificando npm...
npm --version

echo Iniciando servidor...
npm run dev

pause
