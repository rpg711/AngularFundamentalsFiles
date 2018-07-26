'use strict';

eventsApp.controller('EditEventController', ($scope, eventData) => {
  $scope.saveEvent = (e, newEventForm) => {
    console.log(newEventForm);
    if (newEventForm.$valid) {
      eventData.save(e).$promise.then(
        ()=> console.log('event save success : ', e),
        ()=> console.log('event save failure : ', e)
        );
    }
  };

  $scope.cancelEdit = () => {
    window.location = '/EventDetails.html';
  };
});
