angular.module('Meal', ['YummlyAPI', 'ngSanitize'])

.controller('mealController', ['$scope', 'yummly', function($scope, yummly){

	$scope.yummly = yummly
	console.log($scope.yummly)
	// $scope.mealBar = 1;

	$scope.searchRecipes = function(recipe) {
		yummly.searchRec(recipe);
		yummly.recipe = recipe;
	}
	$scope.getRecipe = function(recipeID) {
		yummly.getRec(recipeID);
	}
	$scope.addRecipe = function(recipe) {
		yummly.meal.push(recipe);
	}
	$scope.removeRecipe = function(recipe) {
		var index = yummly.meal.indexOf(recipe);
		if (index > -1){
			yummly.meal.splice(index, 1);
		}
	}
}]);