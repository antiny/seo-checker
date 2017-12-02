'use strict';

const util = require('./util');

module.exports = function(dom) {
    const metaKeywordsExist = util.countTags(dom, "head meta[name=keywords]") > 0;
    if (metaKeywordsExist) {
        return util.success;
    }
    return util.error('meta keywords not found');
};