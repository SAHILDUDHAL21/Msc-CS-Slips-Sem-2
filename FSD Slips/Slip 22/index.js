const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <div style="max-width:400px;margin:20px auto;font-family:Arial;">
            <h2>Dynamic Employee System</h2>
            <input type="text" id="name" placeholder="Employee Name" style="width:100%;margin:5px 0;"><br>
            <input type="text" id="dept" placeholder="Department" style="width:100%;margin:5px 0;"><br>
            <input type="number" id="salary" placeholder="Salary" style="width:100%;margin:5px 0;"><br>
            <button onclick="addEmp()" style="width:100%;padding:8px;">Register Employee Object</button>
            <hr/>
            <ul id="empList"></ul>
        </div>
        <script>
            const employees = [];
            function addEmp() {
                const emp = {
                    id: Date.now(),
                    name: document.getElementById('name').value,
                    dept: document.getElementById('dept').value,
                    salary: document.getElementById('salary').value
                };
                if(emp.name && emp.salary) { employees.push(emp); render(); }
            }
            window.updateSalary = function(id) {
                const newSal = prompt("Provide newly assigned salary for employee ID " + id + ":");
                const emp = employees.find(e => e.id == id);
                if(emp && newSal) { emp.salary = newSal; render(); }
            }
            function render() {
                document.getElementById('empList').innerHTML = employees.map(e => 
                    '<li style="margin:10px 0;"><strong>' + e.name + '</strong> (' + e.dept + ') - $' + e.salary + 
                    ' <br><button onclick="updateSalary(' + e.id + ')">Update Salary Dynamically</button></li>'
                ).join('');
            }
        </script>
    `);
}).listen(3000, () => console.log('Slip 22 Employee App on http://localhost:3000'));
