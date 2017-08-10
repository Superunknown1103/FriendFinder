// api-routes will give the user the information that they should be seeing.
var friends = require("..data/friends");

module.exports = function (app) {
	app.get('/api/friends', function(req, res){
	//res.send("Welcome to the Friend Finder!")
	res.sendFile(path.join(__dirname + '/.html'));
});

app.post('api/friends', function(req, res){
	//res.send("Welcome to the Friend Finder!")
	res.sendFile(path.join(__dirname + '/home.html'));
});
}