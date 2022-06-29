require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db.js");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/entries', (req, res) => {
  console.log('server index got get request');
  db.Entry.find().then((data) => {
    // console.log('server index data from DB', data);
    res.end(JSON.stringify(data));
  });

})

app.post('/entries', (req, res) => {
  console.log('server index got post request', req.body);
  var newDbEntry = new db.Entry({term: req.body.term, def: req.body.def});
  newDbEntry.save();
  res.end();
})

app.delete('/entries', (req, res) => {
  console.log('server index got delete request', req.body.term);
  // db.Entry.remove({_id: `ObjectId("${req.body._id}")`})
  db.Entry.deleteOne({_id: req.body._id}).then(()=>{})
  res.end()
})
//get request should pull out all entries from the db and return them as an array of entry objects
//post request should take in a entry object in the request, create a Entry document and .save() it to the databse
//delete request should take in an ID, then use db.deleteOne and match on the ID



/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
