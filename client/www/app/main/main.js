angular.module('app.main', [])


.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('app.states', {
      url: '/main',
      templateUrl: 'app/main/main.tmpl.html'
    })
    $urlRouterProvider.otherwise('/app');
})
