// const { Pool } = require('pg');

// const pool = new Pool({
//   host: 'localhost',
//   user: 'bhamp',
//   password: '',
//   database: 'sdcreviews',
//   port: 5432,
// })

var bluebird = require('bluebird');

const options = {
    promiseLib: bluebird,
  };

var pgp = require('pg-promise')(options)

const connection = {
  host: 'localhost',
  user: 'bhamp',
  password: '',
  database: 'sdcreviews',
  port: 5432,
}

var db = pgp(connection)

module.exports = {
    getReviews(req, res) {
        //console.log('!!!!!!!!!!!!!!!!!!', req)
        db.many(`SELECT * FROM reviews WHERE page=${req}`)
            .then((results) => {
            res.status(200).json(results);
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },

    createReview(data, res) {
        const {reviewid, page, name, stars, country, date, review, image, title, avatar, foundthishelpful} = data;
        console.log(country);
        var insertStatement = `INSERT INTO reviews (reviewid, page, name, stars, country, date, review, image, title, avatar, foundthishelpful) VALUES ( ${reviewid}, ${page}, '${name}', ${stars}, '${country}', '${date}', '${review}', '${image}', '${title}', ${avatar}, ${foundthishelpful})`;
        db.none(insertStatement)
            .then(() => {
                res.status(200).send('Data Stored');
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json(err)});
    }

}
  
//   module.exports.deleteReview = function(id, callback) {
//     console.log(id)
//     if (id !== null) {
//       var deleteStatement = `delete from reviews where id=${id}`;
//     }
//     connection.query(deleteStatement, function(err, results) {
//       console.log(err);
//       if (err) {
//         callback(err, null);
//       }
//       callback(null, results);
//     });
//   };
  
//   module.exports.updateReview = function(data, callback) {
//     console.log(data)
//     const {id, field, value} = data
//     if (id !== null) {
//       var updateStatement = `UPDATE reviews SET ${field}='${value}' WHERE id=${id}`;
//     }
//     connection.query(updateStatement, function(err, results) {
//       console.log(err);
//       if (err) {
//         callback(err, null);
//       }
//       callback(null, results);
//     });
//   };

//   module.exports.deleteReview = deleteReview;
//   module.exports.updateReview =  updateReview;