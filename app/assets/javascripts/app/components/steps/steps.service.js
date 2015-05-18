(function() {
  'use strict';

  angular
    .module('app.steps')
    .factory('StepService', StepService);

  StepService.$inject = ['FormDataService', 'STEPS', '$state'];

  /* @ngInject */
  function StepService(FormDataService, STEPS, $state) {
    var service = {
      getPrevStep: getPrevStep,
      getNextStep: getNextStep,
      hasNextStep: hasNextStep,
      canAccessStep: canAccessStep
    };
    return service;

    ////////////////

    function getPrevStep(currentRoute) {
      var current = _.findWhere(STEPS, {route: currentRoute});
      var index = STEPS.indexOf(current);

      if (index > 0) {
        var next = STEPS[index - 1];
        var data = FormDataService.getData();
        // if condition isn't met, run function again
        if (next.condition) {
          var match = _.findWhere(data, next.condition);
          if (!match) {
            return getPrevStep(next.route);
          }
        }

        return next.route;
      }
      return;
    }

    function hasNextStep(currentRoute) {
      var current = _.findWhere(STEPS, {route: currentRoute});
      var index = STEPS.indexOf(current);

      if ((index + 1) < STEPS.length) {
        return true;
      }
      return false;
    }

    function getNextStep(currentRoute) {
      var current = _.findWhere(STEPS, {route: currentRoute});
      var index = STEPS.indexOf(current);

      // if it was only an edit, redirect back to summary
      if ($state.params.type === 'edit') {
        return STEPS[STEPS.length - 1].route;
      }

      if ((index + 1) < STEPS.length) {
        var next = STEPS[index + 1];
        var data = FormDataService.getData();
        // if condition isn't met, run function again
        if (next.condition) {
          var match = _.findWhere(data, next.condition);
          if (!match) {
            return getNextStep(next.route);
          }
        }

        return next.route;
      }
      return;
    }

    function canAccessStep(event, toState) {
      var toStep = _.findWhere(STEPS, {route: toState.name});

      if (toStep && toStep.condition) {
        var data = FormDataService.getData();
        var match = _.findWhere(data, toStep.condition);

        if (!match) {
          $state.go('login');
          event.preventDefault();
        }
      }
    }
  }
})();
