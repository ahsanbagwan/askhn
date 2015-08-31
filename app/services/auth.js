angular.module('myApp').
    factory('Auth', function($http, $location, $rootScope, $alert, $window) {
    	var token = $window.localStorage.token;

    	if (token) {
    		var payload = JSON.parse($window.atob(token.split('.')[1]));
    		$rootScope.currentUser = payload.user;
    	}

         login: function(user) {
         	return $http.post('/auth/login', user)
         	    .success(function(data){
         	    	$window.localStorage.token = data.token;
         	    	var payload = JSON.parse($window.atob(data.token.split('.')[1]));
         	    	$rootScope.currentUser = payload.user;
         	    	$location.path('/');
         	    	$alert({
         	    		title: 'Cheers!',
         	    		content: 'You have logged in.',
         	    		animation: 'fadeZoomFadeDown',
         	    		type: 'material',
         	    		duration: 3
         	    	});

         	    });
         }
 
    });