(function() {
  'use strict';

  angular
    .module('app.confirmation')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'confirmation',
      config: {
        url: '/confirmation',
        templateUrl: 'components/confirmation/confirmation.html',
        controller: 'ConfirmationController',
        controllerAs: 'vm',
        title: 'Confirmation'
      }
    }];
  }
})();
