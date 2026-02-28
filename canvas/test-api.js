const https = require('https');

const options = {
    hostname: 'hq.sinajs.cn',
    path: '/list=sh601139',
    headers: {
        'Referer': 'https://finance.sina.com.cn'
    }
};

const req = https.request(options, (res) => {
    console.log('状态码:', res.statusCode);
    console.log('响应头:', res.headers);
    
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log('响应数据:', data);
        const match = data.match(/"([^"]*)"/);
        if (match) {
            const fields = match[1].split(',');
            console.log('\n解析结果:');
            console.log('股票名称:', fields[0]);
            console.log('今开:', fields[1]);
            console.log('昨收:', fields[2]);
            console.log('当前价:', fields[3]);
            console.log('最高:', fields[4]);
            console.log('最低:', fields[5]);
            console.log('成交量:', fields[8]);
        }
    });
});

req.on('error', (error) => {
    console.error('请求失败:', error);
});

req.end();