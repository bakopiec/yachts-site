angular
  .module('yachtsSite')
  .controller('indexCtrl', function($rootScope, $scope, $translate) {
    $scope.changeLanguage = function(newLang) {
      $rootScope.lang = newLang;
      $translate.use(newLang);
    }
  });