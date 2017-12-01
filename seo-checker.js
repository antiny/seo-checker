'use strict';

const fs = require('fs');
const toString = require('stream-to-string');
const cheerio = require('cheerio');

module.exports = class SeoChecker {
    constructor(rules, source, destination) {
        this.rules = rules;
        this.source = source;
        this.destination = destination;
    }

    check() {
        const _self = this;
        this._loadDom()
            .then(function(dom) {
                const issues = _self.rules.map(rule => { return rule(dom) });
                _self._print(issues)
            });
    }

    _loadDom() {
        if (typeof this.source == 'string') {
            return this._domFromFile(this.source);
        }
        else if (this.source instanceof stream.Readable) {
            return this._domFromStream(this.source);
        }
        else {
            
        }
    }

    _domFromStream(source) {
        return toString(source, function (err, data) {
            if (err) { reject(err); }
            else {
                const $ = cheerio.load(data);
                resolve($);
            }
        });
    }

    _domFromFile(filepath) {
        return new Promise(function (resolve, reject) {
            fs.readFile(filepath, 'utf-8', (err, data) => {
                if (err) { reject(err); }
                else {
                    const $ = cheerio.load(data);
                    resolve($);
                }
            })
        });
    }

    _print(issues) {
        console.log(issues);
    }
};