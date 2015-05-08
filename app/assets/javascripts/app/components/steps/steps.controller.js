(function() {
  'use strict';

  angular
    .module('app.steps')
    .controller('StepsController', StepsController);

  StepsController.$inject = ['FormDataService', 'AuthService', '$state'];

  /* @ngInject */
  function StepsController(FormDataService, AuthService, $state) {
    var vm = this;
    vm.showActions = showActions;
    vm.gotoPrevStep = gotoPrevStep;
    vm.submitStep = submitStep;
    vm.cancel = cancel;

    // send all session data to summary screen
    if ($state.current.name === 'steps.summary') {
      vm.formData = FormDataService.getData();
    } else {
      vm.formData = angular.copy(FormDataService.getData($state.current.name));
    }

    if ($state.current.name === 'steps.details') {
      initPersonalDetails();
    }

    ////////////////

    function initPersonalDetails () {
      var juror = AuthService.getJuror();

      if (vm.formData['name'] && vm.formData['address']) {
        vm.editName = true;
        vm.editAddr = true;
      } else {
        vm.formData['name'] = juror.name;
        vm.formData['address'] = juror.address;
      }
    }

    function showActions () {
      var nextStep = FormDataService.getNextStep($state.current.name);

      if (!nextStep) {
        return false;
      }
      return true;
    }

    function gotoPrevStep () {
      var prevStep = FormDataService.getPrevStep($state.current.name);

      if (prevStep) {
        $state.go(prevStep, null, {reload: true});
      }
    }

    function submitStep (form) {
      var nextStep = FormDataService.getNextStep($state.current.name);
      var data = {};

      if (nextStep) {
        data[$state.current.name] = vm.formData;      
        FormDataService.saveData(data);

        $state.go(nextStep, null, {reload: true});
      } else {
        FormDataService.clearData();
        $state.go('confirmation');
      }
    }

    function cancel () {
      FormDataService.clearData();
      $state.go('profile', null, {reload: true});
    }
  }
})();
