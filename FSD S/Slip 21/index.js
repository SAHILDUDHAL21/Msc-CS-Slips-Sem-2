const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h2>JavaScript Promise Simulation (Dynamic)</h2>
        <input type="text" id="targetInfo" placeholder="What to fetch? e.g. Books">
        <button id="fetchBtn" onclick="runFetch()">Fetch Information Via Promise</button>
        <div id="result" style="margin-top:20px;padding:10px;background:#f9f9f9;">Waiting...</div>
        <script>
            function fetchData(query) {
                return new Promise((resolve, reject) => {
                    if (!query) reject("Error: Query empty!");
                    else setTimeout(() => resolve({ data: "API returned 5 results for \`" + query + "\` dynamically!", status: 200 }), 2000);
                });
            }
            function runFetch() {
                const query = document.getElementById('targetInfo').value;
                document.getElementById('result').innerText = "Simulating server fetching...";
                fetchData(query)
                    .then(res => { document.getElementById('result').style.color = "green"; document.getElementById('result').innerText = res.data; })
                    .catch(err => { document.getElementById('result').style.color = "red"; document.getElementById('result').innerText = err; });
            }
        </script>
    `);
}).listen(3000, () => console.log('Slip 21 running on http://localhost:3000'));
