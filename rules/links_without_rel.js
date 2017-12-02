'use strict';

const util = require('./util');

module.exports = function(dom) {
    var imageWithoutAlt = util.countTags(dom, 'img:not([alt])');
    if (imageWithoutAlt > 0) {
        return util.error(`${imageWithoutAlt} images do not have alt attribute`);
    }
    return util.success;
};