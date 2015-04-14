'use strict';

angular.module('myApp.shuffler', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shuffler', {
    templateUrl: 'shuffler/shuffler.html',
    controller: 'ShufflerCtrl'
  });
}])

.controller('ShufflerCtrl', [function() {

}]);