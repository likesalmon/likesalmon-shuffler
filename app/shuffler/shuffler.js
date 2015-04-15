'use strict';

var app = angular.module('myApp.shuffler', ['ngRoute', 'ngLodash']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shuffler', {
        templateUrl: 'shuffler/shuffler.html',
        controller: 'ShufflerCtrl'
    });
}]);

app.factory('cardSrvc', ['lodash', function (lodash) {
    var createSuit = function (suit) {
        return [
            {
                face: 'A',
                suit: suit,
                order: '1'
            },
            {
                face: '2',
                suit: suit,
                order: '2'
            },
            {
                face: '3',
                suit: suit,
                order: '3'
            },
            {
                face: '4',
                suit: suit,
                order: '4'
            },
            {
                face: '5',
                suit: suit,
                order: '5'
            },
            {
                face: '6',
                suit: suit,
                order: '6'
            },
            {
                face: '7',
                suit: suit,
                order: '7'
            },
            {
                face: '8',
                suit: suit,
                order: '8'
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

        angular.forEach(suits, function (suit, i) {
            deck = deck.concat(createSuit(suit));
        });

        return deck;
    };

    var shuffle = function (deck) {
        return lodash.shuffle(deck);
    };

    var sort = function () {

    };

    return {
        createSuit: createSuit,
        createDeck: createDeck,
        shuffle: shuffle,
        sort: sort
    };
}]);

app.directive('shufflerSuit', [function () {
    return {
        restrict: 'E',
        scope: {
            suit: '@'
        },
        replace: true,
        template: '<div class="{{color}}">{{face}}</div>',
        link: function (scope, element, attrs) {
            var suits = {
                'clubs': {
                    char: '\u2663',// '&clubs;',
                    color: 'red'
                },
                'spades': {
                    char: '\u2660',
                    color: 'black'
                },
                'hearts': {
                    char: '\u2665',
                    color: 'red'
                },
                'diamonds': {
                    char: '\u2666',
                    color: 'red'
                }
            };

            scope.face = suits[attrs.suit].char;
            scope.color = suits[attrs.suit].color;
        }
    };
}]);

app.controller('ShufflerCtrl', ['$scope', 'cardSrvc', function($scope, cardSrvc) {
    $scope.deck = cardSrvc.createDeck();
    // $scope.shuffle = cardSrvc.shuffle();
    // $scope.sort = cardSrvc.sort();
}]);
