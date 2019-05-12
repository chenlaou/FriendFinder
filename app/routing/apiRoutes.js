console.log("API ROUTE CONNECTED");

var friendsData = require("../data/friends.js");

// GET ROUTE FOR JSON FRIENDS DATA
function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // POST ROUTE FOR FRIENDS API DATA
  // FUNCTIONS FOR SURVEY LOGIC
  app.post("/api/friends", function(req, res) {

   
    });
  }
     
// Export for use in main server.js file
module.exports = apiRoutes;
