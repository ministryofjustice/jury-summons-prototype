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
          url: '/complete',
          abstract: true,
          templateUrl: 'components/steps/steps.html',
          controller: 'StepsController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'steps.details',
        config: {
          url: '/about-you/:type?',
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
          url: '/delay-until-later-date/:type?',
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
          url: '/apply-to-be-excused/:type?',
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
          url: '/are-you-qualified/:type?',
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
          url: '/help-in-court/:type?',
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
