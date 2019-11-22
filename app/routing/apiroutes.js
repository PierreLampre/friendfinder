var friends = require("../data/friends");

module.exports = function (app) {

  //The Gets

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //The Posts


  app.post("/api/friends", function (req, res) {
    console.log(req.body);
    

    let user = req.body

    //makes scores integers

    for (let i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    console.log(user.scores);

    //does match making math

    let friendIndex = 0; 
    let minDiff = 40;

    for (let i = 0; i < friends.length; i++) {
      let totesDiff = 0;
      for (let c = 0; c < friends[i].scores.length; c++) {
        let diff = Math.abs(user.scores[c] - friends[i].scores[c]);
          totesDiff += diff;
      }

    //defines match

    if(totesDiff < minDiff) {
      friendIndex = i;
      minDiff = totesDiff;
    }
      
    }
      
    //...and now that thats done

    friends.push(user);
    res.json(friends[friendIndex]);
    
  });

}