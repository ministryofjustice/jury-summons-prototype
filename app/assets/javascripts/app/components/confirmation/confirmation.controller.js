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
    vm.formData = FormDataService.getData();
    vm.submit = submit;

    ////////////////

    function submit () {
      var nextStep = FormDataService.getNextStep($state.current.name);

      FormDataService.saveData(vm.formData);

      $state.go(nextStep);
    }
  }
})();
