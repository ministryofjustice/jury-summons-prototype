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
      logout: logout
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

    function login(user) {
      var juror = _.findWhere(JURORS, {
        id: user.replace(/ /g,'')
      });

      if (juror) {
        $sessionStorage.userId = juror.id;
        return true;
      }
      
      return false;
    }

    function logout() {
      delete $sessionStorage.userId;
      FormDataService.clearData();
      $state.go('login');
    }
  }
})();
