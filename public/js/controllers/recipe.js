angular.module('RecipeResults', ['YummlyAPI', 'ngSanitize'])

.controller('recipeController', function($scope, $location, yummly){

	$scope.yummly = yummly

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
	$scope.toMeal = function() {
		$location.path('/meal');
	}
});