'use strict';

const util = require('./util');

module.exports = function(dom) {
    const titleTagExist = util.countTags(dom, 'head title') > 0;
    if (titleTagExist) {
        return util.success;
    }
    return util.error('title tag not found');
};