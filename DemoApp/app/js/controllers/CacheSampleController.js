'use strict';

eventsApp.controller('CacheSampleController', ($scope, myCache) => {
  $scope.addToCache = (k, v) => {
    myCache.put(k, v);
  };

  $scope.readFromCache = (k) => {
    return myCache.get(k);
  };

  $scope.getCacheStats = () => {
    return myCache.info();
  };
});
