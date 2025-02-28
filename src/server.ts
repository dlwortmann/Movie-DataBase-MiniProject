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
  try {
    pool.query(`SELECT * FROM movies`, (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
       } else if (result) {
        console.log("Movies table selected")
        res.json(result)
    }
  })
  } catch {
    res.status(500).send('Error getting database')
  }
});

app.post('/api/add-movie', (_req, res) => {
  try {
    pool.query(`INSERT INTO movies (id, movie_name) VALUES (6, "Moby Dick")`, (err: Error, result: QueryResult) => {
      if (err) {
        console.log(err);
       } else if (result) {
        console.log("Success!")
        res.status(200).send('Success')
  }
})
} catch {
  res.status(500).send('Error adding movie')
}
})


 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
 });
