'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    browser.get('index.html');

    it('should automatically redirect to /shuffler when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/shuffler");
    });


    describe('shuffler', function() {

        beforeEach(function() {
            browser.get('index.html#/shuffler');
        });

        it('should render shuffler.html when user navigates to /shuffler', function() {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
            toMatch(/Shuffler/);
        });

        describe('shuffle button', function () {
            var shuffleButton = element(by.id('shuffle-button'));
            expect(shuffleButton.isPresent()).toBe(true);
        });

        describe('sort button', function () {
            var sortButton = element(by.id('shuffle-button'));
            expect(sortButton.isPresent()).toBe(true);
        });

        describe('cards', function () {
            var cards = element.all(by.repeater('card in deck'));

            it('should have 52 cards', function () {
                expect(cards.count()).toBe(52);
            });

            it('should be ordered by clubs, diamonds, hearts, spades', function () {
                cards.all(by.css('.suit')).each(function (el, i) {
                    var suit = el.getAttribute('suit');

                    if (i < 13) expect(suit).toBe('clubs');

                    if (i > 12 && i < 26) expect(suit).toBe('diamonds');

                    if (i > 25 && i < 39) expect(suit).toBe('hearts');

                    if (i > 38) expect(suit).toBe('spades');
                });
            });
        });

    });
});
