(function() {
  'use strict';

  angular
    .module('app.confirmation')
    .controller('ConfirmationController', ConfirmationController);

  ConfirmationController.$inject = ['AuthService', 'FormDataService', '$state'];

  /* @ngInject */
  function ConfirmationController(AuthService, FormDataService, $state) {
    var vm = this;
    vm.juror = AuthService.getJuror();

    ////////////////
  }
})();
