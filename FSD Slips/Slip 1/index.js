const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) { res.writeHead(500); return res.end('Error loading HTML'); }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
}).listen(3000, () => console.log('Slip 1 running on http://localhost:3000 (Non-Express)'));
