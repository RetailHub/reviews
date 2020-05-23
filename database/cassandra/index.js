var cassandra = require('cassandra-driver');
var client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
});

client.connect()
  .then(() => {
    console.log('Connected to cassandra database');
  })
  .then(() => {
    client.execute(
      'CREATE KEYSPACE IF NOT EXISTS reviewsData WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1}`)';
    )
  })
  .then(() => {
    client.execute(`DROP TABLE IF EXISTS reviewData.reviews`)
  })
  .then(() => {
    client.execute(CREATE TABLE IF NOT EXISTS reviewData.reviews (
      reviewId INT,
      page INT,
      name TEXT,
      stars INT,
      country TEXT,
      date TEXT,
      review TEXT,
      image TEXT,
      title TEXT,
      avatar INT,
      foundThisHelpful INT
    ))
  }.then(() => {
    console.log('table created')
  }))
  .then(() => {
    client.execute(COPY reviewsData.review (reviewId, page, name, stars, country, date, review, image, title, avatar, foundThisHelpful) FROM 'reviews.csv' WITH DELIMITER = '|' AND HEADER = TRUE);
  })
  .catch(() => {
    console.log('error creating cassandra table')
  })

  //COPY itemdetails.items (id, productName, producer, answeredQuestions, starPercentages, numberOfRatings, price, inStock, productInfo)