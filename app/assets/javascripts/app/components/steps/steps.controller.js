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

      // console.log('submitting:', vm.formData);

      data[$state.current.name] = vm.formData;      
      FormDataService.saveData(data);

      if (nextStep) {
        $state.go(nextStep, null, {reload: true});
      }
    }
  }
})();
