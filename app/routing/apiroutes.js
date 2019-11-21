var friends = require("../data/friends");

module.exports = function (app) {

  //The Gets

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //The Posts

  let userScores = [];

  app.post("/api/friends", function (req, res) {
    console.log(req.body);
    res.json(true);
    let scores = req.body.scores
    for (let i = 0; i < scores.length; i++) {
      scores[i] = parseInt(scores[i]);
    }
    console.log(scores); 

    
      

    
  });

}