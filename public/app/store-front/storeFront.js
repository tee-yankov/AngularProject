angular.module('myApp')
.controller('storeFrontController', function($scope, $http) {
  $scope.products = [];
  $http.get('http://beta.json-generator.com/api/json/get/41IRga-kW')
  .then(function(response) {
    console.log(response);
    $scope.products = response.data;
  });
});
