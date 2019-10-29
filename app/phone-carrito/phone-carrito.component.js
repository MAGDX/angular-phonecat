'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
module('phoneCarrito').
component('phoneCarrito', {
  templateUrl: 'phone-carrito/phone-carrito.template.html',
  controller: ['Phone', 'Carrito',
    function PhoneCarritoController(Phone, Carrito) {
      console.trace('PhoneCarrito Controller');

      self = this;
      self.productos = Carrito.getProductos();
    }
  ]
});