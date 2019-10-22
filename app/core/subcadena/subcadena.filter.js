'use strict';

angular.
  module('core').
  filter('subcadena', function() {
    return function(input, until) {
      return input.slice(0, until);
    };
  });
