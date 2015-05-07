(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('details', details);

  /* @ngInject */
  function details () {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
      var hasNativeSupport = 'open' in document.createElement('details'),
          notSummaryChildren,
          toggleShow;

      // return if browser already has native support
      if (hasNativeSupport) { return; }

      notSummaryChildren = element.children(':not(summary)');
      // hide on load
      notSummaryChildren.hide();

      toggleShow = function () {
        notSummaryChildren
          .toggle()
          .toggleClass('is-open');
        element
          .toggleClass('is-open');
      };

      element
        .addClass('is-notnative')
        .on('click', toggleShow);
    }
  }
})();
