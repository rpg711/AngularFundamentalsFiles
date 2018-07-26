'use strict';

eventsApp.controller('CompileSampleController',
  ($scope, $compile, $parse) => {
    let fn = $parse('1 + 2');
    console.log(fn());

    let getter = $parse('event.name');

    let context1 = {event: {name: 'AngularJS Boot Camp'}};
    let context2 = {event: {name: 'Code Camp'}};

    console.log(getter(context1));
    console.log(getter(context2));

    console.log(getter(context2, context1));

    let setter = getter.assign;
    setter(context2, 'Code Retreat');

    console.log(context2.event.name);

    $scope.appendDivToElement = (markup) => {
      return $compile(markup)($scope).appendTo(angular.element('#appendHere'));
    };
  }
);
