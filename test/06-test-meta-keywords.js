'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js');

const rules = [seoChecker.rules.keywords];

test('check meta keywords does not exist', function (t) {
    t.plan(2);

    seoChecker.check('./fixtures/no-meta-keywords.html', rules)
        .then(issues => {
            t.equal(issues.length, 1, 'should find 1 violation');
            t.equal(issues[0], 'meta keywords not found');
        });
});

test('check meta keywords exists', function (t) {
    t.plan(1);

    seoChecker.check('./fixtures/with-meta-keywords.html', rules)
        .then(issues => {
            t.equal(issues.length, 0);
        });
});
