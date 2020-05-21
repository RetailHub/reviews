const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database");

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
console.log(req._parsedOriginalUrl.search);
  }
   console.log('id server: ', arr[1]);
  if (arr) {
    db.getAllReviews(arr[1], (err, data) => {
      if (err) {
        res.status(500).send("Something Broke!");
      } else {
        res.json(data);
      }
    });
  } else {
    db.getAllReviews(null, (err, data) => {
      if (err) {
        res.status(500).send("Something Broke!");
      } else {
        res.json(data);
      }
    });
  }
});

app.delete("/api/allreviews/", (req, res) => {
  if (req.body.id) {
    db.deleteReview(req.body.id, (err, data) => {
      if (err) {
        res.status(500).send("Something Broke!");
      } else {
        res.status(200).json(data);
      }
    });
  }
});

app.post("/api/addReview/", (req, res) => {
  db.createReview(req.body, (err, data) => {
    console.log('This is the error --------', err)
    if (err) {
      res.status(500).send("Something Broke!");
    } else {
      res.status(200).json(data);
    }
  });
});

app.patch("/api/patchreview/", (req, res) => {
  db.updateReview(req.body, (err, data) => {
    console.log('This is the error --------', err)
    if (err) {
      res.status(500).send("Something Broke!");
    } else {
      res.status(200).json(data);
    }
  });
});
