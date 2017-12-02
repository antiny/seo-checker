'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js');
const rules      = seoChecker.defaultRules;

test('read a file with some custom rules', function (t) {
    t.plan(1);

    seoChecker.check('./sample.html', rules)
        .then(issues => {
            console.log(`issues: ${issues}`);
            t.equal(issues.length, 3, 'should find 3 violations');
        });
});
