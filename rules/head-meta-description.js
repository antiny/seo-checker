'use strict';

module.exports = function(dom) {
    const metaDescriptionExist = dom("head meta[name=description]").length > 0;
    if (metaDescriptionExist) {
        return { success: true };
    }
    return { success: false, message: 'meta description not found not found' };
};