
var friendsData = require('../data/friends.js');

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
    //gets exsiting data  
      app.get("/api/friends", function (request,response) {
        return response.json(friendsData);
      });
      //post handles incoming data
      app.post("/api/friends", function (request,response) {
         
        
          // Parse new friend input to get integers (AJAX post seemed to make the numbers strings)
          var newFriend = {
            name: req.body.name,
            email: req.body.email,
            scores: [],
            totalScore: [],
          };
          var scoresArray = [];
          for(var i=0; i < req.body.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]) )
          }
          newFriend.scores = scoresArray;

          console.log(newFriend);

        var totalScore = Math.abs(surveyInfo.scores)

        var surveyInfo = body;      
        var matchIndex = 0;
        var minDifference = 45;
        
        console.log(surveyInfo.scores);
        console.log("match index: " + matchIndex)
        console.log(newFriend);
        

        for(var i = 0; i < friends.length; i++) {

          var totalDifference = 0;
          console.log("difference: " + totalDifference)

          console.log(friends.length);

          for(var b = 0; b < friends[i].scores.length; b++) {
            var difference = Math.abs(surveyInfo.scores[b] - friends[i].scores[b])
            totalDifference += difference;
          }
          if(totalDifference < minDifference) {
            matchIndex = i; 
            minDifference = totalDifference; 
          }
        }
        friends.push(surveyInfo);
        console.log(friends[matchIndex]);
        response.json(friends[matchIndex]);

  //================== END SURVEY DATA =====================//
  // });
})
};

