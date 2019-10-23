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
}).
directive('amComparator', function () {
  var directiveDefinitionObject = {
    restrict: "AE",
    replace: false,
    template: "<span class=\"label label-{{ (v1 >= v2)?'success':'danger' }}\">{{(v1 >= v2)?'+':''}} {{v1 - v2}} MB</span>",
    scope: {
      v1: "=",
      v2: "="
    }
  }

  return directiveDefinitionObject;
});