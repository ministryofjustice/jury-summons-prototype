(function () {
  'use strict';

  angular
    .module('app', [
      'app.core',
      'app.auth',
      'app.profile',
      'app.steps',
      'app.ineligibleDob',
      'app.confirmation',
    ]);
})();
