(function() {
  'use strict';

  angular
    .module('app.help')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'help',
        config: {
          url: '/help',
          templateUrl: 'components/help/help.html',
          controller: 'HelpController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'help.mentalCapacity',
        config: {
          url: '/mental-health-act',
          views: {
            'content': {
              templateUrl: 'components/help/mental-capacity.html'
            }
          }
        }
      },
      {
        state: 'help.convictions',
        config: {
          url: '/convictions',
          views: {
            'content': {
              templateUrl: 'components/help/convictions.html'
            }
          }
        }
      }
    ];
  }
})();
