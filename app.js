( function () {
	//use strict;
	angular.module('week1App',[])
	.controller('appcontroller',appcontroller);
	appcontroller.inject = ['$scope'];
	function appcontroller($scope) {
		$scope.inputfood;
		$scope.outputText;
		$scope.checkfood = function (){

			var food=$scope.inputfood;
			
			if (!food ) {
					$scope.outputText="Please enter data first";
				}
			else {
			      var foodcount=food.split(',').length;
			      if (foodcount <= 3) {$scope.outputText="Enjoy!";}
			      else  {$scope.outputText="Too Much!";}
			};			
            console.log(foodcount);			
		}
	}
	
})();