'use strict';

const SeoChecker = require('./seo-checker.js');
const rule1 = require('./rules/images-without-alt.js');
const rule2 = require('./rules/links_without_rel.js');

const rules = [rule1, rule2];
const seoTracker = new SeoChecker(rules, './sample.html', 'test');
seoTracker.check();