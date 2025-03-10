# Module 12 Mini-Project: Movie Database

In this mini-project, you will build Rest API routes for creating, retrieving, and deleting movies from a PostgreSQL database.

## User Stories

* As a user, I want to create a new database.

* As a user, I want to store movie names and reviews in the database in two separate tables.

* As a user, I want to see a list of all movies.

* As a user, I want to be able to create and delete a movie.

* As a user, I want to return a list of all the reviews and the associated movie name.

## Acceptance Criteria

* It's done when `movie_db` is created and contains a `movies` and `reviews` table.

* It's done when `movie_db` has been seeded with data.

* It's done when a `GET` request to the `/api/movies` route renders a list of all movies.

* It's done when a `GET` request to the `/api/reviews` route renders a list of all reviews with movie data.

* It's done when a `POST` request to the `/api/movies` route successfully adds a movie when tested using Insomnia.

* It's done when a `DELETE` request to `/api/movies/:id` route deletes a route when tested using Insomnia.

---

## Assets

Design the following database schema that contains two tables:

![The database schema includes a movies table and a reviews table, linked by the movie id.](./assets/image_1.png)

---

## Notes

To test your routes you will use Insomnia. If you have not already downloaded it, you will need to visit the [Insomnia download page](https://insomnia.rest/download) and do so.

Refer to the documentation:

[Insomnia documentation on getting started](https://support.insomnia.rest/category/152-using-insomnia)

[Express.js documentation on routing](https://expressjs.com/en/guide/routing.html)

[PostgreSQL documentation on joins](https://www.postgresql.org/docs/current/tutorial-join.html)

[Documentation on pg package](https://node-postgres.com/)

## 💡 Hints

How can you link your `movies` and `reviews` tables?

How can you execute a query in an Express.js server using the npm `pg` package?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you add a route to update a review?

Use [Google](www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
