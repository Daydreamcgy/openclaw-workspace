---
name: refactor-master
description: "Intelligent code refactoring for cleaner, faster, more maintainable code. Use when improving legacy code, applying design patterns, or modernizing codebases."
homepage: https://github.com/openclaw/refactor-master
metadata: { "openclaw": { "emoji": "🔧", "requires": {} } }
---

# Refactor Master Skill

Intelligent code refactoring.

## Refactoring Patterns

### 1. Extract Method
Break long functions into smaller ones:
```javascript
// BEFORE
function processOrder(order) {
    // 50 lines of validation
    // 30 lines of calculation
    // 40 lines of database update
}

// AFTER
function processOrder(order) {
    validateOrder(order);
    const total = calculateTotal(order);
    saveOrder(order, total);
}
```

### 2. Rename Variable
Clear names over clever abbreviations:
```javascript
// BEFORE
const d = new Date();
const x = users.filter(u => u.a > 18);

// AFTER
const currentDate = new Date();
const adultUsers = users.filter(user => user.age > 18);
```

### 3. Remove Duplication
DRY - Don't Repeat Yourself:
```javascript
// BEFORE
if (user.role === 'admin') {
    logAction('admin_access');
}
if (user.role === 'moderator') {
    logAction('admin_access');
}

// AFTER
const adminRoles = ['admin', 'moderator'];
if (adminRoles.includes(user.role)) {
    logAction('admin_access');
}
```

### 4. Simplify Conditionals
Guard clauses and early returns:
```javascript
// BEFORE
function getDiscount(user) {
    if (user) {
        if (user.isActive) {
            if (user.orders > 10) {
                return 0.2;
            }
        }
    }
    return 0;
}

// AFTER
function getDiscount(user) {
    if (!user || !user.isActive) return 0;
    if (user.orders <= 10) return 0;
    return 0.2;
}
```

## When to Use

✅ **USE when:**
- "Refactor this code"
- "Make this cleaner"
- "Apply design pattern"
- "Modernize this"
- "Reduce complexity"

## Safety First

1. **Tests pass** - Before and after
2. **Small steps** - One change at a time
3. **Version control** - Commit before major changes
4. **Review** - Get second opinion on big refactors

## Integration

Works with:
- **code-reviewer** - Apply review suggestions
- **github** - Create refactoring PRs
- **self-improving-agent** - Learn refactoring patterns