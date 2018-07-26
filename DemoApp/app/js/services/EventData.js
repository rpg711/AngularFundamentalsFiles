eventsApp.factory('eventData', ($resource) => {
  const resource = $resource('/data/event/:id', {id: '@id'});
  return {
    getEvent: () => {
      return resource.get({id: 1});
    },
    save: (event) => {
      return resource.save(event);
    },
  };
});
