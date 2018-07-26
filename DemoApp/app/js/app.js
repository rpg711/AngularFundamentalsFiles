'use strict';

const eventsApp = angular.module('eventsApp', ['ngCookies', 'ngResource'])
  .factory('myCache',
    ($cacheFactory) => {
      return $cacheFactory('myCache', {capacity: 3});
    });

