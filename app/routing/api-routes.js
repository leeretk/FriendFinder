var friendsData = require('../data/friends-data.js');
var characterData = require('../data/character-data.js');
var searchData = require('../data/search-data.js');
var surveyData = require('../data/survey-data.js');

module.exports = function (app) {

  //Display a character
  app.get("/api/characters", function (request, result) {
    return result.json(characterData);
  });

  app.get("/api/:characters?", function (request, result) {
    var matched = request.params.characters;
    if (matched) {
      console.log(matched);
      for (var i = 0; i < characters.length; i++) {
        if (matched === characters[i].name) {
          return result.json(characters[i]);
        }
      }
      result.send("No Character Found");
    } else {
      result.json(characterData);
    };
  });

  //Display friends
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
      result.send("No Character Found");
    } else {
      result.json(friendsData);
    };
  });
  app.post("/api/friends", function (request, result) {
    return result.json(friendsData)
  });


  //Display Survey Data
  app.get("/api/survey", function (request, result) {
    return result.json(surveyData);
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
  app.post("/api/survey", function (request, result) {
    return result.json(surveyData)
  })

  app.post("/api/survey", function (request, result) {
    return result.json(surveyData)
  })

//Display Search Data
    app.get("/api/search", function (request, result) {
      return result.json(searchData);
    });
    app.get("/api/:search?", function (request, result) {
      var matched = request.params.search;
      if (matched) {
        console.log(matched);
        for (var i = 0; i < friends.length; i++) {
          if (matched === search[i].name) {
            return result.json(search[i]);
          }
        }
        result.send("No Character Found");
      } else {
        result.json(searchData);
      };
    });
    app.post("/api/search", function (request, result) {
      return result.json(searchData)
    });

    app.post("/api/search", function (request, result) {
      return result.json(searchData)
    });
};
