angular.module('HomeCtrl', [])

function HomeCtrl($scope, $http){
	$scope.images = [
		{title: 'Cook. Create.', id: 'cook', cls: 'cook-btn', set: 'off', url: 'https://s3.amazonaws.com/ReciPeep/img/ingredients.jpg'},
		{title: 'Share. Socialize.', id: 'share', cls: 'share-btn', set: 'on', url: 'https://s3.amazonaws.com/ReciPeep/img/yobelly.jpg'}
	];

	$scope.nowShowing = 1;
	//{title: 'Pizza', url: 'https://s3.amazonaws.com/ReciPeep/img/pizza.jpg'};
  // _.first($scope.images);

	$scope.showThis = function (index){
		// change image to index; highlight image's btn
		$scope.images[Math.abs(index-1)].set = 'off'
		$scope.images[index].set = 'on'
		$scope.nowShowing = index;
	}  
}
