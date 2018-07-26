'use strict';

eventsApp.controller('EventController',
  function($scope, $anchorScroll, $cookies, $log, $routeParams, $route, eventData) {
  $scope.snippet = '<span style="color:red">hi there!</span>';
  $scope.boolValue = true;
  $scope.mystyle = {color: 'Red'};
  $scope.myclass = 'blue';
  $scope.buttonDisabled = false;
  $scope.sortorder = 'name';

  $scope.reload = () => $route.reload();

  $scope.event = $route.current.locals.event;

  $scope.toggleHide = () => {
    $scope.boolValue = !$scope.boolValue;
  };

  $scope.upVoteSession = (session) => {
    if (Number($cookies.get(session.id)) < 1 ) {
      $cookies.put(session.id, Number($cookies.get(session.id)) + 1);
      session.upVoteCount ++;
    } else {
      console.log('you alraedy upvoted', $cookies.getAll());
    }
  };

  $scope.downVoteSession = (session) => {
    if (Number($cookies.get(session.id)) > -1) {
      $cookies.put(session.id, Number($cookies.get(session.id)) - 1);
      session.upVoteCount --;
    } else {
      console.log('you already downvoted');
    }
  };

  $scope.scrollToSession = () => $anchorScroll();
});
