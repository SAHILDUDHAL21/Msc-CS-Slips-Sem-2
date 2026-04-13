const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

const filesToCreate = [
    // Slip 1
    {
        dir: 'Slip 1',
        filename: 'index.html',
        content: `<!DOCTYPE html>
<html>
<head><title>Registration Form</title></head>
<body>
    <h2>Register</h2>
    <form id="regForm">
        <input type="text" id="name" placeholder="Name" required><br>
        <input type="email" id="email" placeholder="Email" required><br>
        <input type="password" id="password" placeholder="Password" required><br>
        <input type="text" id="phone" placeholder="Phone" required><br>
        <button type="submit">Submit</button>
    </form>
    <p id="message"></p>
    <script>
        document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            if(phone.length !== 10 || isNaN(phone)) {
                document.getElementById('message').innerText = 'Invalid phone number';
                return;
            }
            document.getElementById('message').innerText = 'Registration Successful!';
        });
    </script>
</body>
</html>`
    },
    // Slip 2, 18
    {
        dir: 'Slip 2, 18',
        filename: 'login.js',
        content: `function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === password) {
            // Note: slip 2 uses 'completed', slip 18 uses 'successfully'
            resolve("login successfully completed");
        } else {
            reject("login fail");
        }
    });
}

login("admin", "admin")
    .then(msg => console.log("Success:", msg))
    .catch(err => console.error("Error:", err));

login("user", "wrongpassword")
    .then(msg => console.log("Success:", msg))
    .catch(err => console.error("Error:", err));
`
    },
    // Slip 3
    {
        dir: 'Slip 3',
        filename: 'app.js',
        content: `const http = require('http');
const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname, 'demo.txt'), 'Hello world from File System!');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const content = fs.readFileSync(path.join(__dirname, 'demo.txt'), 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(content);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
`
    },
    // Slip 4
    {
        dir: 'Slip 4',
        filename: 'sysinfo.js',
        content: `const os = require('os');

console.log("=== System Information ===");
console.log("Operating System:", os.platform(), os.release());
console.log("CPU:", os.cpus()[0].model);
console.log("Total Memory:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free Memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2), "GB");
`
    },
    // Slip 5
    {
        dir: 'Slip 5',
        filename: 'fetchData.js',
        content: `async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log("Fetched User Data:");
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchUserData();
`
    },
    // Slip 6
    {
        dir: 'Slip 6',
        filename: 'movie_crud.js',
        content: `const mongoose = require('mongoose');

// Assuming a local MongoDB instance
mongoose.connect('mongodb://127.0.0.1:27017/movies_db');

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    year: Number
});
const Movie = mongoose.model('Movie', movieSchema);

async function performCRUD() {
    // Create
    const newMovie = new Movie({ title: 'Inception', director: 'Christopher Nolan', year: 2010 });
    await newMovie.save();
    console.log("Created:", newMovie.title);

    // Read
    const movies = await Movie.find();
    console.log("All Movies:", movies.map(m => m.title));

    // Update
    await Movie.updateOne({ title: 'Inception' }, { year: 2011 });
    console.log("Updated Movie year");

    // Delete
    await Movie.deleteOne({ title: 'Inception' });
    console.log("Deleted Movie");

    mongoose.connection.close();
}

performCRUD().catch(console.error);
`
    },
    // Slip 7, 14
    {
        dir: 'Slip 7, 14',
        filename: 'app.js',
        content: `const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', 
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('Form successfully submitted and validated.');
    }
);

app.listen(3000, () => console.log('App running on port 3000. Send POST /submit'));
`
    },
    // Slip 8, 17
    {
        dir: 'Slip 8, 17',
        filename: 'index.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <style>
        body { font-family: Arial; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f2f5; }
        .login-box { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); width: 300px; }
        input { width: 100%; padding: 10px; margin: 10px 0; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #0056b3; }
        .error { color: red; font-size: 12px; }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>Login</h2>
        <form id="loginForm">
            <input type="text" id="username" placeholder="Username">
            <div id="userError" class="error"></div>
            <input type="password" id="password" placeholder="Password">
            <div id="passError" class="error"></div>
            <button type="submit">Sign In</button>
        </form>
    </div>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;
            document.getElementById('userError').innerText = '';
            document.getElementById('passError').innerText = '';
            
            if (!document.getElementById('username').value) {
                document.getElementById('userError').innerText = 'Username is required';
                valid = false;
            }
            if (document.getElementById('password').value.length < 6) {
                document.getElementById('passError').innerText = 'Password min 6 chars';
                valid = false;
            }
            
            if (valid) alert('Login Validated');
        });
    </script>
</body>
</html>`
    },
    // Slip 9
    {
        dir: 'Slip 9',
        filename: 'student_db.js',
        content: `const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/student_db');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String
});
const Student = mongoose.model('Student', studentSchema);

async function runQueries() {
    // Insert Mock Data
    await Student.insertMany([
        { name: 'Alice', age: 20, grade: 'A' },
        { name: 'Bob', age: 19, grade: 'B' },
        { name: 'Charlie', age: 22, grade: 'A' }
    ]);

    // Search query
    const results = await Student.find({ name: 'Alice' });
    console.log("Search for Alice:", results);

    // Filter query (age > 19)
    const filtered = await Student.find({ age: { $gt: 19 } });
    console.log("Students older than 19:", filtered);

    // Clean up
    await Student.deleteMany({});
    mongoose.connection.close();
}

runQueries().catch(console.error);
`
    },
    // Slip 10
    {
        dir: 'Slip 10',
        filename: 'routes.js',
        content: `const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.send('GET request - fetching users');
});

app.post('/users', (req, res) => {
    res.send('POST request - creating user');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
`
    },
    // Slip 11
    {
        dir: 'Slip 11',
        filename: 'rest_api.js',
        content: `const express = require('express');
const app = express();
app.use(express.json());

let users = [];

// Create
app.post('/users', (req, res) => {
    const user = { id: Date.now(), ...req.body };
    users.push(user);
    res.status(201).json(user);
});

// Read
app.get('/users', (req, res) => {
    res.json(users);
});

// Update
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if(user) {
        Object.assign(user, req.body);
        res.json(user);
    } else {
        res.status(404).send('Not found');
    }
});

// Delete
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.status(204).send();
});

app.listen(3000, () => console.log('RESTful API on port 3000'));
`
    },
    // Slip 12
    {
        dir: 'Slip 12',
        filename: 'file_rw.js',
        content: `const fs = require('fs');

fs.writeFileSync('input.txt', 'Hello, this is input data.');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const processedData = data.toUpperCase() + " (Processed)";
    
    fs.writeFile('output.txt', processedData, (err) => {
        if (err) throw err;
        console.log('Data successfully written to output.txt');
    });
});
`
    },
    // Slip 13
    {
        dir: 'Slip 13',
        filename: 'math.js',
        content: `function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

module.exports = { add, subtract };
`
    },
    {
        dir: 'Slip 13',
        filename: 'app.js',
        content: `const math = require('./math');

console.log("Addition:", math.add(5, 3));
console.log("Subtraction:", math.subtract(10, 4));
`
    },
    // Slip 15
    {
        dir: 'Slip 15',
        filename: 'teacher_db.js',
        content: `const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/teacher_db');

const teacherSchema = new mongoose.Schema({
    name: String,
    subject: String,
    experience: Number
});
const Teacher = mongoose.model('Teacher', teacherSchema);

async function run() {
    await Teacher.insertMany([
        { name: 'Mr. Smith', subject: 'Math', experience: 10 },
        { name: 'Ms. Taylor', subject: 'Science', experience: 5 }
    ]);

    // Search
    const mathTeacher = await Teacher.find({ subject: 'Math' });
    console.log("Math Teachers:", mathTeacher);

    // Filter
    const experienced = await Teacher.find({ experience: { $gt: 6 } });
    console.log("Teachers with >6 yrs experience:", experienced);

    await Teacher.deleteMany({});
    mongoose.connection.close();
}
run();
`
    },
    // Slip 16
    {
        dir: 'Slip 16',
        filename: 'auth_app.js',
        content: `const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/auth_db');

const User = mongoose.model('User', new mongoose.Schema({
    name: String, email: { type: String, unique: true }, password: String, phone: String
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send('Signup successful');
    } catch(err) {
        res.status(400).send('Error in signup');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if(user) {
        res.send('Sign In successful');
    } else {
        res.status(401).send('Unauthorized user');
    }
});

app.listen(3000, () => console.log('Auth app on port 3000'));
`
    },
    // Slip 19
    {
        dir: 'Slip 19',
        filename: 'os_info.js',
        content: `const os = require('os');
const path = require('path');

console.log("Path of home directory for current user:", os.homedir());
console.log("Hostname of the operating system:", os.hostname());
`
    },
    // Slip 20
    {
        dir: 'Slip 20',
        filename: 'simple_login.js',
        content: `const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simple hardcoded check
    if(username === 'admin' && password === '123') {
        res.send('Login successful');
    } else {
        res.send('Invalid credentials');
    }
});

app.listen(3000, () => console.log('App running on port 3000. Send POST to /login'));
`
    },
    // Slip 21
    {
        dir: 'Slip 21',
        filename: 'promises.js',
        content: `function fetchData() {
    return new Promise((resolve) => {
        console.log("Fetching data from server...");
        setTimeout(() => {
            resolve({ data: "Sample Server Data", status: 200 });
        }, 2000); // simulate 2 seconds delay
    });
}

fetchData().then(result => {
    console.log("Data received:", result);
});
`
    },
    // Slip 22
    {
        dir: 'Slip 22',
        filename: 'employee.js',
        content: `const employee = {
    id: 101,
    name: "John Doe",
    department: "IT",
    salary: 50000,
    displayDetails: function() {
        console.log(\`ID: \${this.id}, Name: \${this.name}, Dept: \${this.department}, Salary: \${this.salary}\`);
    },
    updateSalary: function(newSalary) {
        this.salary = newSalary;
        console.log("Salary updated.");
    }
};

employee.displayDetails();
employee.updateSalary(60000);
employee.displayDetails();
`
    },
    // Slip 23
    {
        dir: 'Slip 23',
        filename: 'student_marks.js',
        content: `// Variables and array
let studentName = "Jane Doe";
let marks = [85, 90, 78, 92, 88];

// Function and operators
function calculateTotal(marksArray) {
    let total = 0;
    for(let i = 0; i < marksArray.length; i++) {
        total += marksArray[i]; // operator
    }
    return total;
}

function calculateAverage(total, count) {
    return total / count; // operator
}

let totalMarks = calculateTotal(marks);
let averageMarks = calculateAverage(totalMarks, marks.length);

console.log(\`Student: \${studentName}\`);
console.log(\`Total Marks: \${totalMarks}\`);
console.log(\`Average: \${averageMarks}\`);
`
    },
    // Slip 24
    {
        dir: 'Slip 24',
        filename: 'counter.html',
        content: `<!DOCTYPE html>
<html>
<head>
    <title>Word and Character Counter</title>
</head>
<body>
    <h2>Word and Character Counter</h2>
    <textarea id="textInput" rows="5" cols="50" oninput="count()"></textarea>
    <p>Words: <span id="wordCount">0</span></p>
    <p>Characters: <span id="charCount">0</span></p>

    <script>
        function count() {
            let text = document.getElementById('textInput').value;
            let charCount = text.length;
            let wordCount = text.trim() === "" ? 0 : text.trim().split(/\\s+/).length;
            
            document.getElementById('charCount').innerText = charCount;
            document.getElementById('wordCount').innerText = wordCount;
        }
    </script>
</body>
</html>`
    },
    // Slip 25
    {
        dir: 'Slip 25',
        filename: 'bg_changer.html',
        content: `<!DOCTYPE html>
<html>
<head>
    <title>Background Color Changer</title>
</head>
<body>
    <h2>Background Color will change automatically</h2>
    <script>
        window.onload = function() {
            const colors = ['#f44336', '#9c27b0', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800'];
            let i = 0;
            setInterval(() => {
                document.body.style.backgroundColor = colors[i % colors.length];
                i++;
            }, 1000); // changes every 1 second
        }
    </script>
</body>
</html>`
    }
];

filesToCreate.forEach(fileInfo => {
    const fullPath = path.join(baseDir, fileInfo.dir, fileInfo.filename);
    try {
        fs.writeFileSync(fullPath, fileInfo.content);
        console.log('Created: ' + fullPath);
    } catch (err) {
        console.error('Error writing ' + fullPath, err);
    }
});
