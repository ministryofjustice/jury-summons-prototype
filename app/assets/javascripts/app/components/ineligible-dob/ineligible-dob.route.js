(function() {
  'use strict';

  angular
    .module('app.ineligibleDob')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'ineligibleDob',
        config: {
          url: '/apply/dob-check',
          templateUrl: 'components/ineligible-dob/ineligible-confirm.html',
          controller: 'IneligibleDobController',
          controllerAs: 'vm',
          title: 'Ineligible'
        }
      },
      {
        state: 'ineligibleSuccess',
        config: {
          url: '/apply/complete',
          templateUrl: 'components/ineligible-dob/ineligible-complete.html',
          controller: 'IneligibleDobController',
          controllerAs: 'vm',
          title: 'Ineligible'
        }
      }
    ];
  }
})();
