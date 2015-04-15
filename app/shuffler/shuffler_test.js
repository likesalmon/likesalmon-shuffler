'use strict';

describe('myApp.shuffler module', function () {

    beforeEach(module('myApp.shuffler'));

    describe('shuffler controller', function (){
        var $scope,
            cardSrvc;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('ShufflerCtrl', { $scope: $scope });
        }));

        it('should exist', function () {
           expect($scope.foo).toBe('bar');
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

        it('should return a single suit', function () {
            var suit = cardSrvc.createSuit('spades');
            expect(typeof suit).toBe('Array');

            suit.forEach(function () {
                // body...
            })
        });
    })
});