(function(){
  
    var app = angular.module("githubViewer", []);
    
    var MainCtrl = function($scope) {
      
      var person = {
          firstName: "Chris",
          lastName: "McCauley",
          imageSrc: "https://avatars1.githubusercontent.com/u/29077416?s=460&v=4"
      };
  
  
  
      $scope.message = "Hello, Angular!";
      $scope.person = person;
  
  };
  
  app.controller("MainCtrl", MainCtrl);
  
  }());