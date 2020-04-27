// Require/import the HTTP module
var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");

// Define a port to listen for incoming requests
var app = express();
var PORT = 3005;


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'applicaton/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DRAGON DATA
// ===========================================================
var characters = [
{
  routeName: "norwegianridgeback",
  name: "norwegian-ridgeback",
  photo: "href=/1_norwegian-ridgeback.jpg",
  scores: [3,5,2,3,1,3,1,1,5,2]
}, {
  routeName: "chinesefireball",
  name: "chinese-fireball",
  photo: "href=/2_chinese-fireball.jpg",
  scores: [5,3,4,1,5,2,5,1,2,2]
},
{
  routeName: "ukranianironbelly",
  name: "ukranian-ironbelly",
  photo: "href=/3_ukranian-ironbelly.jpg",
  scores: [3,2,2,2,2,2,3,1,5,4]
},
{
  routeName: "hungarianhorntail",
  name: "hungarian-horntail",
  photo: "href=/4_hungarian-horntail.jpg",
  scores: [3,2,2,2,2,2,3,1,5,4] 
},
{
  routeName: "smaug",
  name: "smaug",
  photo: "href=/5_smaug.jpg",
  scores:  [5,5,5,5,5,2,4,2,2,3]
},
{
  routeName: "nightfury",
  name: "night-fury",
  photo: "href=/6_night-fury.jpg",
  scores: [2,2,1,2,3,5,4,5,1,5]
},
{
  routeName: "puffmagicdragon",
  name: "puff-magic-dragon",
  photo: "href=/7_puff-magic.jpg",
  scores: [1,1,2,3,3,4,2,4,5,3]
},
{
  routeName: "petesdragon",
  name: "petes-dragon",
  photo: "href=/8_petes-dragon.jpg",
  scores:  [2,1,1,4,4,1,4,4,1,3]
},
{
  routeName: "drogon",
  name: "drogon",
  photo: "href=/9_drogon.jpg",
  scores:  [4,5,4,1,1,1,2,4,3,4]
},
{
  routeName: "mushu",
  name: "mushu",
  photo: "href=/10_mushu.jpg",
  scores:  [1,1,3,5,4,5,2,5,1,2]
}];

// GET ROUTES
// ===========================================================
app.get("/", function (request, result) {
  result.sendFile(path.join(__dirname, "home.html"));
  // result.send("Welcome to the Dragon Friend Finder Page!");
});

app.get("/", function (request, result) {
  result.sendFile(path.join(__dirname, "survey.html"));
  // result.send("Welcome to the Dragon Friend Finder Page!");
});


// Displays all characters
app.get("/api/characters", function (request, result) {
  return result.json(characters);
});

//Display a character
app.get("/api/:characters?", function (request, result) {
    
    var matched = request.params.characters;

    if(matched) {

      console.log(matched);

      for (var i = 0; i < characters.length; i++) {
        if (matched === characters[i].name) {
          return result.json(characters[i]);
        }
              }
              result.send("No Character Found");
        } else {
          result.json(characters); 
        };
});


// POST ROUTES FRIEND DATA
// ===========================================================
// Find out what kind of dragon you are by taking the survey - takes in JSON input

app.post("/api/new", function(request, result) {
  var newCharacter = request.body;
  newCharacter.routeName = newCharacter.name.replace(/\s+/g,"").toLowerCase();
  console.log(newCharacter);
  characters.push(newCharacter);
  result.json(newCharacter);
});



// LISTENER
// =========================================================
app.listen(PORT, function () {
  console.log("App listening on: http://localhost:" + PORT);
});
