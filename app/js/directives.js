'use strict';

// directives

angular.module('guppyApp.directives',[])
   .directive('appVersion', ['version', function(version){
      return function(scope, elm, attrs){
         elm.text(version);
      };
   }]);