const express = require('express');
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
