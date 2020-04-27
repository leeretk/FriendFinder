// Require/import the HTTP module
var bodyParser = require('body-parser');
var express = require("express");
var path = require("path");

// Define a port to listen for incoming requests
var app = express();
var PORT = 3005;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// LISTENER
// =========================================================
app.listen(PORT, function () {
  console.log("App listening on: http://localhost:" + PORT);
});

// // POST ROUTES FRIEND DATA
// // ===========================================================
// // Find out what kind of dragon you are by taking the survey - takes in JSON input

// app.post("/api/new", function(request, result) {
//   var newCharacter = request.body;
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g,"").toLowerCase();
//   console.log(newCharacter);
//   characters.push(newCharacter);
//   result.json(newCharacter);
// });

