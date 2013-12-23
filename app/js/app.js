'use strict';

// 依存関係を書くところ

angular.module('guppyApp', [
   'ui.bootstrap',
   'ngRoute',
   'd3',
   'guppyApp.filters',
   'guppyApp.services',
   'guppyApp.directives',
   'guppyApp.controllers'
]).
config(['$routeProvider', function($routeProvider, $locationProvider, $httpProvider) {
   $routeProvider.when('/home',
      {
         templateUrl: 'partials/home.html',
         cotroller: 'guppyCtrlStd'
      });
   $routeProvider.when('/view1',
      {
         templateUrl: 'partials/view1.html',
         controller: 'guppyCtrlStd'
      });
   $routeProvider.when('/docs',
      {
         templateUrl: 'partials/docs.html',
         controller: 'guppyCtrlStd'
      });
   $routeProvider.when('/cross',
      {
         templateUrl: 'partials/cross.html',
         controller: 'guppyCtrlCross'
      });
   $routeProvider.when('/about',
      {
         templateUrl: 'partials/about.html',
         controller: 'guppyCtrlAbout'
      });
}]);

// dependency injection
angular.module('d3', []);
angular.module('guppyApp.directives',['d3']);