const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'B-Hamp',
  password: '',
  port: 3004,
})

pool.connect()
  .then(() => {
    console.log('connected to postgres database')
  })
  .then(() => {
    pool.query('COPY reviews FROM \'reviews.csv' DELIMITER \',\' CSV HEADER;')
  })
  .then(() => {
    console.log('finished seeding')
  })
  .catch((err) => {
    if (err) {
      console.error(err)
    }
  })

pool.end().then(() => console.log('pool has ended'))