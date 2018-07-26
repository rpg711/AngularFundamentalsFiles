'use strict';

eventsApp.controller('LocaleSampleController',
  ($scope, $locale) => {
    $locale.id = 'es';
    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
  });
