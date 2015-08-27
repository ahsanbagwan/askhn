'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
    $http.get('https://hacker-news.firebaseio.com/v0/askstories.json').
    success(function(result, status, headers, config) {
    	var jsonArrayOfObjects = [];
    	var url = "https://hacker-news.firebaseio.com/v0/item/numberhere.json";
    	angular.forEach(result, function(response) {
		var newUrl = url.replace(/numberhere.json/, response+'.json');
    			console.log("newUrl " + newUrl);
    			$http.get(newUrl).
                    success(function(data, status, headers, config) {
 						var obj = {};
 						obj.id = data.id;
 						obj.title = data.title;
						jsonArrayOfObjects.push(obj);
						console.log("jsonArrayOfObjects " + jsonArrayOfObjects );
						$scope.posts = jsonArrayOfObjects;
				});	
  		});
    }).
    error(function(data, status, headers, config) {
    	console.log("in success callback");
      
    });
}]);