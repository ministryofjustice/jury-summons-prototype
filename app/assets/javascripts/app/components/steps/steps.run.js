(function () {
  'use strict';

  angular
    .module('app.steps')
    .run(run);

  run.$inject = ['$rootScope', 'StepService'];

  /* @ngInject */
  function run($rootScope, StepService) {
    $rootScope.$on('$stateChangeStart', StepService.canAccessStep);
  }
})(); 
