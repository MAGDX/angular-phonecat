'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneCard').
  component('phoneCard', {
    templateUrl: 'phone-card/phone-card.template.html',
    bindings: {
      phone1: '=',
      phone2: '='
    },
    controller: ['Phone',
      function PhoneCardController(Phone) {
        console.trace('PhoneCardController');
      }
    ]
  });