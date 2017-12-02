'use strict';

module.exports = function(dom) {
    var linksWithoutRel = dom('a:not([rel])');
    if (linksWithoutRel.length > 0) {
        return { success: false, message: `${linksWithoutRel.length} links do not have rel attribute` };
    }
    return { success: true };
};