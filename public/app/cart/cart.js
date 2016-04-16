angular.module('myApp')
.controller('cartController', function($scope, productsFactory) {
  $scope.products = productsFactory.getProductsFromCart;
  $scope.clearCart = productsFactory.clearCart;
});
