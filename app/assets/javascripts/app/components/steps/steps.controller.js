(function() {
  'use strict';

  angular
    .module('app.steps')
    .controller('StepsController', StepsController);

  StepsController.$inject = ['FormDataService', '$state'];

  /* @ngInject */
  function StepsController(FormDataService, $state) {
    var vm = this;
    vm.gotoPrevStep = gotoPrevStep;
    vm.formData = FormDataService.getData();
    vm.submitStep = submitStep;

    ////////////////

    function gotoPrevStep () {
      var prevStep = FormDataService.getPrevStep($state.current.name);
      $state.go(prevStep);
    }

    function submitStep (form) {
      console.log('submitting');
      var nextStep = FormDataService.getNextStep($state.current.name);

      FormDataService.saveData(vm.formData);

      if (nextStep) {
        $state.go(nextStep);
      }
    }
  }
})();
