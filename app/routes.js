

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// app.get('/recipes', function(req, res) {
	//  	console.log('req: '+req+' res: '+res)
	// });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load the single view file 
	});
	
};