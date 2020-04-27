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
  scores: [3,5,2,3,1,3,1,1,5,2]
}, {
  routeName: "chinese-fireball",
  photo: "href=/2_chinese-fireball.jpg",
  scores: [5,3,4,1,5,2,5,1,2,2]
},
{
  routeName: "ukranian-ironbelly",
  photo: "href=/3_ukranian-ironbelly.jpg",
  scores: [3,2,2,2,2,2,3,1,5,4]
},
{
  routeName: "hungarian-horntail",
  photo: "href=/4_hungarian-horntail.jpg",
  scores: [3,2,2,2,2,2,3,1,5,4] 
},
{
  routeName: "smaug",
  photo: "href=/5_smaug.jpg",
  scores:  [5,5,5,5,5,2,4,2,2,3]
},
{
  routeName: "night-fury",
  photo: "href=/6_night-fury.jpg",
  scores: [2,2,1,2,3,5,4,5,1,5]
},
{
  routeName: "puff-magic-dragon",
  photo: "href=/7_puff-magic.jpg",
  scores: [1,1,2,3,3,4,2,4,5,3]
},
{
  routeName: "petes-dragon",
  photo: "href=/8_petes-dragon.jpg",
  scores:  [2,1,1,4,4,1,4,4,1,3]
},
{
  routeName: "drogon",
  photo: "href=/9_drogon.jpg",
  scores:  [4,5,4,1,1,1,2,4,3,4]
},
{
  routeName: "mushu",
  photo: "href=/10_mushu.jpg",
  scores:  [1,1,3,5,4,5,2,5,1,2]
}];

// Routes
// ===========================================================
app.get("/", function (request, result) {
  result.send("Welcome to the Dragon Friend Finder Page!");
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
})


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
