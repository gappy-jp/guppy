'use strict';

// controller

angular.module('guppyApp.controllers', []).
   controller('guppyCtrl', ['$scope', '$http', function($scope, $http) {
         $scope.phones = [
            {"name":"Nexus", "age": 1},
            {"name":"foobar", "age": 2}
         ];
         $scope.opts = {
            disable: 'right'
         };
      }]);