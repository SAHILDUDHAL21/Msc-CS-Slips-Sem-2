const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
    const user = { id: Date.now(), ...req.body };
    users.push(user);
    res.status(201).json(user);
});

app.get('/users', (req, res) => res.json(users));

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if(user) {
        Object.assign(user, req.body);
        res.json(user);
    } else {
        res.status(404).send('Not found');
    }
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.status(204).send();
});

app.listen(3000, () => console.log('RESTful API on port 3000'));
