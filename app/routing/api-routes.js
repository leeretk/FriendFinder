var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {
 
  app.get("/", function(request,response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  })
  app.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
  })

  //================== FRIENDS (DRAGONS) API DATA ========//
    app.get("/api/friends", function (request, response) {
        response.json(friendsData);
        } 
    );
    
    app.post("/api/friends", function (request, response) {
                
      var surveyInfo = request.body;

      for (var i=0; i < surveyInfo.scores.length; i++) {
                surveyInfo.scores[i] = parseInt(surveyInfo.scores[i]);
            };
              var matchIndex = 0;
              var minDifference = 20; 

              for(var i = 0; i < friendsData.length; i++) {

              var totalDifference = 0;

              for(var b = 0; b < friendsData[i].scores.length; b++) {

                var difference = Math.abs(surveyInfo.scores[b] - friendsData[i].scores[b])
                totalDifference += difference;
              }
              console.log(surveyInfo.body);
              console.log(surveyInfo.scores);

              if(totalDifference < minDifference) {
                matchIndex = i;  //keeping track of the friend winning so far.
                minDifference = totalDifference;  //keep track of the smallest diff between user and friend list.
              }
              }
    friendsData.push(surveyInfo);
    console.log(friendsData[matchIndex]);
    response.json(friendsData[matchIndex]);
  });
  //================== END SURVEY DATA =====================//

  app.post("/api/clear", function(request, response) {
    surveyInfo.length = 0;
    response.json({ ok: true });
  });

};

