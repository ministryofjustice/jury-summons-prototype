(function() {
  'use strict';

  angular
    .module('app.steps')
    .controller('StepsController', StepsController);

  StepsController.$inject = ['FormDataService', '$state'];

  /* @ngInject */
  function StepsController(FormDataService, $state) {
    var vm = this;
    vm.formData = FormDataService.getData();
    vm.showActions = showActions;
    vm.gotoPrevStep = gotoPrevStep;
    vm.submitStep = submitStep;

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
        $state.go(prevStep);
      }
    }

    function submitStep (form) {
      var nextStep = FormDataService.getNextStep($state.current.name);

      FormDataService.saveData(vm.formData);

      if (nextStep) {
        $state.go(nextStep);
      }
    }
  }
})();
