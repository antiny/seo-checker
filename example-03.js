/**
 * read a stream
 */

'use strict';

const fs = require('fs');
const seoCheck = require('./seo-checker.js');
const rules = require('./rules');

const source = fs.createReadStream('./sample.html');

seoCheck(rules, source)
    .then(issues => {
        if (issues.length == 0) {
            console.log('No SEO violations found');
        }
        else {
            console.log(`${issues}`);
        }
    });
