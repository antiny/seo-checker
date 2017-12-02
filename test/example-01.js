'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js'),
      rule1      = require('../rules/images-without-alt.js');

const rules = [rule1];

test('read a file with some custom rules', function (t) {
    t.plan(1);

    seoChecker.check('./sample.html', rules)
        .then(issues => {
            t.equal(issues.length, 1, 'should find 1 violation')
        });
});
