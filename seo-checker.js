'use strict';

const _ = require('lodash');
const loadDom = require('./dome-loader.js');
const printResult = require('./print-result.js');

const util = require('./rules/util.js');
const rulesMap = require('./rules');
const defaultRules = _.values(rulesMap);

const check = (source, rules = defaultRules, output = null) => {
    return loadDom(source)
            .then(dom => {
                return rules.map(rule => rule(dom))
                            .filter(result => result.success == false)
                            .map(result => result.message);
            })
            .then(issues => {
                return printResult(issues, output);
            });
};

module.exports = { check: check, rules: rulesMap, defaultRules: defaultRules, util: util };
