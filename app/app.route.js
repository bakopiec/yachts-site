angular
  .module('yachtsSite')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeCtrl',
        templateUrl: 'core/home/home.tpl.html'
      })
      .when('/contact', {
        controller:'contactCtrl',
        templateUrl:'core/contact/contact.tpl.html'
      })
      .otherwise({
          redirectTo: '/'
      });
  
      $locationProvider.html5Mode(true);
  });