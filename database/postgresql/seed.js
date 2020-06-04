  const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'bhamp',
  password: 'bhamp',
  database: 'sdcreviews',
  port: 5432,
})

pool.connect()
  .then(() => {
    console.log('connected to postgres database')
  })
  .then(() => {
    pool.query(`COPY reviews FROM '/Users/bhamp/hrr45/sdc/reviews/data/reviews.csv' DELIMITER '|' CSV HEADER;`)
    .then(() => {
      console.log('finished seeding')
    })
  })
  .catch((err) => {
    if (err) {
      console.error(err)
    }
  })

  