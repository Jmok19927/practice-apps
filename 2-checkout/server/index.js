require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const bodyParser = require('body-parser');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(bodyParser.json())

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post("/user", (req, res) => {
  db.queryAsync(`INSERT INTO Users (usercookie) VALUES ("${req.session_id}") ON DUPLICATE KEY UPDATE id=id;`).then(() => {
    console.log('added user: ', req.session_id)
  }).catch();
})

app.get("/info", (req, res) => {
  var userId;
  db.queryAsync(`SELECT id FROM Users WHERE "${req.session_id}"=usercookie`).then((data) => {
    userId = data[0][0].id;
  }).then(()=> {
    db.queryAsync(`SELECT * FROM Account, Address, Billing WHERE Account.userid=${userId} `).then((data) => {
      console.log('get data:', data[0][0])
      res.end(JSON.stringify(data[0][0]))
    })
  })

})

app.post("/info", (req, res) => {
  var postType = req.body.type;
  var userId;
  db.queryAsync(`SELECT id FROM Users WHERE "${req.session_id}"=usercookie`).then((data) => {
    userId = data[0][0].id;
  }).then(()=> {
    if (postType === 'Account') {
      db.queryAsync(`INSERT INTO Account (name, email, password, userid) VALUES (
        "${req.body.name}",
        "${req.body.email}",
        "${req.body.password}",
        ${userId} )
        ON DUPLICATE KEY UPDATE name="${req.body.name}", email="${req.body.email}", password="${req.body.password}"`)
    } else if (postType === 'Address') {
      db.queryAsync(`INSERT INTO Address (line1, line2, city, state, ZIP, phonenumber, userid) VALUES (
        "${req.body.line1}",
        "${req.body.line2}",
        "${req.body.city}",
        "${req.body.state}",
        "${req.body.zip}",
        "${req.body.phoneNumber}",
         ${userId} ) ON DUPLICATE KEY UPDATE
         line1="${req.body.line1}",
         line2="${req.body.line2}",
         city="${req.body.city}",
         state="${req.body.state}",
         ZIP="${req.body.zip}",
         phonenumber="${req.body.phoneNumber}"`)
    } else if (postType === 'Billing') {
      db.queryAsync(`INSERT INTO Billing (number, expirydate, CVV, billingZIP, userid) VALUES (
        "${req.body.creditCard}",
        "${req.body.expiry}",
        "${req.body.CVV}",
        "${req.body.billingZIP}",
         ${userId} ) ON DUPLICATE KEY UPDATE
        number="${req.body.creditCard}",
        expirydate="${req.body.expiry}",
        CVV="${req.body.CVV}",
        billingZIP="${req.body.billingZIP}"`)
    }
  }).catch();



  console.log(req.body)
  // if (postType === "Account") {
  //   db.queryAsync(`INSERT INTO Users (usercookie) VALUES ("${req.session_id}") ON DUPLICATE KEY UPDATE id=id;`).then(() => {
  //     console.log('added user: ', req.session_id)
  //   })
  // }
  res.end();
})
/****
 *
 *
 * Other routes here....
 *
 *
 */

var port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
