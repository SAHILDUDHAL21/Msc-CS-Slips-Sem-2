const express = require('express');
const app = express();

app.use(express.json()); // Required to accept JSON from Postman

let users = [
    { username: 'admin', password: '123' } // initial seed
];

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: "User registered dynamically successfully" });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const valid = users.find(u => u.username === username && u.password === password);
    
    if(valid) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(3000, () => console.log('Dynamic login API running on port 3000'));
