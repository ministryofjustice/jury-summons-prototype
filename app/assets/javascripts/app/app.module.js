(function () {
  'use strict';

  angular
    .module('app', [
      'app.core',
      'app.auth',
      'app.profile',
      'app.help',
      'app.steps',
      'app.ineligibleDob',
      'app.confirmation',
      'app.cancelled',
    ]);
})();
