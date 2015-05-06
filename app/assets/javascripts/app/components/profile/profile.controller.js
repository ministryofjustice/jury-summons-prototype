(function() {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['AuthService', 'FormDataService', '$state'];

  /* @ngInject */
  function ProfileController(AuthService, FormDataService, $state) {
    var vm = this;
    vm.juror = AuthService.getJuror();
    vm.sessionData = FormDataService.getData();
    vm.formData = vm.sessionData[$state.current.name] || {};
    vm.submit = submit;

    ////////////////

    function submit () {
      var nextStep = FormDataService.getNextStep($state.current.name);
      var data = {};

      data[$state.current.name] = vm.formData;      
      FormDataService.saveData(data);

      $state.go(nextStep);
    }
  }
})();
