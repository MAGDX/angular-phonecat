'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
module('phoneForm').
component('phoneForm', {
  templateUrl: 'phone-form/phone-form.template.html',
  controller: ['Phone',
    function PhoneFormController(Phone) {
      console.trace('PhoneForm Controller');
      
      self = this;

      self.phone = {};

      this.guardarDatos = Phone.createPhone() function(valido){
        if(valido){
          console.trace("Posteando...");
        }else{
          console.warn("Formulario no valido");
        }
      }
    }
  ]
});