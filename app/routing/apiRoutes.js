// api-routes will give the user the information that they should be seeing.

module.exports = function (app) {
	app.get('/api/friends', function (req, res){
		res.json(friendsData);
	});


	app.post('/api/friends', function (req, res) {
		if(tableData.length < 5) {
			tableData.push(req.body);
			res.json(true);
		} else {
			waitlistData.push(req.body);
			res.json(false);
		}
	});

	app.post('/api/clear', function() {
		tableData = [];
		waitListData = [];
		console.log(tableData);
		console.log(waitListData);
	})
}