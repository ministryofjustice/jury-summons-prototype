(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$sessionStorage', '$state', 'JURORS', '_'];

  /* @ngInject */
  function AuthService($sessionStorage, $state, JURORS, _) {
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
      var user = user.replace(/ /g,'')
      var juror = _.findWhere(JURORS, {id: user});

      if (juror) {
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
