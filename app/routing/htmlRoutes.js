console.log("HTML ROUTES CONNECTED ")

var path = require('path');

module.exports = function(app) {

  // SURVEY ROUTE
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // HOME ROUTE TO HOME.HTML
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
