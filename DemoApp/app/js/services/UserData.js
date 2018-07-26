eventsApp.factory('userData', ($resource) => {
  const res = $resource('/data/user/:userName', {userName: '@userName'});
  return {
    save: (user) => {
      return res.save(user);
    },
  };
});
