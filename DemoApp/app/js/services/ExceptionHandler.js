'use strict';

eventsApp.factory('$exceptionHandler', () => {
  return (e) => {
    console.log('Handled Exception : ' + e.message);
  };
});
