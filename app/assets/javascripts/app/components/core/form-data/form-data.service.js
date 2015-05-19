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
      getData: getData,
      getAge: getAge,
      validAge: validAge
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

    function getAge(dobObj) {
      var dob = getData('steps.details').dob;
      var date, m;

      if (!dob) {
        return;
      }

      date = new Date(dob.year + ' ' + dob.month + ' ' + dob.day);

      m = moment(date);

      return moment().diff(m, 'years');
    }

    function validAge () {
      var age = getAge();

      if (typeof age === 'undefined' || (age && age >= 18 && age <= 70)) {
        return true;
      }

      return false;
    }
  }
})();
