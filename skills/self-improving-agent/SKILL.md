---
name: self-improving-agent
description: "Captures learnings, errors, and corrections to enable continuous improvement. Use when: (1) A command or operation fails unexpectedly, (2) User corrects Clawd's understanding or output, (3) Reflecting on what worked/didn't work after completing a task, (4) User explicitly asks to remember a lesson or pattern for future use."
homepage: https://clawhub.ai/pskoett/self-improving-agent
metadata: { "openclaw": { "emoji": "🔄", "requires": {} } }
---

# Self-Improving Agent Skill

Captures learnings, errors, and corrections to enable continuous improvement.

## When to Use

✅ **USE this skill when:**

1. **A command or operation fails unexpectedly**
   - Tool returns an error
   - API call fails
   - File operation doesn't work
   - → Capture: what failed, why, how to fix

2. **User corrects Clawd's understanding or output**
   - "That's not what I meant..."
   - "Actually, the correct answer is..."
   - "No, you should have done X instead"
   - → Capture: the correction, the better approach

3. **Reflecting on what worked/didn't work after completing a task**
   - Task took longer than expected
   - Had to try multiple approaches
   - Found a better way mid-task
   - → Capture: lessons learned, best practices

4. **User explicitly asks to remember a lesson or pattern for future use**
   - "Remember this for next time"
   - "Make sure you always do X..."
   - "Don't forget that Y doesn't work"
   - → Capture: the explicit instruction/pattern

## Core Principles

### 1. Capture Context
Always record:
- What was attempted
- What went wrong or could be improved
- The correction or better approach
- Why it matters

### 2. Be Specific
❌ Bad: "File operations sometimes fail"
✅ Good: "When using `write` tool, path must be absolute - relative paths fail silently"

### 3. Link to Patterns
Connect new learnings to existing knowledge:
- "This is similar to the issue we had with X..."
- "Contradicts previous assumption that Y..."

### 4. Review Regularly
Periodically review captured learnings:
- Before starting similar tasks
- During heartbeat checks
- When encountering related situations

## Storage Format

Learnings are stored in `memory/LEARNINGS.md`:

```markdown
## [YYYY-MM-DD] Brief description

**Context:** What was happening
**Issue:** What went wrong
**Correction:** How to fix/improve
**Pattern:** Generalizable lesson
```

## Example Learnings

### Tool Usage
- `browser` tool needs `targetId` parameter after navigation
- `exec` on Windows requires PowerShell syntax, not bash
- `canvas` URLs must use full hostname, not localhost

### User Preferences
- User prefers concise responses over verbose explanations
- Always ask before sending emails or external messages
- User likes emoji reactions on Discord

### Domain Knowledge
- Stock codes: SH = Shanghai, SZ = Shenzhen
- Rate limits reset after ~60 seconds
- GitHub repos may not exist even if referenced in docs

## Integration with Memory

This skill works with:
- **MEMORY.md** - Long-term curated memories
- **memory/YYYY-MM-DD.md** - Daily logs
- **AGENTS.md** - Workspace conventions

Update these files when learnings reveal:
- New user preferences → USER.md
- Better workflows → AGENTS.md
- Important dates/events → MEMORY.md