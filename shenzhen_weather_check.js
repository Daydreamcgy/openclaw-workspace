// 深圳天气每日检查脚本
// 每天早上7:30运行，通过Telegram推送天气提醒

const { execSync } = require('child_process');

function getShenzhenWeather() {
  try {
    // 使用open-meteo API获取深圳天气
    const cmd = 'curl.exe -s "https://api.open-meteo.com/v1/forecast?latitude=22.5431&longitude=114.0579&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours&timezone=Asia%2FShanghai&forecast_days=2"';
    const result = execSync(cmd, { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    const data = JSON.parse(result);
    
    // 今天和明天的数据
    const today = data.daily.time[0] === new Date().toISOString().split('T')[0] ? 0 : 1;
    const tomorrow = today === 0 ? 1 : 0;
    
    const tomorrowData = {
      date: data.daily.time[tomorrow],
      weatherCode: data.daily.weathercode[tomorrow],
      tempMax: data.daily.temperature_2m_max[tomorrow],
      tempMin: data.daily.temperature_2m_min[tomorrow],
      precipitation: data.daily.precipitation_sum[tomorrow],
      rainHours: data.daily.precipitation_hours[tomorrow]
    };
    
    return tomorrowData;
  } catch (error) {
    console.error('获取天气数据失败:', error.message);
    return null;
  }
}

function interpretWeatherCode(code) {
  // WMO天气代码解释
  const codes = {
    0: '晴天',
    1: '主要晴天',
    2: '部分多云',
    3: '阴天',
    45: '雾',
    48: '雾',
    51: '毛毛雨',
    53: '毛毛雨',
    55: '密集毛毛雨',
    56: '冻毛毛雨',
    57: '密集冻毛毛雨',
    61: '小雨',
    63: '中雨',
    65: '大雨',
    66: '冻雨',
    67: '密集冻雨',
    71: '小雪',
    73: '中雪',
    75: '大雪',
    77: '雪粒',
    80: '阵雨',
    81: '中阵雨',
    82: '强阵雨',
    85: '阵雪',
    86: '强阵雪',
    95: '雷暴',
    96: '雷暴伴小冰雹',
    99: '雷暴伴大冰雹'
  };
  return codes[code] || `未知天气(${code})`;
}

function generateMessage(weather) {
  if (!weather) {
    return '⚠️ 今天无法获取天气数据，建议查看天气APP确认。';
  }
  
  const weatherDesc = interpretWeatherCode(weather.weatherCode);
  const needsUmbrella = weather.precipitation > 0.5 || weather.rainHours > 2;
  const umbrellaAdvice = needsUmbrella ? '✅ 必须带伞！' : '🌤️ 可以不带伞';
  
  let clothingAdvice = '';
  if (weather.tempMax < 15) {
    clothingAdvice = '🧥 穿厚外套';
  } else if (weather.tempMax < 22) {
    clothingAdvice = '👕 穿长袖+外套';
  } else {
    clothingAdvice = '👚 穿短袖即可';
  }
  
  return `🦐 虾仔天气提醒 🦐

📅 日期：${weather.date}
🌡️ 温度：${weather.tempMin}°C ~ ${weather.tempMax}°C
🌧️ 天气：${weatherDesc}
💧 降水量：${weather.precipitation}mm
⏱️ 降雨时长：${weather.rainHours}小时

${umbrellaAdvice} ${weather.precipitation > 2 ? '(中到大雨)' : weather.precipitation > 0.5 ? '(小雨)' : ''}
${clothingAdvice}

🏠 罗湖 → 💼 福田通勤提示：
${needsUmbrella ? '• 地铁人多带伞小心\n• 考虑防水鞋/备用袜子' : '• 天气不错，享受通勤'}

#深圳天气 #虾仔提醒`;
}

// 主函数
function main() {
  console.log('开始获取深圳天气...');
  const weather = getShenzhenWeather();
  const message = generateMessage(weather);
  console.log('生成的消息:', message);
  
  // 这里可以添加Telegram发送逻辑
  // 实际使用时需要通过OpenClaw的message工具发送
  return message;
}

// 测试运行
if (require.main === module) {
  const msg = main();
  console.log('\n=== 测试输出 ===');
  console.log(msg);
}

module.exports = { getShenzhenWeather, generateMessage, main };