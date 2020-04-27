var friendsData = require('./data/friends.js');
var surveyData = require('./data/survey-data.js');

var path = require('path');

module.exports = function (app) {


  //GET Survey 
  app.get("/survey", function (request, result) {
    result.sendFile(path.join(__dirname + '/../public/survey.html'))
  });
  app.get("/api/:survey?", function (request, result) {
      var matched = request.params.survey;
      if (matched) {
        console.log(matched);
        for (var i = 0; i < friends.length; i++) {
          if (matched === survey[i].name) {
            return result.json(survey[i]);
          }
        }
        result.send("No Character Found");
      } else {
        result.json(surveyData);
      };
  });
  //POST Survey Data
  app.post("/api/survey", function (request, result) {
    return result.json(surveyData)
  })

  //GET Friends (get dragon)
  app.get("/api/friends", function (request, result) {
    return result.json(friendsData);
  });
  app.get("/api/:friends?", function (request, result) {
    var matched = request.params.friends;
    if (matched) {
      console.log(matched);
      for (var i = 0; i < friends.length; i++) {
        if (matched === friends[i].name) {
          return result.json(friends[i]);
        }
      }
      result.send("Dragon Not Found");
    } else {
      result.json(friendsData);
    };
  });
  // POST Friends Data (dragon data)
  app.post("/api/friends", function (request, result) {
    return result.json(friendsData)
  })
};

