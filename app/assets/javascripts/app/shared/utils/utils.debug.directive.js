(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('debug', debug);

  debug.$inject = [];

  /* @ngInject */
  function debug () {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: DebugController,
      controllerAs: 'vm',
      templateUrl: 'shared/utils/debug.html',
      replace: true,
      link: link,
      restrict: 'E',
      scope: {
        environment: '@'
      }
    };
    return directive;

    function link(scope, element, attrs) {
      // don't show if in production
      if (scope.vm.environment === 'production') {
        element.remove();
      }
    }
  }

  DebugController.$inject = ['AuthService', 'FormDataService', '$state', 'JURORS', 'SAMPLE_ANSWERS'];

  /* @ngInject */
  function DebugController (AuthService, FormDataService, $state, JURORS, SAMPLE_ANSWERS) {
    var vm = this;
    vm.resetSession = resetSession;
    vm.resetFormData = resetFormData;
    vm.login = login;
    vm.fillData = fillData;

    ////////////////
    
    function resetSession () {
      AuthService.logout();
    }
    
    function resetFormData () {
      FormDataService.clearData();
      vm.resetExpanded = false;
      $state.go('profile', null, { reload: true });
    }

    function login () {
      AuthService.login(JURORS[0].id);
      vm.debugExpanded = false;
      $state.go('profile');
    }

    function fillData (status) {
      var data = SAMPLE_ANSWERS;

      login();

      data['profile'] = {
        response: status
      };
      FormDataService.saveData(data);

      vm.debugExpanded = false;
      $state.go('steps.summary', null, { reload: true });
    }
  }
})();
