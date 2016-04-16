angular.module('myApp', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/store');
  $stateProvider
    .state('store', {
      url: '/store',
      templateUrl: 'app/store-front/storeFront.html'
    })
    .state('product', {
      url: '/product/:productId',
      templateUrl: 'app/product/product.html',
      controller: 'storeController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: 'app/cart/cart.html'
    })
});
