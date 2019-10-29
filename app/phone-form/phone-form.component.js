'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
module('phoneForm').
component('phoneForm', {
  templateUrl: 'phone-form/phone-form.template.html',
  controller: ['$routeParams', 'Phone',
    function PhoneFormController($routeParams, Phone) {
      console.log('PhoneForm Controller');

      self = this;

      self.phone = {};

      self.id = $routeParams.phoneId;

      if (self.id) {
        Phone.getById(self.id).then(
          function successCallback(response) {
            console.log("Success");
            self.phone = response.data;
          },
          function errorCallback(response) {
            console.warn('Error 404: Phone Not Found %o', response);
            $location.url('/404');
          }
        );
      }

      this.guardarDatos = function (valido) {
        if (valido) {
          console.log("Posteando...");
          Phone.createPhone(self.phone).then(
            (res) => {
              console.debug('Telefono creado');
            }
          ), (
            (res) => {
              console.warn('Creacion telefono fallida');
            }
          )
        } else {
          console.warn("Formulario no valido");
        }
      };
    }
  ]
});