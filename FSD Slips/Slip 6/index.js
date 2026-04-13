const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Parse JSON requests for Postman

mongoose.connect('mongodb://127.0.0.1:27017/movies_db');

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    year: Number
});
const Movie = mongoose.model('Movie', movieSchema);

// CREATE
app.post('/movies', async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
});

// READ (All)
app.get('/movies', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

// READ (One)
app.get('/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
});

// UPDATE
app.put('/movies/:id', async (req, res) => {
    try {
        const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
app.delete('/movies/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: "Movie deleted" });
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Movie CRUD API running on http://localhost:3000'));
