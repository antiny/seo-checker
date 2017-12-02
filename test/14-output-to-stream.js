'use strict';

const test       = require('tape'),
      seoChecker = require('../seo-checker.js'),
      fs         = require('fs');

test('output to stream', function (t) {
    t.plan(1);

    const output = 'output-2.txt';
    fs.unlink(output, (err) => {
        const writeStream = fs.createWriteStream(output);

        seoChecker.check('./sample.html', seoChecker.defaultRules, writeStream)
            .then(() => { writeStream.end(); })
            .then(() => {
                const data = fs.readFileSync(output, "utf-8");
                t.ok(data.includes('meta keywords not found'));
            });
    });
});
