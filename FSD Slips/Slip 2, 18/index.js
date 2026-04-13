const http = require('http');

function login(username, password) {
    return new Promise((resolve, reject) => {
        // Dynamic dynamic check without hardcoded globals
        const dbUsers = { 'admin': 'admin', 'user': '123' };
        if (dbUsers[username] && dbUsers[username] === password) resolve("login successfully completed");
        else reject("login fail");
    });
}

http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <div style="font-family:Arial;max-width:300px;margin:50px auto;">
                <h2>User Login System</h2>
                <form method="POST" action="/login">
                    <input type="text" name="username" placeholder="Enter Username (e.g. admin)" required style="width:100%;margin-bottom:10px;padding:8px;"/><br>
                    <input type="password" name="password" placeholder="Enter Password" required style="width:100%;margin-bottom:10px;padding:8px;"/><br>
                    <button type="submit" style="width:100%;padding:10px;">Login Here</button>
                </form>
            </div>
        `);
    } else if (req.url === '/login' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            const params = new URLSearchParams(body);
            login(params.get('username'), params.get('password'))
                .then(msg => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`<h2 style="color:green;text-align:center;">Success: ${msg}</h2><div style="text-align:center"><a href="/">Back to Form</a></div>`);
                })
                .catch(err => {
                    res.writeHead(401, { 'Content-Type': 'text/html' });
                    res.end(`<h2 style="color:red;text-align:center;">Error: ${err}</h2><div style="text-align:center"><a href="/">Try Again</a></div>`);
                });
        });
    }
}).listen(3000, () => console.log('Slip 2/18 Login System via HTML running on http://localhost:3000'));
