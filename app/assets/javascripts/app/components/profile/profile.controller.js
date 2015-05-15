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
    vm.juror.court.address = $sce.trustAsHtml($filter('nl2br')(vm.juror.court.address));
    vm.sessionData = FormDataService.getData();
    vm.formData = vm.sessionData[$state.current.name] || {};
    vm.submit = submit;

    ////////////////

    function submit () {
      var nextStep = StepService.getNextStep($state.current.name);
      var data = {};

      data[$state.current.name] = vm.formData;      
      FormDataService.saveData(data);

      $state.go(nextStep);
    }
  }
})();
