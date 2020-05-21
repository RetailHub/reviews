const mariadb = require("mariadb/callback");
const mariadbConfig = require("./config.js");

const connection = mariadb.createConnection(mariadbConfig);

const getAllReviews = function(page, callback) {
  if (page === null) {
    var sql = `select * from reviews where page=${1}`;
  } else {
    var sql = `select * from reviews where page=${page}`;
  }
  connection.query(sql, function(err, results) {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const createReview = function(data, callback) {

  console.log(data);
  const {page, name, stars, date, review, image, title, avatar, foundThisHelpful} = data

  var insertStatement = `INSERT INTO reviews (page, name, stars, date, review, image, title, avatar, foundThisHelpful) VALUES ( ${page}, '${name}', ${stars}, '${date}', '${review}', '${image}', '${title}', ${avatar}, ${foundThisHelpful})`;

  // var insertStatement = 'INSERT INTO reviews (id) VALUES '

  connection.query(insertStatement, function(err, results) {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const deleteReview = function(id, callback) {
  console.log(id)
  if (id !== null) {
    var deleteStatement = `delete from reviews where id=${id}`;
  }
  connection.query(deleteStatement, function(err, results) {
    console.log(err);
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

const updateReview = function(data, callback) {
  console.log(data)
  const {id, field, value} = data
  if (id !== null) {
    var updateStatement = `UPDATE reviews SET ${field}='${value}' WHERE id=${id}`;
  }
  connection.query(updateStatement, function(err, results) {
    console.log(err);
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

module.exports.connection = connection;
module.exports.getAllReviews = getAllReviews;
module.exports.createReview = createReview;
module.exports.deleteReview = deleteReview;
module.exports.updateReview =  updateReview;