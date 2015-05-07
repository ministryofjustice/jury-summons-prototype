(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('yesno', yesno);

  yesno.$inject = [];

  /* @ngInject */
  function yesno () {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: YesNoController,
      controllerAs: 'vm',
      templateUrl: 'shared/yes-no/yes-no.html',
      link: link,
      restrict: 'E',
      scope: {
        label: '@',
        hint: '@',
        name: '@',
        model: '='
      }
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

  /* @ngInject */
  function YesNoController () {

  }
})();
