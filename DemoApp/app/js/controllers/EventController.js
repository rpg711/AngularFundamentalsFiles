'use strict';

eventsApp.controller('EventController', ($scope, $log, eventData) => {
  $scope.snippet = '<span style="color:red">hi there!</span>';
  $scope.boolValue = true;
  $scope.mystyle = {color: 'Red'};
  $scope.myclass = 'blue';
  $scope.buttonDisabled = false;
  $scope.sortorder = 'name';
  eventData.getEvent((res) => {
    $scope.event = res.data;
  });

  $scope.toggleHide = () => {
    $scope.boolValue = !$scope.boolValue;
  };

  $scope.upVoteSession = (session) => {
    session.upVoteCount ++;
  };

  $scope.downVoteSession = (session) => {
    session.upVoteCount --;
  };
});
