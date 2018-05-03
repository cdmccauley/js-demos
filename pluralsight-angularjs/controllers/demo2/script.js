(function() {

    var app = angular.module("githubViewer", []);
  
    var MainCtrl = function($scope, $http) {
  
      var onUserComplete = function(response) {
        $scope.user = response.data;
      };

      var onError = function(reason){
        $scope.error = "Could not fetch the user.";
      };
  
      $http.get("https://api.github.com/users/cdmccauley")
        .then(onUserComplete, onError);
  
  
  
      $scope.message = "Hello, Angular!";
  
    };
  
    app.controller("MainCtrl", MainCtrl);
  
  }());