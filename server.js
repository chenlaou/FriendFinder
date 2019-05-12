var express = require('express');
var path = require('path');


var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parsing and static middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


apiRoutes(app); 
htmlRoutes(app);

// Start the server on the port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
