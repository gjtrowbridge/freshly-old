angular.module('freshly.map', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app.map', {
      url: "/map",
      view: {
        'app-map': {
          templateUrl: 'app/controllers_views/map/app-map.html',
          controller: 'MapController'
        }
      }
    });
})

.controller('MapController', function($scope) {

})