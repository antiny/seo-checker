'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js');

test('use default rules', function (t) {
    t.plan(1);

    seoChecker.check('./sample.html')
        .then(issues => {
            t.equal(issues.length, 3, 'should find 3 violations')
        });
});
