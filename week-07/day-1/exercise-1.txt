Find the titles of all movies directed by Steven Spielberg.

```
SELECT title from Movie WHERE director = "Steven Spielberg";
```

Find all years that have a movie that received a rating of 4 or 5, and sort them in increasing order.

```
SELECT DISTINCT year from Movie INNER JOIN Rating ON (Movie.mID = Rating.mID) WHERE stars BETWEEN 4 AND 5 ORDER BY year ASC;
```

Find the titles of all movies that have no ratings.

```
SELECT title from Movie LEFT JOIN Rating ON (Movie.mID = Rating.mID) WHERE stars IS NULL;
```

Some reviewers didn't provide a date with their rating. Find the names of all reviewers who have ratings with a NULL value for the date.

```
SELECT name from Reviewer LEFT JOIN Rating ON (Reviewer.rID = Rating.rID) WHERE ratingDate IS NULL;
```

Write a query to return the ratings data in a more readable format: reviewer name, movie title, stars, and ratingDate. Also, sort the data, first by reviewer name, then by movie title, and lastly by number of stars.

```
SELECT  name, title, stars, ratingDate
FROM Movie, Rating, Reviewer
WHERE (Movie.mID = Rating.mID AND Rating.rID = Reviewer.rID)
ORDER BY name, title, stars;
```

Find the names of all reviewers who rated Gone with the Wind.

```
SELECT DISTINCT name 
FROM Reviewer
INNER JOIN Rating USING(rId)
INNER JOIN Movie USING(mId)
WHERE title = "Gone with the Wind";
```

For any rating where the reviewer is the same as the director of the movie, return the reviewer name, movie title, and number of stars.

```
SELECT name, title, stars
FROM Reviewer, Movie, Rating
WHERE (Movie.mID = Rating.mID AND Rating.rID = Reviewer.rID)
AND Reviewer.name = Movie.director;
```