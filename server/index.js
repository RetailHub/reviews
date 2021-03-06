require('newrelic');
const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/postgresql");


const app = express();
const PORT = 3004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/api/allreviews/", (req, res) => {
  if (req._parsedOriginalUrl.search) {
    var arr = req._parsedOriginalUrl.search.split("=");
  }
    db.getReviews(arr[1], res);
});


app.post("/api/addreview/", (req, res) => {
  db.createReview(req.body, res);
});

// app.delete("/api/allreviews/", (req, res) => {
//   if (req.body.id) {
//     db.deleteReview(req.body.id, (err, data) => {
//       if (err) {
//         res.status(500).send("Something Broke!");
//       } else {
//         res.status(200).json(data);
//       }
//     });
//   }
// });

// app.patch("/api/patchreview/", (req, res) => {
//   db.updateReview(req.body, (err, data) => {
//     console.log('This is the error --------', err)
//     if (err) {
//       res.status(500).send("Something Broke!");
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });
