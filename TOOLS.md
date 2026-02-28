# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Available Skills (Free, No API Key)

### ✅ Ready to Use
- **weather** - Weather via wttr.in (free)
- **songsee** - Music recognition
- **video-frames** - Extract frames from video
- **xurl** - URL processing
- **tmux** - Terminal multiplexer
- **healthcheck** - Security auditing
- **canvas** - HTML visualization (local)

### 🍎 macOS Only (if available)
- **imsg** - iMessage integration
- **apple-notes** - Apple Notes
- **apple-reminders** - Apple Reminders

### 🏠 Smart Home (if on same network)
- **openhue** - Philips Hue lights

---

## Skills Requiring Setup

### Need API Keys
- discord, slack, notion, github, trello - Need tokens
- spotify-player - Needs Spotify account
- openai-* - Needs OpenAI API key
- gemini - Needs Google API key

### Need Accounts/Config
- 1password - Password manager login
- himalaya - Email account setup
- gog - Google Workspace access

---

Add whatever helps you do your job. This is your cheat sheet.
