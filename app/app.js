'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.shuffler',
    'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/shuffler'
    });
}])
.constant('_', window._)
.run(['$rootScope', function ($rootScope) {
    $rootScope._ = window._;
}]);
