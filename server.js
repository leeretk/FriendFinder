// Require/import the HTTP module
var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");

// Define a port to listen for incoming requests
var app = express();
var PORT = 3005;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// ===========================================================
var characters = [
{
  routeName: "norwegian-ridgeback",
  photo: "href=/1_norwegian-ridgeback.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}, {
  routeName: "chinese-fireball",
  photo: "href=/2_chinese-fireball.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "ukranian-ironbelly",
  photo: "href=/3_ukranian-ironbelly.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "hungarian-horntail",
  photo: "href=/4_hungarian-horntail.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "smaug",
  photo: "href=/5_smaug.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "night-fury",
  photo: "href=/6_night-fury.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "puff-magic-dragon",
  photo: "href=/7_puff-magic.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "petes-dragon",
  photo: "href=/8_petes-dragon.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "drogon",
  photo: "href=/9_drogon.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{
  routeName: "mushu",
  photo: "href=/10_mushu.jpg",
  scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}];

// Routes
// ===========================================================
app.get("/", function (request, result) {
  result.send("Welcome to the Dragon Friend Finder Page!");
});

//display characters
app.get("/api/:characters?", function (request, result) {
    
    var matched = request.params.characters;

    if(matched) {

      console.log(matched);

      for (var i = 0; i < characters.length; i++) {
        if (matched === characters[i].routeName) {
          return result.json(characters[i]);
        }
              }
              result.send("No Character Found");
        } else {
          result.json(characters); 
        };
});

// Starts the server to begin listening
// =========================================================
app.listen(PORT, function () {
  console.log("App listening on: http://localhost:" + PORT);
});
