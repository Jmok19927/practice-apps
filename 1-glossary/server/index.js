require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

var port = process.env.PORT || 8000;

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
