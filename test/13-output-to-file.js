'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js'),
      fs         = require('fs');

test('output to file', function (t) {
    t.plan(1);

    const output = 'output.txt';
    fs.unlink(output, (err) => {
        seoChecker.check('./sample.html', seoChecker.defaultRules, output)
            .then(() => {
                const data = fs.readFileSync(output, "utf-8");
                t.ok(data.includes('meta keywords not found'));
            });
    });
});
