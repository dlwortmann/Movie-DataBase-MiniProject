import express from 'express';
import { pool, connectToDb } from './connection.js';
await connectToDb();
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/api/movies', (_req, res) => {
    try {
        pool.query(`SELECT * FROM movies`, (err, result) => {
            if (err) {
                console.log(err);
            }
            else if (result.rows) {
                console.log('Movies table selected');
                res.json(result.rows);
            }
        });
    }
    catch {
        res.status(500).send('Error getting database');
    }
});
app.get('/api/movie-reviews', (_req, res) => {
    try {
        pool.query(`SELECT * FROM reviews`, (err, result) => {
            if (err) {
                console.log(err);
            }
            else if (result) {
                console.log("Movies table selected");
                res.json(result.rows);
            }
        });
    }
    catch {
        res.status(500).send('Error getting database');
    }
});
app.post('/api/add-movie', (req, res) => {
    try {
        pool.query(`INSERT INTO movies (movie_name) VALUES ($1)`, [req.body.movie_name], (err, result) => {
            if (err) {
                console.log(err);
            }
            else if (result.rows) {
                console.log("Success!");
                res.status(200).send('Success');
            }
        });
    }
    catch {
        res.status(500).send('Error adding movie');
    }
});
app.delete('/api/movie/:id', (req, res) => {
    const deletedRow = req.params.id;
    pool.query(`DELETE FROM movies WHERE id = $1`, [deletedRow], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`${result.rowCount} row deleted.`);
            res.status(204).json();
        }
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
