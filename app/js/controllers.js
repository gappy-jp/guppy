'use strict';

// controller

angular.module('guppyApp.controllers', ['ui.bootstrap'])
   .controller('HeaderController', ['$scope', '$location', function($scope, $location) {
      $scope.isActive = function(viewLocation) {
         var active = (viewLocation === $location.path());
         return active;
      };
      $scope.isCollapsed = true;
   }])
   .controller('guppyCtrlStd', ['$scope', '$http', function($scope, $http) {
      $scope.phones = [
         {"name":"Nexus", "age": 1},
         {"name":"foobar", "age": 2}
      ];
   }])
   .controller('guppyCtrlAbout', ['$scope', '$http', function($scope, $http) {
      $scope.members = [
         {"name": "A", "number": "s11"},
         {"name": "B", "number": "s22"},
         {"name": "C", "number": "s33"},
         {"name": "D", "number": "s44"}
      ];
   }])
   .controller('guppyCtrlCross', ['$scope', '$http', function($scope, $http) {
      $scope.testtext = "hoge";
      $scope.title = "guppyD3-angulartest";
      $scope.d3Data = [
         {name: "Greg", score:98},
         {name: "Ari", score:96},
         {name: "Loser", score: 48}
      ];
      $scope.d3OnClick = function(item){
         alert(item.name);
      };
   }])
   ;