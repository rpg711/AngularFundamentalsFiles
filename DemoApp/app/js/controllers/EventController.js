'use strict';

eventsApp.controller('EventController', ($scope) => {
  $scope.snippet = '<span style="color:red">hi there!</span>';

  $scope.event = {
    name: 'Angular Boot Camp',
    date: '1/1/2013',
    time: '10:30 am',
    location: {
      address: 'Google Headquarters',
      city: 'Mountain View',
      province: 'CA',
    },
    imageUrl: '/img/angularjs-logo.png',
    sessions: [
      {
        name: 'Directives Masterclass',
        creatorName: 'Bob Smith',
        duration: '1 hr',
        level: 'Advanced',
        abstract: `In this session you will 
        learn the ins and outs of directives`,
        upVoteCount: 0,
      },
      {
        name: 'Scopes for fun and profit',
        creatorName: 'Jon Doe',
        duration: '30 mins',
        level: 'Introductory',
        abstract: 'This session more scopes',
        upVoteCount: 0,
      },
      {
        name: 'Well behaved controllers',
        creatorName: 'Jane Doe',
        duration: '2 hours',
        level: 'Intermediate',
        abstract: 'You like well behaved controllers?',
        upVoteCount: 0,
      },
    ],
  };

  $scope.upVoteSession = (session) => {
    session.upVoteCount ++;
  };

  $scope.downVoteSession = (session) => {
    session.upVoteCount --;
  };
});
