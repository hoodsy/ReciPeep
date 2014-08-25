angular.module('Home', ['YummlyAPI', 'ngSanitize'])

.controller('homeController', function($scope, $location, yummly){

	$scope.images = [
		{name: 'COOK', set: 'on', url: 'https://s3.amazonaws.com/ReciPeep/img/Optimized-ingredients.jpg'},
		{name: 'SHARE', set: 'off', url: 'https://s3.amazonaws.com/ReciPeep/img/Optimized-share.jpg'}
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
		$location.path('/recipes');
	}
});
