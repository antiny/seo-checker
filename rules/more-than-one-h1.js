'use strict';

const util = require('./util');

module.exports = (dom) => {
    if (util.countTags(dom, 'h1') > 1) {
        return util.error('More than one H1 tag found');
    }
    return util.success;
};
