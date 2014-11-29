var mongoose = require('mongoose');

module.exports = mongoose.model('search', {
	text : String
});