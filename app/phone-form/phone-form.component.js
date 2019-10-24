'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
module('phoneForm').
component('phoneForm', {
  templateUrl: 'phone-form/phone-form.template.html',
  controller: ['$scope',
    function PhoneFormController($scope) {
      console.trace('PhoneForm Controller');
    }
  ]
});