'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js');

test('handle error', function (t) {
    t.plan(1);

    seoChecker.check('./no-exist-file.html')
        .then(console.log, function (err) {
            console.log(`error: ${err}`);
            t.pass();
        });
});

test('handle undefined source', function (t) {
    t.plan(1);

    seoChecker.check(undefined)
        .then(console.log, function (err) {
            console.log(`error: ${err}`);
            t.pass();
        });
});