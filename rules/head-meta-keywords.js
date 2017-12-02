'use strict';

module.exports = function(dom) {
    const metaKeywordsExist = dom("head meta[name=keywords]").length > 0;
    if (metaKeywordsExist) {
        return { success: true };
    }
    return { success: false, message: 'meta keywords not found' };
};