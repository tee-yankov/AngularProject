angular.module('myApp')
.controller('storeFrontController', function($scope, $http, productsFactory) {
  $scope.products = productsFactory.getProducts;
  $scope.addToCart = productsFactory.addToCart;
});
