angular.module('myApp')
	.controller('SignupCtrl', function($scope, Auth) {
		console.log("in controller");
		$scope.signup = function() {
			console.log("in call to signup");
			Auth.signup({
				name: $scope.displayName,
				email: $scope.email,
				password: $scope.password
			});
		};
		$scope.pageClass = 'fadeZoom'
	});
