(function () {
  'use strict';

  angular
    .module('app.core')
    .run(run);

  run.$inject = ['$rootScope', '$anchorScroll', '$state'];

  /* @ngInject */
  function run($rootScope, $anchorScroll, $state) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
      $anchorScroll();

      // set previous state on $state
      $state.previous = {
        name: fromState.name,
        params: fromParams
      };
    });
  }
})();
