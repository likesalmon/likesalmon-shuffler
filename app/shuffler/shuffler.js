'use strict';

var app = angular.module('myApp.shuffler', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shuffler', {
        templateUrl: 'shuffler/shuffler.html',
        controller: 'ShufflerCtrl'
    });
}])

app.factory('cardSrvc', [function () {
    var createSuit = function (suit) { 
        return [
            {
                face: 'A',
                suit: suit,
                order: 1
            },
            {
                face: '2',
                suit: suit,
                order: 2
            },
            {
                face: '3',
                suit: suit,
                order: 3
            },
            {
                face: '4',
                suit: suit,
                order: 4
            },
            {
                face: '5',
                suit: suit,
                order: 5
            },
            {
                face: '6',
                suit: suit,
                order: 6
            },
            {
                face: '7',
                suit: suit,
                order: 7
            },
            {
                face: '8',
                suit: suit,
                order: 8
            },
            {
                face: '9',
                suit: suit,
                order: '9'
            },
            {
                face: '10',
                suit: suit,
                order: 'a'
            },
            {
                face: 'J',
                suit: suit,
                order: 'b'
            },
            {
                face: 'Q',
                suit: suit,
                order: 'd'
            },
            {
                face: 'K',
                suit: suit,
                order: 'e'
            }
        ];
    };

    var suits = ['spades', 'hearts', 'clubs', 'diamonds'];

    var createDeck = function () {
        var deck = [];

        _.foreach(suits, function (suit, i) {
            deck.push(createSuit(suit));
        });

        return deck();
    }

    return {
        createSuit: createSuit,
        createDeck: createDeck
    }
}])

app.controller('ShufflerCtrl', ['$scope', function($scope) {
    $scope.foo = 'bar';
}])

// .directive('shufflerSuit', [function () {
    
// }]);