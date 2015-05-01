(function () {
  'use strict';

  angular
    .module('app')
    .constant('JURORS', {
      '54291234': {
        name: 'John Smith',
        address: '211, West Block, London SE1 7GL',
        court: 'Blackfriars Crown Court',
        datetime: '20/09/2015 9:15'
      }
    })
})(); 
