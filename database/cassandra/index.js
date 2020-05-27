const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
});

client.connect()
  .then(() => {
    console.log('Connected to cassandra database');
  })
  .then(() => {
    client.execute(
      `CREATE KEYSPACE IF NOT EXISTS reviewData WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1}`
      ).then(() => {console.log('KEYSPACE CREATED')})
      .then(() => {
        client.execute(`DROP TABLE IF EXISTS reviewData.reviews`).then(() => {console.log('TABLE DROPPED')})
        .then(() => {
          client.execute(`CREATE TABLE IF NOT EXISTS reviewData.reviews (
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
            foundThisHelpful INT,
            Primary Key (page, reviewId)
          )WITH CLUSTERING ORDER BY (reviewId DESC) AND
          compaction = { 'class' :  'LeveledCompactionStrategy'  }`).then(() => {
            console.log('table created')
         })
      })
    })
  })
  .catch((err) => {
    console.log('error creating cassandra table', err)
  }); 