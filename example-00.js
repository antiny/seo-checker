/**
 * use default rules
 */

'use strict';

const seoCheck = require('./seo-checker.js');

seoCheck('./sample.html')
    .then(issues => {
        if (issues.length == 0) {
            console.log('No SEO violations found');
        }
        else {
            console.log(`${issues}`);
        }
    });
