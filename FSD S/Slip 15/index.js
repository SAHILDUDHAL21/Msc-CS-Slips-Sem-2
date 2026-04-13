const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/teacher_db');

const teacherSchema = new mongoose.Schema({ name: String, subject: String, experience: Number });
const Teacher = mongoose.model('Teacher', teacherSchema);

// Add a teacher
app.post('/teachers', async (req, res) => {
    const t = new Teacher(req.body);
    await t.save();
    res.json({ message: "Teacher added", teacher: t });
});

// Search by subject (GET /teachers/search?subject=Math)
app.get('/teachers/search', async (req, res) => {
    const results = await Teacher.find({ subject: new RegExp(req.query.subject, 'i') });
    res.json({ results });
});

// Filter by min experience (GET /teachers/filter?minExp=6)
app.get('/teachers/filter', async (req, res) => {
    const minExp = Number(req.query.minExp) || 0;
    const experienced = await Teacher.find({ experience: { $gt: minExp } });
    res.json({ teachers: experienced });
});

app.listen(3000, () => console.log('Teacher DB API running on port 3000'));
