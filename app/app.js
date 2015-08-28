'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'bgf.paginateAnything'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
     templateUrl: 'view1/view1.html',
     controller: 'View1Ctrl'
   }).
    when('/view2', {
     templateUrl: 'view2/view2.html',
     controller: 'View2Ctrl'
   }).
   otherwise({redirectTo: '/'});
  
}]);
