'use strict';

const test       = require('tape'),
      request    = require('request'),
      seoChecker = require('../seo-checker.js');
const util       = seoChecker.util;

test('read a web-page', function (t) {
    t.plan(1);

    request('http://www.google.com', function (error, response, body) {
        seoChecker.check(body)
            .then(issues => {
                util.log(issues);
                t.pass();
            }, console.error);
    });
});