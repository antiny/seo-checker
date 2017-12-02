/**
 * read a file with some custom rules
 */

'use strict';

const seoCheck = require('./seo-checker.js');
const rule1 = require('./rules/images-without-alt.js');
const rule2 = require('./rules/links_without_rel.js');

const rules = [rule1, rule2];

seoCheck('./sample.html', rules)
    .then(issues => {
        if (issues.length == 0) {
            console.log('No SEO violations found');
        }
        else {
            console.log(`${issues}`);
        }
    });
