var app = angular.module("index", ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: '/pages/home/home.html',
      controller: 'MainController'
    }).
    when('/about', {
      templateUrl: 'pages/about/about.html',
      controller: 'MainController'
    }).
    when('/services', {
      templateUrl: '/pages/services/services.html',
      controller: 'ServicesController'
    }).
    when('/contact', {
      templateUrl: '/pages/contact/contact.html',
      controller: 'ContactController'
    }).
    otherwise({
      redirectTo: '/'
    })
  }])
  .controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $http.get('pages/services/services.json').then(function (response) {
      $scope.services = response.data;
    })
  }])
  .controller('ServicesController', ['$scope', '$http', function ($scope, $http) {
    $http.get('pages/services/services.json').then(function (response) {
      $scope.services = response.data;
    })
  }])
  .controller('ContactController', ['$scope', '$http', function ($scope, $http) {
    $http.get('pages/contact/locations.json').then(function (response) {
      $scope.locations = response.data;
    })
  }]);