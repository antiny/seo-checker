'use strict';

module.exports = function(dom) {
    var linksWithoutRel = dom('a:not([rel])');
    if (linksWithoutRel.length > 0) {
        return `${linksWithoutRel.length} links do not have rel attribute`;
    }
    return 'no issues';
};