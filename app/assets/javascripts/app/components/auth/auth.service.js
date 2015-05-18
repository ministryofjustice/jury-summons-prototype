(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$sessionStorage', 'FormDataService', '$state', 'JURORS', '_'];

  /* @ngInject */
  function AuthService($sessionStorage, FormDataService, $state, JURORS, _) {
    var service = {
      isAuthenticated: isAuthenticated,
      getJuror: getJuror,
      login: login,
      logout: logout,
      clearSession: clearSession
    };
    return service;

    ////////////////

    function isAuthenticated() {
      return !!$sessionStorage.userId;
    }

    function getJuror() {
      if (isAuthenticated()) {
        return _.findWhere(JURORS, {id: $sessionStorage.userId});
      }
    }

    function login(jurorNumber, postcode) {
      var juror = _.findWhere(JURORS, {
        id: (jurorNumber || '').replace(/ /g,''),
        postcode: (postcode || '').replace(/ /g,'').toUpperCase()
      });

      if (juror) {
        $sessionStorage.userId = juror.id;
        return true;
      }
      
      return false;
    }

    function clearSession() {
      delete $sessionStorage.userId;
      FormDataService.clearData();
    }

    function logout() {
      delete $sessionStorage.userId;
      FormDataService.clearData();
      $state.go('login');
    }
  }
})();
