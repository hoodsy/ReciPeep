var search = require('./models/search');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	

	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		res.sendfile('./public/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

};