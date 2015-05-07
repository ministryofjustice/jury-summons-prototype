(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['AuthService', '$state'];

  /* @ngInject */
  function AuthController(AuthService, $state) {
    var vm = this;
    vm.jurorNumber;
    vm.login = login;

    ////////////////

    function login(form) {
      if (form.$valid) {
        var attemptLogin = AuthService.login(vm.jurorNumber);

        if (!attemptLogin) {
          if (vm.jurorNumber) {
            form.jurorNumber.$setValidity('valid', false);
          }
          return;
        }
        $state.go('profile');
      }
    }
  }
})();
