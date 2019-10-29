'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
module('phoneComparador').
component('phoneComparador', {
  templateUrl: 'phone-comparador/phone-comparador.template.html',
  controller: ['Phone', '$scope', 'Carrito',
    function PhoneComparadorController(Phone, $scope, Carrito) {

      console.trace('PhoneComparadorController');

      var self = this;

      self.phone1 = null;
      self.phone2 = null;
      self.orderProp = 'age';

      Phone.getAll().then(
        function successCallback(response) {
          console.trace("Success");
          self.phones = response.data;
        },
        function errorCallback(response) {
          console.warn("Error");
        }
      );

      this.seleccionar = function (phone) {
        console.trace('seleccionado movil');
        if (self.phone1 == phone) {
          self.phone1 = null;
          self.phone2 = null;
        } else if (self.phone1 == null) {
          self.phone1 = phone;
        } else {
          self.phone2 = phone;
        }
      }

      $scope.$on("eventoCompra", function (event, data) {
        self.productoCompra =  data.telefono;

        let producto = {
          "id": data.telefono.id,
          "name": data.telefono.name,
          "ram": data.telefono.ram,
          "flash": data.telefono.flash,
          "imageUrl": data.telefono.imageUrl,
          "cantidad": 1
        };

        Carrito.guardarProducto(producto);
      });
    }
  ]
});