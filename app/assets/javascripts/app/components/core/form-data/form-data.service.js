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
      var birthDate;

      if (!dob) {
        return;
      }

      birthDate = moment({
        day: dob.day,
        month: dob.month,
        year: dob.year
      });

      return moment().diff(birthDate, 'years');
    }

    function validAge () {
      var age = getAge();

      // console.log(age);

      if (typeof age === 'undefined' || (age && age >= 18 && age <= 70)) {
        return true;
      }

      return false;
    }
  }
})();
