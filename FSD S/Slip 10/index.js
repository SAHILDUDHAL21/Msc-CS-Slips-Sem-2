const express = require('express');
const app = express();
app.use(express.json()); // Allow JSON objects via Postman

app.get('/api/data', (req, res) => {
    // Dynamic query parsing
    res.json({
        message: 'GET request received',
        queryParams: req.query
    });
});

app.post('/api/data', (req, res) => {
    // Dynamic body parsing
    res.json({
        message: 'POST request received (Data created)',
        bodyData: req.body
    });
});

app.listen(3000, () => {
    console.log('Dynamic routes API is running on port 3000');
});
