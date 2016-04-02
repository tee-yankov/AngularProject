angular.module('myApp', []);

angular.module('myApp')
.controller('homeController', function($scope) {

})
.directive('movieSearch', function($http) {
  var directive = {
    restrict: 'E',
    link: link,
    templateUrl: 'app/movie-search/movieSearch.html'
  };

  return directive;

  function link(scope) {
    scope.submitHandler = function(query) {
      $http.get('http://www.omdbapi.com/?s=' + query)
      .then(function(response) {
        console.log(response.data);
        scope.results = response.data.Search;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
})
.directive('loginForm', function() {
  var directive = {
    restrict: 'E',
    link: link,
    templateUrl: 'app/login-form/loginForm.html'
  };

  return directive;

  function link(scope, element, attrs) {
    scope.submitHandler = function() {
      console.log(scope.user);
    }
  }
});
