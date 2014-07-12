angular.module('freshly.factories', [])

  .factory('Activities', function ($http) {
    return {
      saveActivity: function(activity) {
        return $http({
          method: 'POST',
          // JASEN: Don't know what URL for below
          url: 'http://fresh.ly/api/activities',
          data: activity,
          dataType: 'json'
        });
      }
    };
  });