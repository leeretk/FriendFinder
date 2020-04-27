// REQUIREMENTS
// =========================================================
var bodyParser = require('body-parser');
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3007;

// SETUP EXPRESS
// =========================================================
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// LISTENER
// =========================================================
app.listen(PORT, function () {
  console.log("App listening on: http://localhost:" + PORT);
});