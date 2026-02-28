# PowerShell script to setup Telegram channel
Write-Host "Setting up Telegram channel for OpenClaw..." -ForegroundColor Green

# Create a temporary response file for the interactive prompts
$responseFile = "telegram_responses.txt"
@"
y
1
8712552363:AAF_5Y1k-0vBt--9MpZKjrtm5WGSNlPErA4
"@ | Out-File -FilePath $responseFile -Encoding UTF8

Write-Host "Response file created. Now running openclaw channels add..." -ForegroundColor Yellow
Write-Host "Note: This might not work perfectly due to interactive prompts." -ForegroundColor Yellow

# Try to run the command
openclaw channels add

Write-Host "`nIf the interactive setup didn't work, you can manually:" -ForegroundColor Cyan
Write-Host "1. Run: openclaw channels add" -ForegroundColor White
Write-Host "2. Press 'y' and Enter" -ForegroundColor White
Write-Host "3. Select 'Telegram (Bot API)' with arrow keys and Enter" -ForegroundColor White
Write-Host "4. Paste your token: 8712552363:AAF_5Y1k-0vBt--9MpZKjrtm5WGSNlPErA4" -ForegroundColor White
Write-Host "5. Follow any remaining prompts" -ForegroundColor White

# Clean up
Remove-Item $responseFile -ErrorAction SilentlyContinue