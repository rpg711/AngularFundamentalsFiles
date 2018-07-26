'use strict';

eventsApp.controller('EventListController',
  function($scope, $location, eventData, $route) {
    $scope.events = $route.current.locals.events;
});
