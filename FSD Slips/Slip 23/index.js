const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <div style="font-family:sans-serif;max-width:400px;margin:30px auto;">
            <h2>Dynamic Student Marks System</h2>
            <label>Student Name:</label>
            <input type="text" id="name" style="width:100%;margin-bottom:10px;"><br>
            <label>Exam Marks (comma-separated):</label>
            <input type="text" id="marks" placeholder="e.g. 50,60,75,90" style="width:100%;margin-bottom:10px;"><br>
            <button onclick="calculate()" style="padding:10px;width:100%;">Process Dynamically</button>
            <div id="output" style="margin-top:20px;padding:10px;background:#eef;">Waiting for input...</div>
        </div>
        <script>
            function calculateTotal(m) { return m.reduce((a,b)=>a+b, 0); }
            function calculateAverage(t, count) { return t/count; }
            function calculate() {
                const name = document.getElementById('name').value;
                const mStr = document.getElementById('marks').value;
                if(!name || !mStr) return alert("Fill all fields");
                const marksArr = mStr.split(',').map(Number).filter(n => !isNaN(n));
                const total = calculateTotal(marksArr);
                const avg = calculateAverage(total, marksArr.length || 1);
                document.getElementById('output').innerHTML = "<b>Report for:</b> " + name + "<br><b>Total Score:</b> " + total + "<br><b>Average:</b> " + avg.toFixed(2);
            }
        </script>
    `);
}).listen(3000, () => console.log('Slip 23 Student System on http://localhost:3000'));
