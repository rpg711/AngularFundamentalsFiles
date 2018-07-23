'use strict';

/**
 * @ngdoc overview
 * @name demoAppApp
 * @description
 * # demoAppApp
 *
 * Main module of the application.
 */
angular
  .module('demoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
