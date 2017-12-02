'use strict';

const test       = require('tape'),
    seoChecker = require('../seo-checker.js');

test('output to console', function (t) {
    t.plan(1);

    seoChecker.check('./sample.html', seoChecker.defaultRules, console)
        .then(() => {
            t.pass();
        });
});
