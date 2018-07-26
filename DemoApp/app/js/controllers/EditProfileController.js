'use strict';

eventsApp.controller('EditProfileController',
  ($scope, gravatarUrlBuilder, userData) => {
    $scope.user = {};
    $scope.forms = {};

    $scope.getGravatarUrl = (email) =>
      gravatarUrlBuilder.buildGravatarUrl(email);

    $scope.saveUser = (user) => {
      if ($scope.forms.profileForm.$valid) {
        console.log('saving user');
        userData.save(user).$promise.then(
          () => console.log('user save success'),
          () => console.log('user save failure'));
      }
    };
  });
