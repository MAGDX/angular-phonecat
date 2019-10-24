'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
module('phoneCarrito').
component('phoneCarrito', {
  templateUrl: 'phone-carrito/phone-carrito.template.html',
  controller: ['$scope',
    function PhoneCarritoController($scope) {
      console.trace('PhoneCarrito Controller');
    }
  ]
});