angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/homeContent.html',
        controller: 'homeController'
      }).
      when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'recipeController'
      }).
      when('/meal', {
        templateUrl: 'views/meal.html',
        controller: 'mealController'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });

