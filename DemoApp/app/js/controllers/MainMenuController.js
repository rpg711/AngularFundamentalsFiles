'use strict';

eventsApp.controller('MainMenuController', function($scope, $location){
  $scope.createEvent = () => {
    $location.replace();
    $location.url('newEvent');
  }
});
