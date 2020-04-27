// var friendsData = require('./data/friends.js');
// var surveyData = require('./data/survey-data.js');

var path = require('path');

module.exports = function (app) {
 
  app.get("/", function(request,result) {
    result.sendFile(path.join(__dirname, "../public/home.html"));
  })
  
  app.get("/survey", function(request, result) {
    result.sendFile(path.join(__dirname, "../public/survey.html"));
  })

  //display friends
  app.get("/api/:friends?", function (request, result) {
      var friendMatch = request.params.friends;
        if(friendMatch) {
          console.log(matfriendMatchched);
          for (var i = 0; i < friends.length; i++) {
            if (friendMatch === friends[i].routeName) {
              return result.json(friends[i]);
            }
                  }
                  result.send("No Match Found");
            } else {
              result.json(friendMatch); 
            };
    });

};

