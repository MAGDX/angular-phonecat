'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone',
      function PhoneComparadorController(Phone) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = Phone.query();
        self.phone1 = null;
        self.phone2 = null;
        self.orderProp = 'age';

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          if(self.phone1 == phone){
            self.phone1 = null;
            self.phone2 = null;
          }else if(self.phone1 == null){
            self.phone1 = phone;
          }else{
            self.phone2 = phone;
          }
        }
      }
    ]
  });