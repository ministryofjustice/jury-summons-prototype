(function() {
  'use strict';

  angular
    .module('app.ineligibleDob')
    .controller('IneligibleDobController', IneligibleDobController);

  IneligibleDobController.$inject = ['FormDataService', '$state'];

  /* @ngInject */
  function IneligibleDobController(FormDataService, $state) {
    var vm = this;
    vm.age = FormDataService.getAge();
    vm.dob = getDob();
    vm.submit = submit;

    ////////////////

    function getDob () {
      var formData = FormDataService.getData('steps.details');

      if (!formData.dob) {
        return;
      }
      
      return formData.dob.day + '/' + formData.dob.month + '/' + formData.dob.year;
    }

    function submit () {
      FormDataService.clearData();
      $state.go('ineligibleSuccess', null, {reload: true});
    }
  }
})();
