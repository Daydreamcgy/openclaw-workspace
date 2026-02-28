---
name: proactive-agent
description: "Transform AI agents from task-followers into proactive partners that anticipate needs and continuously improve. Now with WAL Protocol, Working Buffer, Autonomous Crons, and battle-tested patterns. Part of the Hal Stack 🦞"
homepage: https://clawhub.ai/kn7agvhxan0vcwfmhrjhwg4n9s802d7k/proactive-agent
metadata: { "openclaw": { "emoji": "🦞", "requires": {} } }
---

# Proactive Agent Skill

Transform AI agents from task-followers into proactive partners that anticipate needs and continuously improve.

## Core Concepts

### 1. Anticipate Needs
Don't just wait for instructions - look ahead:
- User is working on X → Prepare Y before they ask
- Pattern detected → Suggest optimization
- Time-sensitive → Proactive reminders

### 2. Working Buffer (WAL Protocol)
Write-Ahead Logging for agent operations:
- Log intent before acting
- Enable rollback if needed
- Track state changes

### 3. Autonomous Crons
Self-scheduled periodic tasks:
- Check status without user prompting
- Monitor long-running processes
- Cleanup and maintenance

## When to Be Proactive

✅ **DO proactively:**

1. **Before user asks**
   - Pre-fetch likely needed data
   - Warm up connections/tools
   - Cache frequently accessed info

2. **When patterns emerge**
   - "You always check stocks at 9am" → Have them ready
   - "Every Friday you summarize week" → Prepare template

3. **At decision points**
   - Task has multiple paths → Suggest best option
   - Risk detected → Warn early
   - Opportunity spotted → Flag it

4. **During idle time**
   - Background organization
   - Memory consolidation
   - Skill improvement

❌ **DON'T proactively:**

- Interrupt focused work
- Make irreversible changes
- Assume sensitive preferences
- Overwhelm with notifications

## Patterns

### Pattern 1: Pre-warming
```
User opens laptop at 9am
→ Fetch calendar, weather, priority emails
→ Have summary ready when they ask
```

### Pattern 2: Suggestion Loop
```
User does X three times
→ "I noticed you do X often. Want me to automate it?"
→ Learn → Improve → Offer better way
```

### Pattern 3: Gentle Nudge
```
Deadline approaching
→ "Your report is due tomorrow. Need help?"
→ Not pushy, just helpful
```

### Pattern 4: Silent Improvement
```
Background task running slow
→ Optimize without mentioning
→ Just faster next time
```

## Implementation

### Heartbeat Checks
Use HEARTBEAT.md for periodic proactive work:
- Check calendars, emails, notifications
- Review memory files
- Update documentation
- Self-improvement tasks

### Context Awareness
Track:
- Time of day / Day of week
- Recent conversation topics
- Current projects/tasks
- User's current focus (if detectable)

### Action Thresholds
Only act when confidence > threshold:
- High confidence (>80%): Act silently
- Medium confidence (50-80%): Ask permission
- Low confidence (<50%): Wait for explicit request

## Integration

Works with:
- **self-improving-agent** - Capture learnings from proactive attempts
- **find-skills** - Discover new capabilities to be proactive about
- **ontology** - Structured knowledge for better anticipation