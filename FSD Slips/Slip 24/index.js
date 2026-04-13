const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
}).listen(3000, () => console.log('Slip 24 counter running on http://localhost:3000 (Non-Express)'));
