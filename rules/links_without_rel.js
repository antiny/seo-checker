'use strict';

module.exports = function(dom) {
    var imageWithoutAlt = dom('img:not([alt])');
    if (imageWithoutAlt.length > 0) {
        return `${imageWithoutAlt.length} images do not have alt attribute`;
    }
    return 'no issues';
};