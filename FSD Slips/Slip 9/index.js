const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Allow Postman JSON body testing

mongoose.connect('mongodb://127.0.0.1:27017/student_db');

const studentSchema = new mongoose.Schema({ name: String, age: Number, grade: String });
const Student = mongoose.model('Student', studentSchema);

// Create student
app.post('/students', async (req, res) => {
    const s = new Student(req.body);
    await s.save();
    res.json(s);
});

// Search by name query (e.g. GET /students/search?name=Alice)
app.get('/students/search', async (req, res) => {
    const { name } = req.query;
    const results = await Student.find({ name: new RegExp(name, 'i') });
    res.json(results);
});

// Filter by minimum age (e.g. GET /students/filter?minAge=19)
app.get('/students/filter', async (req, res) => {
    const { minAge } = req.query;
    const results = await Student.find({ age: { $gt: Number(minAge) } });
    res.json(results);
});

app.listen(3000, () => console.log('Student Database API running on http://localhost:3000'));
