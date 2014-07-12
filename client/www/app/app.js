// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('app', [
//   'ionic',
//   'app.main'
// ])

angular.module('app', [
  'ionic',
  'leaflet-directive'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'index.html'
    });
    $urlRouterProvider.otherwise('/app');
})

.controller('mapController', function($scope,$log) {

    var layer = L.mapbox.tileLayer('jakecadams.io9ec4o2');
      layer.on('error', function(err) {
      // Handle error
    });
});