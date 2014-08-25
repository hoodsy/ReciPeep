angular.module('Directives', [])

.directive('enter',  function(){
	// Runs during compile
	return function(scope, element, attrs) {
		element.bind("keydown keypress mouseenter", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
            scope.$eval(attrs.enter);
          }); 
        event.preventDefault();
      }
		});
	};
});