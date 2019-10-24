'use strict';

// Define the `core` module
angular.module('core', ['core.phone', 'core.carrito']);

angular.
module('core').
controller('CoreCtrl', ['$scope',
    function ($scope) {

        $scope.ui = {
            min: 0,
            max: 250
        };
    }
]).


//  directive to parse input as float (not string)
directive('input', function () {
    return {
        restrict: 'E',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if ('numeric' in attrs) {
                ngModel.$parsers.push(parseFloat);
            }
        }
    };
});