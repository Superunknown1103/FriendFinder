// api-routes will give the user the information that they should be seeing.
var friends = require("../data/friends.js");

module.exports = function (app) {
	app.get('/api/friends', function(req, res){
	// res.send("Welcome to the Friend Finder!")
	res.json(friends);
});

// app.post('/api/friends', function(req, res){
// 	// res.send("Welcome to the Friend Finder!")
// 	res.json(friends);
//
// 	console.log(friends)
// });


app.post("/api/friends", function(req, res) {
	var request = req.body;
	console.log(request);

var friendScore = 50;
var bestFriend;
var tempFriendScore = 0;

for (var i=0; i < friends.length; i++) {
	for (var j=0; j < friends[i].scores.length; j++) {
		var temp = Math.abs(friends[i].scores[j] - request.scores[j]);
		tempFriendScore = tempFriendScore + temp;
		if (tempFriendScore < friendScore) {
			friendScore = tempFriendScore;
			bestFriend = friends[i];
			console.log("Best friend:")
			console.log(bestFriend);
		}
	}
	console.log("Friend Score:")
	console.log(tempFriendScore);
	tempFriendScore = 0;
}
friendScore = 50;
friends.push(request);
res.json(bestFriend);
console.log("Array of all friends:")
console.log(friends);
});


app.post("/api/clear", function() {
  friends = [];
});
};
