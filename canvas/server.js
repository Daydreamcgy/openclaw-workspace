const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

const PORT = 8080;

// MIME类型映射
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
};

// 获取股票数据（新浪财经API）
function fetchStockFromSina(symbol) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'hq.sinajs.cn',
            path: `/list=${symbol}`,
            headers: {
                'Referer': 'https://finance.sina.com.cn'
            }
        };
        
        const req = https.request(options, (res) => {
            let chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => {
                try {
                    // 使用GB18030解码
                    const buffer = Buffer.concat(chunks);
                    const text = iconv.decode(buffer, 'GB18030');
                    
                    const match = text.match(/"([^"]*)"/);
                    if (!match) {
                        reject(new Error('无法解析数据'));
                        return;
                    }
                    
                    const data = match[1].split(',');
                    if (data.length < 33) {
                        reject(new Error('数据格式错误'));
                        return;
                    }
                    
                    const name = data[0];
                    const open = parseFloat(data[1]);
                    const prevClose = parseFloat(data[2]);
                    const price = parseFloat(data[3]);
                    const high = parseFloat(data[4]);
                    const low = parseFloat(data[5]);
                    const volume = parseFloat(data[8]) / 10000; // 转换为万手
                    
                    resolve({
                        name: name,
                        code: symbol.replace(/^(sh|sz)/, ''),
                        price: price.toFixed(2),
                        change: (price - prevClose).toFixed(2),
                        changePercent: ((price - prevClose) / prevClose * 100).toFixed(2),
                        open: open.toFixed(2),
                        high: high.toFixed(2),
                        low: low.toFixed(2),
                        volume: volume.toFixed(2),
                        prevClose: prevClose.toFixed(2)
                    });
                } catch (error) {
                    reject(error);
                }
            });
        });
        
        req.on('error', reject);
        req.setTimeout(5000, () => {
            req.destroy();
            reject(new Error('请求超时'));
        });
        req.end();
    });
}

const server = http.createServer(async (req, res) => {
    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    const url = new URL(req.url, `http://${req.headers.host}`);
    
    // API路由：获取股票数据
    if (url.pathname === '/api/stock') {
        const symbol = url.searchParams.get('symbol');
        if (!symbol) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: '缺少symbol参数' }));
            return;
        }
        
        try {
            const data = await fetchStockFromSina(symbol);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (error) {
            console.error('获取股票数据失败:', error.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
        return;
    }
    
    // 静态文件服务
    let filePath = url.pathname === '/' ? '/stock-tracker.html' : url.pathname;
    filePath = path.join(__dirname, filePath);
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + error.code, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ 股票追踪器服务器已启动`);
    console.log(`📱 本地访问: http://localhost:${PORT}/`);
    console.log(`🌐 局域网访问: http://192.168.5.45:${PORT}/`);
    console.log('');
    console.log('功能:');
    console.log('- 实时股票行情（新浪财经数据）');
    console.log('- 点击展开K线图和详细信息');
    console.log('- 自动刷新（每10秒）');
});

// 优雅关闭
process.on('SIGTERM', () => {
    console.log('\n正在关闭服务器...');
    server.close(() => {
        console.log('服务器已关闭');
        process.exit(0);
    });
});