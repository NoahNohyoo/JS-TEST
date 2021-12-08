const http = require('http');
const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    if (req.url === '/' ) {
        res.end('여기는 루트화면 입니다.');
    } else if (req.url === '/login') {
        res.end('여기는 로그인 화면입니다.');
    } else {
        res.end('404 not found page');
    }
});

app.listen(3001, () => {
    console.log('http server');
});

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('This is root');
// });

// app.get('/login', (req, res) => {
//     res.send('Login');
// });

// app.listen(3000, function () {
//     console.log('on Server');
// });