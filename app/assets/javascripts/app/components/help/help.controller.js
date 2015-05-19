(function() {
  'use strict';

  angular
    .module('app.help')
    .controller('HelpController', HelpController);

  HelpController.$inject = ['$state'];

  /* @ngInject */
  function HelpController($state) {
    var vm = this;
    vm.back = back;

    ////////////////

    function back () {
      if ($state.previous.name !== '') {
        $state.go($state.previous.name, $state.previous.params);
      } else {
        $state.go('steps.qualification');
      }
    }
  }
})();
