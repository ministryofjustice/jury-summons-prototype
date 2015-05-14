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
      if (form.$valid || form.jurorNumber.$error.valid) {
        var attemptLogin = AuthService.login(vm.jurorNumber, vm.postcode);

        if (!attemptLogin) {
          form.jurorNumber.$setValidity('valid', false);
          form.postcode.$setValidity('valid', false);
          return;
        }
        $state.go('profile');
      }
    }
  }
})();
