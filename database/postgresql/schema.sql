DROP DATABASE IF EXISTS sdcreviews;

CREATE DATABASE sdcreviews;

\c sdcreviews;

CREATE TABLE reviews (
  reviewId int PRIMARY KEY,
  page int,
  name text,
  stars int,
  country text,
  date text,
  review text,
  image text,
  title text,
  avatar int,
  foundThisHelpful int
);

CREATE INDEX ON reviews (page);

--  Execute this file from the command line by typing:
--    mysql -u <USER> < schema.sql
--    OR
--    mysql -u <USER> -p < schema.sql