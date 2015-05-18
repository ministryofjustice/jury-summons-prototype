(function () {
  'use strict';

  angular
    .module('app.core', [
      'ui.router',
      'ngSanitize',
      'nl2br',
      'core.router',
      'core.formData',
    ]);
})();
