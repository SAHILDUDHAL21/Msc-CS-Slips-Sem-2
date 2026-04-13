const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>Fetch User Data (Mock API) Dynamically</h2>
            <form method="POST" action="/fetch">
                <input type="number" name="userid" placeholder="Enter User ID (1-10)" required min="1" max="10"/>
                <button type="submit">Fetch Dynamic Data</button>
            </form>
        `);
    } else if (req.url === '/fetch' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', async () => {
            const params = new URLSearchParams(body);
            const userid = params.get('userid');
            try {
                // Fetch dynamic API
                const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userid);
                const data = await response.json();
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h2>Data for User ID: ${userid}</h2><pre style="background:#eee;padding:15px;">${JSON.stringify(data, null, 2)}</pre><a href="/">Back Search</a>`);
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h2>Error fetching data</h2><a href="/">Try Again</a>`);
            }
        });
    }
}).listen(3000, () => console.log('Slip 5 Fetch API running on http://localhost:3000'));
