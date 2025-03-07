import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/api/movies', (_req, res) => {
    pool.query(`SELECT * FROM movies`, (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to read database."});
       } else {
        res.status(200).json ({
          movies: result.rows
        })
    }
  })
});

app.get('/api/reviews', (_req, res) => {
    pool.query(`SELECT * FROM reviews`, (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to get movie reviews. "})
       } else {
        res.status(200).json({
          reviews: result.rows
        })
      }
   })
});
//parameterized queries
app.post('/api/movies', (req, res) => {
    pool.query(`INSERT INTO movies (movie_name) VALUES ($1)`, [req.body.movie_name], (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error adding movie" })
       } else {
        res.status(201).json ({
        success: result.rows
        })
     }
    })
});

app.delete('/api/movies/:id', (req, res) => {
  const deletedRow = req.params.id
  pool.query(`DELETE FROM movies WHERE id = $1`, [deletedRow],
    (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error deleting movie. "})
      } else {
        console.log(`${result.rowCount} row(s) deleted.`)
        res.status(204).json() 
      }
    }
  )
});


 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
 });
