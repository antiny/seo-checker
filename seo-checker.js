'use strict';

const fs = require('fs');
const stream = require('stream');
const toString = require('stream-to-string');
const cheerio = require('cheerio');
const defaultRules = require('./rules');

const _loadDom = (source) => {
    if (typeof source == 'string') {
        return _domFromFile(source);
    }
    else if (source instanceof stream.Readable) {
        return _domFromStream(source);
    }
    else {
        return Promise.reject('not supported source');
    }
};

const _domFromStream = (source) => {
    return toString(source).then(data => {
        return cheerio.load(data);
    });
};

const _domFromFile = (filepath) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                const $ = cheerio.load(data);
                resolve($);
            }
        })
    });
};

const check = (source, rules = defaultRules) => {
    return new Promise(function (resolve, reject) {
        _loadDom(source).then(
            dom => {
                const issues = rules.map(rule => rule(dom))
                                    .filter(result => result.success == false)
                                    .map(result => result.message);
                resolve(issues)
            },
            err => {
                reject(err)
            });
    });
};

module.exports = { check: check, rules: defaultRules };
