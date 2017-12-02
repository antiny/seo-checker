'use strict';

const util = require('./util');

module.exports = function(dom) {
    const metaDescriptionExist = util.countTags(dom, "head meta[name=description]") > 0;
    if (metaDescriptionExist) {
        return util.success;
    }
    return util.error('meta description not found');
};