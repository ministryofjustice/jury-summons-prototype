(function() {
  'use strict';

  angular
    .module('app.steps')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'steps',
        config: {
          url: '/apply',
          templateUrl: 'components/steps/steps.html',
          controller: 'StepsController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'steps.personal-details',
        config: {
          url: '/your-details',
          views: {
            'form': {
              templateUrl: 'components/steps/personal-details.html'
            }
          }
        }
      },
      {
        state: 'steps.qualification',
        config: {
          url: '/qualification',
          views: {
            'form': {
              templateUrl: 'components/steps/qualification.html'
            }
          }
        }
      },
      {
        state: 'steps.disabilities',
        config: {
          url: '/disabilities',
          views: {
            'form': {
              templateUrl: 'components/steps/disabilities.html'
            }
          }
        }
      },
      {
        state: 'steps.occupation',
        config: {
          url: '/occupation',
          views: {
            'form': {
              templateUrl: 'components/steps/occupation.html'
            }
          }
        }
      },
      {
        state: 'steps.confirmation',
        config: {
          url: '/summary',
          views: {
            'form': {
              templateUrl: 'components/steps/confirmation.html'
            }
          }
        }
      }
    ];
  }
})();
