(function() {
  'use strict';

  angular
    .module('app.steps')
    .controller('StepsController', StepsController);

  StepsController.$inject = ['FormDataService', 'StepService', 'AuthService', '$state', '$stateParams'];

  /* @ngInject */
  function StepsController(FormDataService, StepService, AuthService, $state, $stateParams) {
    var vm = this;
    vm.showActions = showActions;
    vm.gotoPrevStep = gotoPrevStep;
    vm.manualDelay = manualDelay;
    vm.submitStep = submitStep;
    vm.cancel = cancel;

    // send all session data to summary screen
    if ($state.is('steps.summary')) {
      vm.formData = FormDataService.getData();
    } else {
      vm.formData = angular.copy(FormDataService.getData($state.current.name));
    }

    if ($state.is('steps.details')) {
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
      var nextStep = StepService.getNextStep($state.current.name);

      if (!nextStep) {
        return false;
      }
      return true;
    }

    function gotoPrevStep () {
      var prevStep = StepService.getPrevStep($state.current.name);

      if (prevStep) {
        $state.go(prevStep, null, {reload: true});
      }
    }

    function manualDelay () {
      var data = { profile: { response: 'delay' } };

      FormDataService.saveData(data);
      
      $state.go('steps.delay', null, {reload: true});
    }

    function submitStep (form) {
      var hasNextStep = StepService.hasNextStep($state.current.name);
      var nextStep;
      var data = {};

      // if next step is available
      if (hasNextStep) {
        data[$state.current.name] = vm.formData;
        FormDataService.saveData(data);

        // don't get step until data has been saved
        nextStep = StepService.getNextStep($state.current.name);

        // check age
        if (!FormDataService.validAge()) {
          nextStep = 'ineligibleDob';
        }

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
