'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js');

const rules = [seoChecker.rules.title];

test('check title tag not exist', function (t) {
    t.plan(2);

    seoChecker.check('./fixtures/no-title.html', rules)
        .then(issues => {
            t.equal(issues.length, 1, 'should find 1 violation');
            t.equal(issues[0], 'title tag not found');
        });
});

test('check title tag exist', function (t) {
    t.plan(1);

    seoChecker.check('./fixtures/with-title.html', rules)
        .then(issues => {
            t.equal(issues.length, 0);
        });
});
