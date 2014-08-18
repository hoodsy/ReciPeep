angular.module('HomeCtrl', ['searchService', 'ngSanitize'])

.factory('yummly', ['$http', function($http) {
	var appID = '_app_id=7a23d737';
	var appKey = '&_app_key=89f60be970861ad5df60ba4a91dffb03';
	var baseURL = 'http://api.yummly.com/v1/api/';
	return {
		searchData: {},
		getData: [],
		recipe: "",
		details: {show: 0, recipe: {}},
		searchRec: function(recipe) { 
			recipe = recipe.replace(' ', '+')
			var self = this;
			$http.jsonp(baseURL+'recipes?'+appID+appKey+'&q='+recipe+'&callback=JSON_CALLBACK')
			.success(function(data, status, headers, config) {
				self.searchData = data;
				console.log(data);
		})
			.error(function(data, status, headers, config) {
				alert('GET FAILURE ' + status)
		});
	},
		getRec: function(recipeID) {
			var self = this;
			$http.jsonp(baseURL+'recipe/'+recipeID+'?'+appID+appKey+'&callback=JSON_CALLBACK')
			.success(function(data, status, headers, config) {
				self.getData.push(data);
				console.log(data);
		})
			.error(function(data, status, headers, config) {
				alert('GET FAILURE ' + status)
		});
		}
}
}])

.controller('landingPage', ['$scope', 'yummly', function($scope, yummly){
	$scope.images = [
		{name: 'COOK', set: 'on', url: 'https://s3.amazonaws.com/ReciPeep/img/ingredients.jpg'},
		{name: 'SHARE', set: 'off', url: 'https://s3.amazonaws.com/ReciPeep/img/yobelly.jpg'}
	];
	// init display to SHARE
	$scope.nowShowing = 0;
	$scope.yummly = yummly

	// change image to index; highlight image's btn 
	$scope.showThis = function (index){
		$scope.images[Math.abs(index-1)].set = 'off'
		$scope.images[index].set = 'on'
		$scope.nowShowing = index;
	} 

	$scope.searchRecipes = function(recipe) {
		yummly.searchRec(recipe);
		yummly.recipe = recipe;
	}
	$scope.getRecipe = function(recipeID) {
		yummly.getRec(recipeID);
	}
	$scope.showDetails = function(recipe) {
		yummly.details.recipe = recipe
		yummly.details.show = 1
	}
	$scope.hideDetails = function() {
		yummly.details.show = 0
	}

}]);
