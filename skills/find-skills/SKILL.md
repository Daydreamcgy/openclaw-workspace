---
name: find-skills
description: "Helps users discover and install agent skills when they ask questions like 'how do I do X', 'find a skill for X', 'is there a skill that can...', or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill."
homepage: https://clawhub.ai/kn77ajmmqw3cgnc3ay1x3e0ccd805hsw/find-skills
metadata: { "openclaw": { "emoji": "🔍", "requires": {} } }
---

# Find Skills

Helps users discover and install agent skills.

## When to Use

✅ **USE this skill when user asks:**

- "How do I do X?"
- "Find a skill for X"
- "Is there a skill that can..."
- "Can you help me with Y?"
- "I want to Z, how?"
- "What skills do you have?"
- "Install X capability"

Also use when:
- User expresses frustration with current limitations
- User mentions wanting automation
- User describes workflow that could be skillified

## How to Help

### 1. Check Local Skills
First, check what skills are already installed:
```bash
ls ~/.openclaw/skills/
# or
ls ~/AppData/Local/nvm/v22.22.0/node_modules/openclaw/skills/
```

### 2. Search ClawHub
If not found locally, search ClawHub:
- Visit https://clawhub.ai
- Use browser tool to browse/search
- Look for matching skill names/descriptions

### 3. Suggest Installation
If found on ClawHub:
```bash
npx clawhub@latest install <skill-name>
```

If rate limited or unavailable:
- Create basic SKILL.md manually
- Copy to skills directory
- Document in LEARNINGS.md

### 4. Explain Usage
After installation:
- Read the skill's SKILL.md
- Summarize key capabilities
- Show example usage
- Note any requirements/setup

## Skill Categories

### Communication
- discord, slack, imsg - Chat platforms
- email clients - himalaya, etc.
- voice-call - Audio calls

### Productivity
- notion, obsidian, bear-notes - Notes
- trello, things-mac - Task management
- github, gh-issues - Development
- calendar/reminder integrations

### Media & Content
- openai-image-gen - AI images
- openai-whisper - Transcription
- video-frames - Video processing
- spotify-player, sonoscli - Audio

### Data & Monitoring
- weather - Weather info
- blogwatcher - RSS monitoring
- polymarket - Prediction markets
- summarize - Content summarization

### System & DevOps
- healthcheck - Security audits
- canvas - Visual displays
- tmux - Terminal multiplexing
- coding-agent - Code assistance

## Best Practices

1. **Always verify** - Check if skill exists before suggesting
2. **Explain trade-offs** - Some skills require API keys or setup
3. **Offer alternatives** - If exact match not found, suggest similar
4. **Document installation** - Record in LEARNINGS.md for future reference

## Example Interactions

**User:** "Can you check my email?"
→ Check for email skills → Install himalaya if needed → Show usage

**User:** "I want to control my lights"
→ Search for home automation → Suggest openhue or similar

**User:** "How do I make you better?"
→ Suggest self-improving-agent, proactive-agent, ontology