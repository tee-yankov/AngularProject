angular.module('myApp', []);

angular.module('myApp')
.controller('registrationController', function($scope) {
})
.directive('loginForm', function() {
  var directive = {
    restrict: 'E',
    link: link,
    template: '<form ng-submit="submitHandler()"><input type="text" ng-model="user.username"><input type="password" ng-model="user.password"><input type="submit" value="Submit"></form>'
  };

  return directive;

  function link(scope, element, attrs) {
    scope.submitHandler = function() {
      console.log(scope.user);
    }
  }
});
