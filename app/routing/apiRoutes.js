// api-routes will give the user the information that they should be seeing.
var friends = require("..data/friends");

module.exports = function (app) {
	app.get('/api/friends', function (req, res){
		res.json(friends);
	});


	app.post('/api/friends', function (req, res) {
		// 
	});

	app.post('/api/clear', function() {
		tableData = [];
		waitListData = [];
		console.log(tableData);
		console.log(waitListData);
	})
}