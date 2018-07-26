eventsApp.factory('eventData', ($resource) => {
  const resource = $resource('/data/event/:id', {id: '@id'});
  return {
    getEvent: (id) => {
      return resource.get({id: id});
    },
    save: (event) => {
      return resource.save(event);
    },
    getAllEvents: () => {
      return resource.query();
    },
  };
});
