---
name: xiaohongshu-skills
description: "小红书自动发布、自动评论、自动检索的Skill。支持 OpenClaw、Codex、CC 等。Use when managing Xiaohongshu (Little Red Book) content, scheduling posts, or analyzing trends."
homepage: https://github.com/white0dew/XiaohongshuSkills
metadata: { "openclaw": { "emoji": "📕", "requires": {} } }
---

# 小红书 Skills (Xiaohongshu Skills)

小红书自动发布、评论、检索工具。

## Capabilities

### 1. 自动发布 (Auto Publish)
- 定时发布笔记
- 批量上传图文
- 视频内容发布
- 草稿管理

### 2. 自动评论 (Auto Comment)
- 智能回复评论
- 关键词监控回复
- 互动数据分析

### 3. 自动检索 (Auto Search)
- 关键词搜索
- 热门话题追踪
- 竞品分析
- 趋势监控

## When to Use

✅ **USE when:**
- "帮我发一篇小红书"
- "监控这个关键词"
- "分析一下竞品"
- "回复评论"
- "找热门话题"

## Commands

```bash
# 发布笔记
xhs publish --title "标题" --content "内容" --images "img1.jpg,img2.jpg"

# 搜索关键词
xhs search --keyword "美妆" --limit 50

# 自动回复
xhs reply --enable --keywords "好用,推荐"

# 查看数据
xhs analytics --post-id xxx
```

## Best Practices

1. **遵守平台规则** - 避免频繁操作触发风控
2. **内容质量优先** - 不要纯营销，要有价值
3. **互动要真实** - 自动化回复要自然
4. **数据分析** - 定期看效果调整策略

## Integration

Works with:
- **self-improving-agent** - 学习什么内容表现好
- **ontology** - 管理内容主题和标签
- **summarize** - 生成笔记摘要