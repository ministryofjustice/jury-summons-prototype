(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('input', blockLabel);

  /* @ngInject */
  function blockLabel () {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: BlockLabelController,
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        model: '=ngModel'
      }
    };
    return directive;
  }

  /* @ngInject */
  function BlockLabelController ($scope, $element) {
    var vm = this;
    var blockLabel = $element.parents('.block-label');

    if (blockLabel.length <= 0) {
      return;
    }

    watchFocus();
    watchModel();
    
    /////////////
    
    function setFocus (event) {
      if (event.type === 'focus') {
        blockLabel.addClass('focused');
      } else {        
        blockLabel.removeClass('focused');
      }
    }
    
    function setSelected (val) {
      if (val === $element.val()) {
        blockLabel.addClass('selected');
      } else {        
        blockLabel.removeClass('selected');
      }
    }

    function watchFocus () {
      $element.on('focus blur', setFocus);
    }

    function watchModel () {
      $scope.$watch('vm.model', setSelected);
    }
  }
})();
