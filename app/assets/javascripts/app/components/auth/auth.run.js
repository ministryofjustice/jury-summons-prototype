(function () {
  'use strict';

  angular
    .module('app.auth')
    .run(run);

  run.$inject = ['$rootScope', '$state', 'AuthService'];

  /* @ngInject */
  function run($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (toState.name == 'login' && fromState.name != 'login'){
        if(AuthService.isAuthenticated()){
          $state.go('profile');
          event.preventDefault();
        }
        return;
      }

      if(AuthService.isAuthenticated()){
         return;
      }

      $state.go('login');
      event.preventDefault();
    });
  }
})(); 
