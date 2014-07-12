// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('freshly', [
  'ionic',
  'freshly.factories'
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

  .controller('CapturePhotoController', function ($scope) {
    $scope.getCamera = function () {
      console.log("Photo Button clicked!");
    };
  })

  .controller('CaptureSaveController', function ($scope, Activities) {
    $scope.save = function () {
      Activities.saveActivity($scope.activity).then(function(response) {
        console.log('Activity updated');
      });
      // go back to map view (shows pin)
      console.log("Save Button clicked!");
    };
  });