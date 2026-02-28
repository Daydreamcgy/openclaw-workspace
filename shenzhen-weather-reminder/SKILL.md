---
name: shenzhen-weather-reminder
description: "深圳天气每日提醒，特别为小桂定制（罗湖居住，福田工作）。每天早上7:30推送天气+带伞建议+通勤提示。"
homepage: https://open-meteo.com
metadata: { "openclaw": { "emoji": "🦐☔", "requires": { "bins": ["curl", "node"] } } }
---

# 深圳天气提醒 Skill

专为小桂定制的深圳天气每日提醒服务。

## 功能

- 每天早上7:30自动推送深圳天气
- 智能带伞建议（基于降水量和降雨时长）
- 穿衣指南（基于温度）
- 罗湖→福田通勤特别提示
- 通过Telegram发送提醒

## 配置方法

### 1. 安装依赖
确保系统有：
- curl
- node.js

### 2. 设置cron任务
```bash
# 每天早上7:30运行
openclaw cron add --name "shenzhen-weather" --schedule "30 7 * * *" --command "node C:\\Users\\Windows\\.openclaw\\workspace\\shenzhen_weather_check.js"
```

### 3. 测试运行
```bash
node C:\Users\Windows\.openclaw\workspace\shenzhen_weather_check.js
```

## 手动触发

你也可以随时手动请求天气：
- "深圳天气怎么样？"
- "明天要带伞吗？"
- "今天穿什么合适？"

## 数据源

使用 Open-Meteo API：
- 位置：深圳 (22.5431°N, 114.0579°E)
- 数据：温度、降水量、天气代码
- 更新频率：每天自动

## 定制信息

这个skill特别为小桂定制：
- 用户：小桂
- 居住：深圳罗湖
- 工作：福田
- 通勤：罗湖→福田
- 生日：2001年4月23日

## 消息格式示例

```
🦐 虾仔天气提醒 🦐

📅 日期：2026-02-28
🌡️ 温度：20.6°C ~ 22.4°C
🌧️ 天气：小雨
💧 降水量：2.3mm
⏱️ 降雨时长：14小时

✅ 必须带伞！ (中到大雨)
👚 穿短袖即可

🏠 罗湖 → 💼 福田通勤提示：
• 地铁人多带伞小心
• 考虑防水鞋/备用袜子

#深圳天气 #虾仔提醒
```