'use strict';

// 依存関係を書くところ

angular.module('guppyApp', [
   'ui.bootstrap',
   'snap',
   'ngRoute',
   'guppyApp.filters',
   'guppyApp.services',
   'guppyApp.directives',
   'guppyApp.controllers'
]).
config(['$routeProvider', function($routeProvider, $locationProvider, $httpProvider){
   $routeProvider.when('/home',
      {
         templateUrl: 'partials/home.html',
         cotroller: 'homeCtrl'
      })
   $routeProvider.when('/view1',
      {
         templateUrl: 'partials/partial1.html',
         controller: 'guppyCtrl'
      });
   $routeProvider.when('/view2',
      {
         templateUrl: 'partials/partial2.html', 
         controller: 'guppyCtrl'
      });
}]);

