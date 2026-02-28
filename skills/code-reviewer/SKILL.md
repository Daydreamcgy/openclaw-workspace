---
name: code-reviewer
description: "AI-powered code review for quality, security, performance, and maintainability. Use when writing code, reviewing PRs, or improving existing codebases."
homepage: https://github.com/openclaw/code-reviewer
metadata: { "openclaw": { "emoji": "👀", "requires": {} } }
---

# Code Reviewer Skill

AI-powered code review for quality, security, performance.

## Review Dimensions

### 1. Code Quality
- Readability and clarity
- Naming conventions
- Function length/complexity
- Comment quality
- Consistency with style guide

### 2. Security
- Injection vulnerabilities
- Authentication issues
- Data exposure risks
- Dependency vulnerabilities
- Secrets in code

### 3. Performance
- Algorithmic complexity
- Resource leaks
- Unnecessary computations
- Database query optimization
- Memory usage

### 4. Maintainability
- Test coverage
- Documentation
- Modularity
- Error handling
- Logging

## When to Use

✅ **USE when:**
- "Review this code"
- "Is this secure?"
- "How can I improve this?"
- "Check for bugs"
- "Refactor suggestion"

## Review Process

1. **Static Analysis** - Check syntax, patterns
2. **Security Scan** - Look for vulnerabilities
3. **Logic Review** - Understand intent vs implementation
4. **Suggestion** - Provide improvements
5. **Learning** - Record patterns for future

## Example Reviews

```javascript
// BAD: SQL injection risk
const query = `SELECT * FROM users WHERE id = ${userId}`;

// GOOD: Parameterized query
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

```python
# BAD: No error handling
data = open('file.txt').read()

# GOOD: Proper error handling
try:
    with open('file.txt', 'r') as f:
        data = f.read()
except FileNotFoundError:
    logger.error("File not found")
    data = None
```

## Integration

Works with:
- **github** - Review PRs automatically
- **self-improving-agent** - Learn from review patterns
- **refactor-master** - Apply suggested fixes