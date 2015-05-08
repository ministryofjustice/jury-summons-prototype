(function() {
  'use strict';

  angular
    .module('core.formData')
    .factory('FormDataService', FormDataService);

  FormDataService.$inject = ['$sessionStorage', '_'];

  /* @ngInject */
  function FormDataService($sessionStorage, _) {
    var formData = $sessionStorage.formData || {};
    var service = {
      saveData: saveData,
      clearData: clearData,
      getData: getData
    };
    return service;

    ////////////////

    function saveData(data) {
      formData = $sessionStorage.formData = angular.extend(formData, data);
    }

    function clearData() {
      formData = {};
      delete $sessionStorage.formData;
    }

    function getData(step) {
      if (!step) {
        return formData;
      }

      return formData[step] || {};
    }
  }
})();
