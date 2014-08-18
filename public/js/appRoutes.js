angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/homeContent.html',
        controller: 'landingPage'
      }).
      when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'landingPage'
      }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });

