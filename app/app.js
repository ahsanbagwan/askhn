'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mgcrea.ngStrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'bgf.paginateAnything',
  'http-auth-interceptor'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/', {
     templateUrl: 'view1/view1.html',
     controller: 'View1Ctrl'
   }).
    when('/view2', {
     templateUrl: 'view2/view2.html',
     controller: 'View2Ctrl'
   }).
    when('/login', {
      templateUrl: 'view2/login.html',
      controller: 'LoginCtrl'	
    }).
    when('/signup', {
      templateUrl: 'view2/signup.html',
      controller: 'SignupCtrl'	
    }).
    otherwise({redirectTo: '/'});
  
}])
.config(function ($httpProvider) {
	$httpProvider.interceptors.push(function($rootScope, $q, $window, $location) {
		return {
			request: function(config) {
				if ($window.localStorage.token) {
					config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
				}
				return config;
			}, 
			responseError: function(response) {
				if (response.status === 401 || response.status === 403) {
					$location.path('/login');
				}
				return $q.reject(response);
			}
		}	
    });
});
