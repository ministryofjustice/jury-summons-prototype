(function () {
  'use strict';

  angular
    .module('app')
    .constant('JURORS', {
      '54291234': {
        name: 'John Smith',
        address: '211, West Block, London SE1 7GL',
        court: 'Blackfriars Crown Court',
        datetime: '2015-09-20T09:15'
      }
    })
    .constant('STEPS', [
      'profile',
      'steps.personal-details',
      'steps.qualification',
      'steps.disabilities',
      'steps.occupation',
      'confirmation'
    ]);
})(); 
