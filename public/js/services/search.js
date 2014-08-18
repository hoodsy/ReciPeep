angular.module('searchService', [])

.factory('searchAPI', ['$http', function($http) {
	
	return {
		getReq: function() { 

			$http.defaults.headers.get = {
				'X-Yummly-App-ID': '7a23d737',
				'X-Yummly-App-Key': '89f60be970861ad5df60ba4a91dffb03'
			}

			$http.get('http://api.yummly.com/v1/api/recipes?_app_id=7a23d737&_app_key=89f60be970861ad5df60ba4a91dffb03&q=chicken+parmesan')
		.success(function() {
			alert('GET SUCCESS')
		})
		.error(function() {
			alert('GET FAILURE')
		});
	},

	 peep: function(recipe){
		console.log(recipe)
	}
}

}]);
