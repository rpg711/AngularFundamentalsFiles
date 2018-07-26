'use strict';

eventsApp.controller('EventController',
  ($scope, $anchorScroll, $log, eventData) => {
  $scope.snippet = '<span style="color:red">hi there!</span>';
  $scope.boolValue = true;
  $scope.mystyle = {color: 'Red'};
  $scope.myclass = 'blue';
  $scope.buttonDisabled = false;
  $scope.sortorder = 'name';

  $scope.event = eventData.getEvent().$promise
    .then((e) => {
      $scope.event = e;
      $log.info(e);
    })
    .catch((err) => $log.error(err));

  $scope.toggleHide = () => {
    $scope.boolValue = !$scope.boolValue;
  };

  $scope.upVoteSession = (session) => {
    session.upVoteCount ++;
  };

  $scope.downVoteSession = (session) => {
    session.upVoteCount --;
  };

  $scope.scrollToSession = () => $anchorScroll();
});
