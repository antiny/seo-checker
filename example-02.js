'use strict';

const seoCheck = require('./seo-checker.js');
const rules = require('./rules');

seoCheck(rules, './sample.html')
    .then(issues => {
        if (issues.length == 0) {
            console.log('No SEO violations found');
        }
        else {
            console.log(`${issues}`);
        }
    });
