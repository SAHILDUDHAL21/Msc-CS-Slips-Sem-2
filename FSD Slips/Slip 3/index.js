const http = require('http');
const fs = require('fs');
const path = require('path');

const demoPath = path.join(__dirname, 'demo.txt');
fs.writeFileSync(demoPath, 'Hello world from File System!');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const content = fs.readFileSync(demoPath, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(content);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
