(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('conditionalinfo', conditionalInfo);

  /* @ngInject */
  function conditionalInfo () {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: ConditionalInfoController,
      controllerAs: 'vm',
      templateUrl: 'shared/conditional-info/conditional-info.html',
      restrict: 'E',
      scope: {
        model: '=',
        label: '@',
        name: '@',
        trigger: '=',
        reverse: '=',
        required: '=',
      }
    };
    return directive;
  }

  /* @ngInject */
  function ConditionalInfoController () {
    var vm = this;
    vm.condition = vm.reverse ? 'No' : 'Yes';
  }
})();
