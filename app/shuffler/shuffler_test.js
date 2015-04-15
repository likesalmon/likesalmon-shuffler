'use strict';

describe('myApp.shuffler module', function () {

    beforeEach(module('myApp.shuffler'));

    describe('shuffler controller', function (){
        var $scope,
            cardSrvc;

        beforeEach(inject(function ($rootScope, $controller, $injector) {
            $scope = $rootScope.$new();
            cardSrvc = $injector.get('cardSrvc');
            $controller('ShufflerCtrl', {
                $scope: $scope,
                cardSrvc: cardSrvc
            });

        }));

        it('should have a deck property', function () {
            expect($scope.deck).toBeDefined();
        });

    });


    describe('cardSrvc', function () {
        var cardSrvc;

        beforeEach(inject(function ($injector) {
            cardSrvc = $injector.get('cardSrvc');
        }));

        it('should exist', function () {
            expect(!!cardSrvc).toBe(true);
        });

        describe('createSuit()', function () {
            it('should return a single suit', function () {
                var suit = cardSrvc.createSuit('spades');
                expect(suit instanceof Array).toBe(true);
                expect(suit.length).toBe(13);

                suit.forEach(function (card) {
                    expect(card.face).toBeDefined();
                    expect(typeof card.face).toBe('string');
                    expect(card.suit).toBeDefined();
                    expect(typeof card.suit).toBe('string');
                    expect(card.order).toBeDefined();
                    expect(typeof card.order).toBe('string');
                });
            });
        });

        describe('createDeck()', function () {
            it('should return a deck of 52 cards', function () {
                var deck = cardSrvc.createDeck();
                expect(deck instanceof Array).toBe(true);
                expect(deck.length).toBe(52);

                deck.forEach(function (card) {
                    expect(card.face).toBeDefined();
                    expect(typeof card.face).toBe('string');
                    expect(card.suit).toBeDefined();
                    expect(typeof card.suit).toBe('string');
                    expect(card.order).toBeDefined();
                    expect(typeof card.order).toBe('string');
                });
            });
        });

        describe('shuffle()', function () {
            it('should randomize the order of cards in a deck', function () {
                var deck = cardSrvc.getDeck();
                cardSrvc.shuffle();
                expect(_.isEqual(deck, cardSrvc.getDeck())).toBe(false);
            });
        });

        describe('sort()', function () {
            it('should re-order the cards in a deck', function () {
                var deck = cardSrvc.getDeck();
                cardSrvc.shuffle();
                cardSrvc.sort();

                expect(_.isEqual(deck, cardSrvc.getDeck())).toBe(true);
            });
        });
    });

});
