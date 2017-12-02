'use strict';

const util = require('./util');

const countStrongTags = (dom, options = { strongTagLimit: 15 }) => {
    var strongTags = util.countTags(dom, 'strong');
    if (strongTags > options.strongTagLimit) {
        return util.error(`${strongTags} strong tags found, more than a good limit at ${options.strongTagLimit}`);
    }
    return util.success;
};

module.exports = countStrongTags;
