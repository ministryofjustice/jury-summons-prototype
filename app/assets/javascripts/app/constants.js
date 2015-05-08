/* global _:false */
(function () {
  'use strict';

  angular
    .module('app')
    // vendor libs
    .constant('_', _)
    // app constants
    .constant('JURORS', [
      {
        id: '54291234',
        name: 'John Smith',
        address: '211,\nWest Block,\nLondon\nSE1 7GL',
        court: 'Blackfriars Crown Court',
        datetime: '2015-09-20T09:15'
      }
    ])
    .constant('SAMPLE_ANSWERS', {
      'steps.details': {
        title: 'Mr',
        name: 'John Smith',
        address: '102 Petty France,\nWestminster,\nLondon,\nSW1H 9AJ',
        dobDay: 1,
        dobMonth: 1,
        dobYear: 2007,
        email: 'moj@digital.justice.gov.uk',
        phone: '01234567890',
        alternativePhone: '01234567891'
      },
      'steps.qualification': {
        residence: 'Yes',
        mentalHealth: 'No',
        bail: 'No',
        convictions: 'No'
      },
      'steps.disabilities': {
        disabilities: 'No'
      },
      'steps.occupation': {
        occupation: 'No'
      }
    })
    .constant('STEPS', [
      {
        route: 'profile',
        title: 'Profile'
      },
      {
        route: 'steps.delay',
        title: 'Be delayed',
        condition: {
          response: 'delay'
        }
      },
      {
        route: 'steps.excuse',
        title: 'Be excused',
        condition: {
          response: 'excuse'
        }
      },
      {
        route: 'steps.details',
        title: 'Your details'
      },
      {
        route: 'steps.qualification',
        title: 'Your status'
      },
      {
        route: 'steps.disabilities',
        title: 'Special requirements'
      },
      {
        route: 'steps.occupation',
        title: 'Your occupation'
      },
      {
        route: 'steps.summary',
        title: 'Check your details'
      }
    ]);
})();
