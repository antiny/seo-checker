'use strict';

module.exports = function(dom) {
    const titleTagExist = dom('head title').length > 0;
    if (titleTagExist) {
        return { success: true };
    }
    return { success: false, message: 'title tag not found' };
};