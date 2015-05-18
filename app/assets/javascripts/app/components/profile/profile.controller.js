(function() {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['AuthService', 'FormDataService', 'StepService', '$state', '$sce', '$filter'];

  /* @ngInject */
  function ProfileController(AuthService, FormDataService, StepService, $state, $sce, $filter) {
    var vm = this;
    vm.juror = AuthService.getJuror();
    vm.sessionData = FormDataService.getData();
    vm.formData = vm.sessionData[$state.current.name] || {};
    vm.submit = submit;

    ////////////////

    function submit () {
      var data = {};
      var nextStep;

      data[$state.current.name] = vm.formData;      
      FormDataService.saveData(data);

      // don't get step until data has been saved
      nextStep = StepService.getNextStep($state.current.name);

      $state.go(nextStep);
    }
  }
})();
