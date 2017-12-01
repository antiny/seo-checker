'use strict';

const fs = require('fs');
const stream = require('stream');
const toString = require('stream-to-string');
const cheerio = require('cheerio');

function _loadDom(source) {
    if (typeof source == 'string') {
        return _domFromFile(source);
    }
    else if (source instanceof stream.Readable) {
        return _domFromStream(source);
    }
    else {

    }
}

function _domFromStream(source) {
    return toString(source).then(data => {
        return cheerio.load(data);
    });
}

function _domFromFile(filepath) {
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
}

module.exports = function (rules, source) {
    return new Promise(function (resolve, reject) {
        _loadDom(source).then(
            dom => {
                const issues = rules.map(rule => rule(dom));
                resolve(issues)
            },
            err => {
                reject(err)
            });
    });
};