# Learnings & Improvements

## [2026-03-01] ClawHub Rate Limits

**Context:** Trying to install skills from ClawHub using `npx clawhub@latest install`
**Issue:** Rate limit exceeded error when trying to install self-improving-agent
**Correction:** Wait for rate limit to reset (usually 60+ seconds) or manually create skill files
**Pattern:** ClawHub has strict rate limiting; for urgent needs, create skills manually

## [2026-03-01] Browser Tool Stability

**Context:** Using browser tool to control Chrome and fetch DOM content
**Issue:** Browser service frequently times out or loses connection to tabs
**Correction:** 
1. Use `focus` before `snapshot`
2. Keep sessions short
3. Have fallback plans (web_fetch, exec curl)
**Pattern:** Browser automation is fragile; always have alternative approaches

## [2026-03-01] Windows PowerShell Syntax

**Context:** Using exec tool on Windows system
**Issue:** Bash syntax (`&&`, `|`) doesn't work in PowerShell
**Correction:** Use PowerShell commands (`;`, `| Select-Object`, `Start-Sleep`)
**Pattern:** Always check OS and use appropriate shell syntax

## [2026-03-01] Stock Tracker Click Events

**Context:** Building stock tracker with expandable details
**Issue:** Click events not working due to event binding timing
**Correction:** 
1. Rebind events after DOM updates
2. Use `onclick` attribute instead of `addEventListener`
3. Test with JavaScript console first
**Pattern:** Dynamic content needs explicit event rebinding

## [2026-03-01] User Preferences

**Context:** Working with user 小桂
**Issue:** None - capturing preferences
**Correction:** N/A
**Pattern:** 
- User likes humor and warmth (虾仔 persona)
- Interested in stock trading (A股)
- Works at 深圳燃气
- Prefers direct DOM access over screenshots
- Wants self-improving capabilities