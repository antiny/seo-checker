'use strict';

const util = require('./util');

module.exports = function(dom) {
    var linksWithoutRel = util.countTags(dom, 'a:not([rel])');
    if (linksWithoutRel > 0) {
        return util.error(`${linksWithoutRel.length} links do not have rel attribute`);
    }
    return util.success;
};