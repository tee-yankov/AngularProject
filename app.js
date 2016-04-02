angular.module('myApp', []);

angular.module('myApp')
.controller('myFirstController', function($scope, $interval) {
  $scope.hello = 0;
  $interval(function () {
    $scope.hello += 1;
  }, 100);
});
