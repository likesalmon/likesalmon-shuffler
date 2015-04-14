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
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for view 1/);
        });

    });
});
