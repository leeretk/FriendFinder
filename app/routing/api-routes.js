
var friends = require('../data/friends.js');

var path = require('path');

module.exports = function (app) {
  //================== FRIENDS (DRAGONS) API DATA ================//
      app.get("/", function (request,response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
      });
      app.get("/survey", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
      });
  //================== FRIENDS (GET / POST) API DATA ================//
      app.get("/api/friends", function (request,response) {
        return response.json(friends);
      });
      app.post("/api/friends", function (request,response) {
          return response.json(friends);
      });
  //========== FRIENDS (POST SURVEY RESPONSE ) API DATA ============//

      app.post("/api/friends", function ({body}, response) {
          
        var surveyInfo = body;
        
        console.log(body);
        console.log(body.scores);
        console.log(surveyInfo.scores);

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

  //================== END SURVEY DATA =====================//
  // });
})
};

