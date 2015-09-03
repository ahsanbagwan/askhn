'use strict';

angular.module('myApp.view1', ['ngRoute'])
.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $http.get('https://hacker-news.firebaseio.com/v0/showstories.json').
    success(function(result, status, headers, config) {
    	var jsonArrayOfObjects = [];
    	var url = "https://hacker-news.firebaseio.com/v0/item/numberhere.json";
    	angular.forEach(result, function(response) {
		      var newUrl = url.replace(/numberhere.json/, response+'.json');
    		  $http.get(newUrl).
              success(function(data, status, headers, config) {
 					var obj = {};
 					obj.id = data.id;
 					obj.title = data.title;
                    jsonArrayOfObjects.push(obj);
						
					$scope.posts = jsonArrayOfObjects;
                    
				});	
  		});
    }).
    error(function(data, status, headers, config) {
    	console.log("in success callback");
      
    });
}]);