angular.module('myApp')
.controller('homeController', function($scope) {
  $scope.currentRoute = location.hash;

  window.addEventListener('hashchange', function() {
    if (!$scope.$$phase) {
      $scope.$apply(function() {
        $scope.currentRoute = location.hash;
      });
    }
  });
});
