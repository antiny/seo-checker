'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js');

const rules = [seoChecker.rules.h1];

test('one H1 tag', function (t) {
    t.plan(1);

    seoChecker.check('./fixtures/only-one-h1.html', rules)
        .then(issues => {
            t.equal(issues.length, 0);
        });
});

test('two H1 tags', function (t) {
    t.plan(2);

    seoChecker.check('./fixtures/two-h1.html', rules)
        .then(issues => {
            t.equal(issues.length, 1);
            t.equal(issues[0], 'More than one H1 tag found');
        });
});

test('zero H1 tag', function (t) {
    t.plan(1);

    seoChecker.check('./fixtures/zero-h1.html', rules)
        .then(issues => {
            t.equal(issues.length, 0);
        });
});
