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

        describe('cards', function () {
            var cards = element.all(by.repeater('card in deck'));

            it('should have 52 cards', function () {
                expect(cards.count()).toBe(52);
            });
        });

    });
});
