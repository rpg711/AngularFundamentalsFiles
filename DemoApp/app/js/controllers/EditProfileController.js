'use strict';

eventsApp.controller('EditProfileController',
    ($scope, gravatarUrlBuilder) => {
        $scope.user = {};

        $scope.getGravatarUrl = (email) =>
                gravatarUrlBuilder.buildGravatarUrl(email);
    }
);
