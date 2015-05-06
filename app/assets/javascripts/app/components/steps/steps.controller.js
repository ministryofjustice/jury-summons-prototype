(function() {
  'use strict';

  angular
    .module('app.steps')
    .controller('StepsController', StepsController);

  StepsController.$inject = ['FormDataService', '$state'];

  /* @ngInject */
  function StepsController(FormDataService, $state) {
    var vm = this;
    vm.showActions = showActions;
    vm.gotoPrevStep = gotoPrevStep;
    vm.submitStep = submitStep;
    vm.cancel = cancel;

    // send all session data to summary screen
    if ($state.current.name === 'steps.summary') {
      vm.formData = FormDataService.getData();
    } else {
      vm.formData = FormDataService.getData($state.current.name);
    }

    ////////////////

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
        $state.go('confirmation');
      }
    }

    function cancel () {
      FormDataService.clearData();
      $state.go('profile', null, {reload: true});
    }
  }
})();
