(function () {
  'use strict';

  angular
    .module('app.core')
    .run(run);

  run.$inject = ['$rootScope', '$anchorScroll'];

  /* @ngInject */
  function run($rootScope, $anchorScroll) {
    $rootScope.$on('$stateChangeSuccess', function() { 
      $anchorScroll();
    });
  }
})();
