angular.module('myApp')
.directive('navBar', function(productsFactory) {
  var restrict = 'E';
  var templateUrl = 'app/nav-bar/navBar.html'
  var directive = {
    restrict: restrict,
    templateUrl: templateUrl,
    link: link
  };

  return directive;

  function link(scope, element, attrs) {
    scope.brandName = attrs.brand;
    scope.getCartTotal = productsFactory.getCartTotal;
  }
});
