(function() {
  'use strict';

  angular
    .module('core.formData')
    .factory('FormDataService', FormDataService);

  FormDataService.$inject = ['$sessionStorage', 'STEPS', '_'];

  /* @ngInject */
  function FormDataService($sessionStorage, STEPS, _) {
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

    function getPrevStep(currentRoute) {
      var current = _.findWhere(STEPS, {route: currentRoute});
      var index = STEPS.indexOf(current);

      if (index > 0) {
        return STEPS[index - 1].route;
      }
      return;
    }

    function getNextStep(currentRoute) {
      var current = _.findWhere(STEPS, {route: currentRoute});
      var index = STEPS.indexOf(current);

      if ((index + 1) < STEPS.length) {
        return STEPS[index + 1].route;
      }
      return;
    }
  }
})();
