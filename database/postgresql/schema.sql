DROP DATABASE IF EXISTS reviews;

CREATE DATABASE sdcreviews;

\c sdcreviews;

CREATE TABLE reviews (
  reviewId int PRIMARY KEY,
  page int,
  name varchar(50),
  stars int,
  country varchar(50),
  date varchar(50),
  review varchar(500),
  image varchar(250),
  title varchar(50),
  avatar int,
  foundThisHelpful int
);

--  Execute this file from the command line by typing:
--    mysql -u <USER> < schema.sql
--    OR
--    mysql -u <USER> -p < schema.sql