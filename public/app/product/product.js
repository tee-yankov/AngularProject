angular.module('myApp')
.controller('storeController', storeController);

function storeController($scope, $stateParams, productsFactory) {
  console.log($stateParams);
  $scope.productId = $stateParams.productId;
  $scope.product = productsFactory.getProductById;
  $scope.addToCart = productsFactory.addToCart;
}
