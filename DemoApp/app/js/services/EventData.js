eventsApp.factory('eventData', ($http, $log) => {
  return {
    getEvent: (successcb) => {
      $http({method: 'GET', url: '/data/event/1'}).
      then((data, status, hdr, cfg) => {
        successcb(data);
      }, (data, status, hdr, cfg) => {
        $log.warn(data, status, hdr(), cfg);
      });
    },
  };
});
