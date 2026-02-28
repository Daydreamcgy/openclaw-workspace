---
name: ontology
description: "Typed knowledge graph for structured agent memory and composable skills. Use when creating/querying entities (Person, Project, Task, Event, Document), linking related objects, enforcing constraints, planning multi-step actions as graph transformations, or when skills need to share state. Trigger on 'remember', 'what do I know about', 'link X to Y', 'show dependencies', entity CRUD, or cross-skill data access."
homepage: https://clawhub.ai/kn72dv4fm7ss7swbq47nnpad9x7zy2jh/ontology
metadata: { "openclaw": { "emoji": "🕸️", "requires": {} } }
---

# Ontology Skill

Typed knowledge graph for structured agent memory and composable skills.

## Core Concepts

### Entities (Nodes)
Typed objects with properties:
- **Person** - Users, contacts, authors
- **Project** - Work initiatives, repositories
- **Task** - Action items, todos
- **Event** - Calendar entries, meetings
- **Document** - Files, notes, articles
- **Concept** - Ideas, topics, tags

### Relationships (Edges)
Links between entities:
- Person **works_on** Project
- Project **has_task** Task
- Task **depends_on** Task
- Document **about** Concept
- Person **knows** Person

### Constraints
Rules that must hold:
- Tasks must have status: todo | in_progress | done
- Events must have start_time < end_time
- Projects must have at least one task

## When to Use

✅ **USE ontology when:**

1. **Creating structured data**
   - "Remember that Alice is working on Project X"
   - "Add a task to review the document"
   - "Schedule a meeting about Y"

2. **Querying relationships**
   - "What projects is Alice working on?"
   - "Show me all tasks depending on X"
   - "What documents are about topic Y?"

3. **Linking information**
   - "Connect this email to the project"
   - "This note is related to that meeting"
   - "Tag this file with concept Z"

4. **Planning & dependencies**
   - "What needs to happen before X?"
   - "Show the critical path"
   - "What's blocking Y?"

5. **Cross-skill state sharing**
   - GitHub skill creates Project → Calendar skill schedules review
   - Email mentions Task → Todo skill adds it
   - Note-taking skill tags → Search skill finds

## Storage Format

Stored in `memory/ONTOLOGY.json`:

```json
{
  "entities": {
    "person-alice": {
      "type": "Person",
      "name": "Alice",
      "email": "alice@example.com",
      "created_at": "2026-03-01T00:00:00Z"
    },
    "project-alpha": {
      "type": "Project", 
      "name": "Alpha",
      "status": "active",
      "created_at": "2026-03-01T00:00:00Z"
    }
  },
  "relationships": [
    {
      "from": "person-alice",
      "to": "project-alpha",
      "type": "works_on",
      "since": "2026-03-01"
    }
  ]
}
```

## Operations

### Create
```
CREATE Person(name="Bob", email="bob@example.com")
CREATE Project(name="Beta", deadline="2026-06-01")
LINK Bob works_on Beta
```

### Read
```
FIND Person WHERE name = "Alice"
GET Project["project-alpha"].tasks
QUERY Task WHERE status = "todo" AND assignee = "Alice"
```

### Update
```
UPDATE Task["task-123"] SET status = "done"
ADD_TAG Document["doc-456"] "important"
```

### Delete
```
DELETE Task["task-789"]
UNLINK Person["Alice"] FROM Project["Alpha"]
```

## Integration with Other Skills

Skills can:
- **Read** ontology to understand context
- **Write** entities they create
- **Subscribe** to changes
- **Query** for related information

Example flow:
1. GitHub skill: CREATE Project from repo
2. Calendar skill: CREATE Event for sprint planning
3. LINK Event relates_to Project
4. Todo skill: QUERY Project.tasks → CREATE Task reminders

## Best Practices

1. **Use consistent IDs** - Prefer stable identifiers (email, repo URL) over generated
2. **Timestamp everything** - When was it created? Last modified?
3. **Version relationships** - Track when links were made/broken
4. **Validate constraints** - Check rules before writing
5. **Index for query** - Common lookups should be fast