'use strict';

eventsApp.controller('TimeoutSampleController',
  ($scope, $timeout) => {
    $timeout(() => {
      $scope.name = 'John Doe';
    }, 3000);

    $scope.cancel = () => {
      $timeout.cancel(promise);
    };
  });
