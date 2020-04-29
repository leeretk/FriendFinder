var friendsData = require('../data/friends.js');

var path = require('path');

module.exports = function (app) {
 
  //================== NAVIGATION =====================//
  app.get("/", function(request,result) {
    result.sendFile(path.join(__dirname, "../public/home.html"));
  })
  app.get("/survey", function(request, result) {
    result.sendFile(path.join(__dirname, "../public/survey.html"));
  })
  //================== END HTML NAVIGATION ===============//

  //================== FRIENDS (DRAGONS) API DATA ========//
    app.get("/api/friends", function (request, result) {
      return result.json(friendsData);
    });
    
    app.post("/api/friends", function ({body}, res) {
    
        console.log(body.scores);
        
        var surveyInfo = body;
        
        console.log(body);
        console.log(surveyInfo.scores);

    // parsInt for scores
    for (var i=0; i < surveyInfo.scores.length; i++) {
        surveyInfo.scores[i] = parseInt(surveyInfo.scores[i]);
    }

    var matchIndex = 0;
    var minDifference = 20; 

    for(var i = 0; i < friends.length; i++) {

      var totalDifference = 0;

      for(var b = 0; b < friends[i].scores.length; b++) {
        var difference = Math.abs(surveyInfo.scores[b] - friends[i].scores[b])
        totalDifference += difference;
      }
      if(totalDifference < minDifference) {
        matchIndex = i;  //keeping track of the friend winning so far.
        minDifference = totalDifference;  //keep track of the smallest diff between user and friend list.
      }
    }
    friends.push(surveyInfo);
    console.log(friends[matchIndex]);
    response.json(friends[matchIndex]);
  });
  //================== END SURVEY DATA =====================//

};

