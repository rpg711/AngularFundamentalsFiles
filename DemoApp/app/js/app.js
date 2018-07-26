'use strict';

const eventsApp = angular.module('eventsApp', ['ngCookies', 'ngResource', 'ngRoute'])
.config(($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
  });
  $routeProvider.when('/newEvent', {
    templateUrl: 'templates/NewEvent.html',
    controller: 'EditEventController',
  });
  $routeProvider.when('/events', {
    templateUrl: 'templates/EventList.html',
    controller: 'EventListController',
    resolve: {
      events: function(eventData) {
        return eventData.getAllEvents().$promise;
      },
    },
  });
  $routeProvider.when('/event/:eventId',
  {
    templateUrl: 'templates/EventDetails.html',
    controller: 'EventController',
    resolve: {
      event: function($route, eventData) {
        return eventData.getEvent($route.current.pathParams.eventId).$promise;
      },
    },
  });
  $routeProvider.when('/editProfile',
  {
    templateUrl: 'templates/EditProfile.html',
    controller: 'EditProfileController.js',
  });
  $routeProvider.when('/about',
  {
    template: '<center>there\'s really not much about this application, sorry.</center>',
  });
  $routeProvider.otherwise(
  {
    redirectTo: '/events',
    controller: 'MainMenuController',
  });
})
.factory('myCache',
  ($cacheFactory) => {
    return $cacheFactory('myCache', {capacity: 3});
  });
