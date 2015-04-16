'use strict';

var _ = require('lodash');

describe('my app', function() {

    browser.get('index.html');

    it('should automatically redirect to /shuffler when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/shuffler");
    });


    describe('shuffler', function() {
        var sortButton,
            shuffleButton,
            cards;

        beforeEach(function() {
            browser.get('index.html#/shuffler');
            shuffleButton = element(by.id('shuffle-button'));
            sortButton = element(by.id('sort-button'));
            cards = element.all(by.repeater('card in deck'));
        });

        it('should render shuffler.html when user navigates to /shuffler', function() {
            element.all(by.css('[ng-view] h1')).first().getText().then(function (text) {
                expect(text).toMatch(/Shuffler/);
            });
        });

        describe('shuffle button', function () {
            it('should exist', function () {
                shuffleButton.isPresent().then(function (isPresent) {
                    expect(isPresent).toBe(true);
                });
            });
        });

        describe('sort button', function () {
            it('should exist', function () {
                sortButton.isPresent().then(function (isPresent) {
                    expect(isPresent).toBe(true);
                });
            });
        });

        describe('cards', function () {
            it('should exist', function () {
                cards.count().then(function (count) {
                    expect(count).toBe(52);
                });
            });

            it('should be ordered by clubs, diamonds, hearts, spades', function () {
                cards.all(by.css('.suit')).each(function (el, i) {
                    var suit = el.getAttribute('suit').then(function (suit) {
                        if (i < 13) expect(suit).toBe('clubs');

                        if (i > 12 && i < 26) expect(suit).toBe('diamonds');

                        if (i > 25 && i < 39) expect(suit).toBe('hearts');

                        if (i > 38) expect(suit).toBe('spades');
                    });
                });
            });

            it('should change sort order when shuffle button is clicked', function () {
                var dealt,
                    shuffled,
                    sorted;

                element.all(by.css('.suit')).getAttribute('suit').then(function (suits) {
                        dealt = suits;

                        shuffleButton.click();

                        element.all(by.css('.suit')).getAttribute('suit').then(function(suits) {
                            shuffled = suits;
                            expect(_.isEqual(dealt, sorted)).toBe(false);

                            sortButton.click();

                            element.all(by.css('.suit')).getAttribute('suit').then(function(suits) {
                                sorted = suits;
                                expect(_.isEqual(dealt, sorted)).toBe(true);
                            });
                        });
                    });
            });
        });

    });
});
