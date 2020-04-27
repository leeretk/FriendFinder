// Basic route that sends the user first to the AJAX Page

var path = require('path');

module.exports = function (app) {
  app.use('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/../public/home.html'));
  });
  app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
  app.get('/add', function (request, response) {
    response.sendFile(path.join(__dirname + '/../public/add.html'));
  });
  app.get('/search', function (request, response) {
    response.sendFile(path.join(__dirname + '/../public/search.html'));
  });
};
