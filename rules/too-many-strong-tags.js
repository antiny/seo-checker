'use strict';

const countStrongTags = (dom, options = { strongTagLimit: 15 }) => {
    var strongTags = dom('strong').length;
    if (strongTags > options.strongTagLimit) {
        return {
            success: false,
            message: `${strongTags} strong tags found, more than a good limit at ${options.strongTagLimit}`
        };
    }
    return { success: true };
};

module.exports = countStrongTags;
