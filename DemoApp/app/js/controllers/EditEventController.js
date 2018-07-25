'use strict';

eventsApp.controller('EditEventController', ($scope) => {
  $scope.saveEvent = (e, newEventForm) => {
    console.log(newEventForm);
    if (newEventForm.$valid) {
      window.alert('event ' + e.name + ' saved!');
    }
  };

  $scope.cancelEdit = () => {
    window.location = '/EventDetails.html';
  };
});
