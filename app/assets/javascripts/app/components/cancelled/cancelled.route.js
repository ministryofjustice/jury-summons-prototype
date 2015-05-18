(function() {
  'use strict';

  angular
    .module('app.cancelled')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'cancelled',
      config: {
        url: '/cancelled',
        templateUrl: 'components/cancelled/cancelled.html',
        controller: 'CancelledController',
        controllerAs: 'vm',
        title: 'Cancelled'
      }
    }];
  }
})();
