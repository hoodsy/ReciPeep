angular.module('YummlyAPI', [])

.factory('yummly', function($http, $cacheFactory) {
	var appID = '_app_id=7a23d737';
	var appKey = '&_app_key=89f60be970861ad5df60ba4a91dffb03';
	var baseURL = 'http://api.yummly.com/v1/api/';
	var cache = $cacheFactory('yummlyCache');
	return {
		searchData: {},
		getData: [],
		recipe: "",
		meal: [],

		searchRec: function(recipe) { 
			recipe = recipe.replace(' ', '+')
			var self = this;

			if (cache.get(recipe) != undefined){
				self.searchData = cache.get(recipe);
				console.log('Cached searchData: ')
				console.log(cache.get(recipe))
			}
			else {
				$http.jsonp(baseURL+'recipes?'+appID+appKey+'&q='+recipe+'&callback=JSON_CALLBACK', {cache: true})
				.success(function(data, status, headers, config) {
					self.searchData = data;
					cache.put(recipe, data);
					console.log('Search Response: ');
					console.log(data);
			})
				.error(function(data, status, headers, config) {
					alert('GET FAILURE ' + status)
			});
		}
	},
		getRec: function(recipeID) {
			var self = this;

			if (cache.get(recipeID) != undefined){
				self.getData.unshift(cache.get(recipeID))
				self.getData.pop()
				console.log('Cached getData: ')
				console.log(cache.get(recipeID))
			}
			else{
				$http.jsonp(baseURL+'recipe/'+recipeID+'?'+appID+appKey+'&callback=JSON_CALLBACK', {cache: true})
				.success(function(data, status, headers, config) {
					self.getData.unshift(data);
					cache.put(recipeID, data);
					console.log('Get Response: ');
					console.log(data);
			})
				.error(function(data, status, headers, config) {
					alert('GET FAILURE ' + status)
			});
		}
	}
}
})