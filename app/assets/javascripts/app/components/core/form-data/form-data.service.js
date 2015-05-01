(function() {
  'use strict';

  angular
    .module('core.formData')
    .factory('FormDataService', FormDataService);

  FormDataService.$inject = ['$sessionStorage', 'STEPS'];

  /* @ngInject */
  function FormDataService($sessionStorage, STEPS) {
    var formData = $sessionStorage.formData || {};
    var service = {
      saveData: saveData,
      getData: getData,
      getPrevStep: getPrevStep,
      getNextStep: getNextStep
    };
    return service;

    ////////////////

    function saveData(data) {
      formData = $sessionStorage.formData = data;
    }

    function getData() {
      return formData;
    }

    function getPrevStep(current) {
      for (var i = STEPS.length - 1; i >= 0; i--) {
        if (STEPS[i] === current) {
          // console.log(STEPS[i-1]);
          return STEPS[i-1];
        }
      };
    }

    function getNextStep(current) {
      for (var i = STEPS.length - 1; i >= 0; i--) {
        if (STEPS[i] === current) {
          return STEPS[i+1];
        }
      };
      return;
    }
  }
})();
