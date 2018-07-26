'use strict';

eventsApp.controller('CookieStoreSampleController',
  ($scope, $cookieStore) => {
    $scope.event = {
      id: 1,
      name: 'My event',
    };

    $scope.saveEventToCookie = (event) => {
      $cookieStore.put('event', event);
    };

    $scope.getEventFromCookie = () => {
      console.log($cookieStore.get('event'));
    };

    $scope.removeEventCookie = () => {
      $cookieStore.remove('event');
    };
  });
