/* global _:false, moment:false */
(function () {
  'use strict';

  angular
    .module('app')
    // vendor libs
    .constant('_', _)
    .constant('moment', moment)
    // app constants
    .constant('JURORS', [
      {
        id: '54291234',
        postcode: 'SW11AA',
        name: 'John Smith',
        address: 'Buckingham Palace,\nLondon,\nSW11AA',
        court: 'Blackfriars Crown Court',
        datetime: '2015-09-20T09:15'
      }
    ])
    .constant('SAMPLE_ANSWERS', {
      'steps.details': {
        title: 'Mr',
        name: 'John Smith',
        address: '102 Petty France,\nWestminster,\nLondon,\nSW1H 9AJ',
        dob: {
          day: 1,
          month: 1,
          year: 1980
        },
        email: 'moj@digital.justice.gov.uk',
        phone: '01234567890',
        alternativePhone: '01234567891'
      },
      'steps.delay': {
        'reason': 'I have already booked and paid for a holiday on those dates',
        'availableDates': 'Anytime in June/July/August'
      },
      'steps.excuse': {
        'reason': 'I have served on a Jury in the last 2 years'
      },
      'steps.qualification': {
        residence: 'Yes',
        mentalHealth: 'No',
        bail: 'No',
        convictions: 'No'
      },
      'steps.disabilities': {
        disabilities: 'Yes',
        mobility: true,
        moreInfo: 'I will require a wheelchair'
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
