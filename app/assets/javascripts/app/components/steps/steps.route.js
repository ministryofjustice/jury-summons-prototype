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
        state: 'steps.details',
        config: {
          url: '/your-details/:type?',
          views: {
            'form': {
              templateUrl: 'components/steps/personal-details.html'
            }
          }
        }
      },
      {
        state: 'steps.delay',
        config: {
          url: '/delay/:type?',
          views: {
            'form': {
              templateUrl: 'components/steps/delay.html'
            }
          }
        }
      },
      {
        state: 'steps.excuse',
        config: {
          url: '/excuse/:type?',
          views: {
            'form': {
              templateUrl: 'components/steps/excuse.html'
            }
          }
        }
      },
      {
        state: 'steps.qualification',
        config: {
          url: '/qualification/:type?',
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
          url: '/disabilities/:type?',
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
          url: '/occupation/:type?',
          views: {
            'form': {
              templateUrl: 'components/steps/occupation.html'
            }
          }
        }
      },
      {
        state: 'steps.summary',
        config: {
          url: '/summary/',
          views: {
            'form': {
              templateUrl: 'components/steps/summary.html'
            }
          }
        }
      }
    ];
  }
})();
