/**
 * read a file
 */

'use strict';

const seoCheck = require('./seo-checker.js');
const rules = require('./rules');

seoCheck('./sample.html', rules)
    .then(issues => {
        if (issues.length == 0) {
            console.log('No SEO violations found');
        }
        else {
            console.log(`${issues}`);
        }
    });
