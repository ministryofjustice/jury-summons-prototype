(function() {
  'use strict';

  angular
    .module('app.auth')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'login',
      config: {
        url: '/login',
        templateUrl: 'components/auth/login.html',
        controller: 'AuthController',
        controllerAs: 'vm',
        title: 'Login'
      }
    }];
  }
})();
