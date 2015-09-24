angular.module('myApp', ['http-auth-interceptor'])
    .controller('LoginCtrl', function($scope, $location, $http, authService) {

    	$scope.showClickable = $location.path === '/login';
    		
    	$scope.login = function() {
    		$http.post('auth/login').success(function(){
    			authService.loginConfirmed();
    		})
    	};		
    });