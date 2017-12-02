'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js');

const util       = seoChecker.util;
const rule = (dom) => {
    if (util.countTags(dom, "head meta[name=robots]") > 0) {
        return util.success;
    }
    return util.error('robots meta tag not found');
};

const rules = [rule];

test('with robots meta tag', function (t) {
    t.plan(1);

    seoChecker.check('./fixtures/with-robot-meta-tag.html', rules)
        .then(issues => {
            t.equal(issues.length, 0);
        });
});

test('no robots meta tag', function (t) {
    t.plan(1);

    seoChecker.check('./fixtures/no-robot-meta-tag.html', rules)
        .then(issues => {
            t.equal(issues.length, 1);
        });
});
