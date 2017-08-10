// html routes are to help direct the user
// when they click on a link, the router will understand what page to give them.

var path = require('path');

module.exports = function (app) {
	// when the user hits find your loser, display survey
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + 
			'/../public/survey.html'));
	});

	// use will set the default homepage rather than get which is based on user selection.
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}