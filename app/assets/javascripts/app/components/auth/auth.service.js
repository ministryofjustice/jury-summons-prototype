(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$sessionStorage', '$state', 'JURORS'];

  /* @ngInject */
  function AuthService($sessionStorage, $state, JURORS) {
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
        return JURORS[$sessionStorage.userId];
      }
    }

    function login(user) {
      var user = user.replace(/ /g,'')
      if (JURORS[user]) {
        $sessionStorage.userId = user;
        return true;
      }
      
      return false;
    }

    function logout() {
      delete $sessionStorage.userId;
      $state.go('login');
    }
  }
})();
