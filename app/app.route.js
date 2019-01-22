angular
  .module('yachtsSite')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeCtrl',
        templateUrl: 'core/home/home.tpl.html'
      });
  });