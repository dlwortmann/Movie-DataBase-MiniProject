DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

\c movie_db;

DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS reviews;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
  id INTEGER,
  movie_id INTEGER NOT NULL,
  review TEXT NOT NULL,
  FOREIGN KEY (movie_id)
  REFERENCES movies(id)
  ON DELETE SET NULL
);
