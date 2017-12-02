'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js'),
      fs = require('fs');

test('read a stream', function (t) {
    t.plan(1);

    const source = fs.createReadStream('./sample.html');

    seoChecker.check(source)
        .then(issues => {
            t.equal(issues.length, 2, 'should find 2 violation')
        });
});