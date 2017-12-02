'use strict';

const fs = require('fs');
const stream = require('stream');
const toString = require('stream-to-string');
const cheerio = require('cheerio');

const loadDom = (source) => {
    if (typeof source == 'string') {
        if (source.endsWith('.html')) {
            return _domFromFile(source);
        }
        return _domFromString(source);
    }
    else if (source instanceof stream.Readable) {
        return _domFromStream(source);
    }
    else {
        return Promise.reject('not supported source');
    }
};

const _domFromString = (source) => {
    return Promise.resolve(_buildDom(source));
};

const _domFromStream = (source) => {
    return toString(source).then(data => {
        return _buildDom(data);
    });
};

const _domFromFile = (filepath) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(_buildDom(data));
            }
        })
    });
};

const _buildDom = (data) => {
    return cheerio.load(data.toLowerCase());
};

module.exports = loadDom;