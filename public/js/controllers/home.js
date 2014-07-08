angular.module('HomeCtrl', [])

.controller('landingPage', function($scope, $http){
	$scope.images = [
		{name: 'COOK', set: 'on', url: 'https://s3.amazonaws.com/ReciPeep/img/ingredients.jpg'},
		{name: 'SHARE', set: 'off', url: 'https://s3.amazonaws.com/ReciPeep/img/yobelly.jpg'}
	];

	// init display to SHARE
	$scope.nowShowing = 0;

	// change image to index; highlight image's btn 
	$scope.showThis = function (index){
		$scope.images[Math.abs(index-1)].set = 'off'
		$scope.images[index].set = 'on'
		$scope.nowShowing = index;
	}  
});
