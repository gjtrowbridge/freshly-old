angular.module('app.main', [])


.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('app.main', {
      url: '/main',
      templateUrl: 'app/main/main.tmpl.html'
    })
    $urlRouterProvider.otherwise('/app');
})