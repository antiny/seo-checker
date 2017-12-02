'use strict';

module.exports.countTags = (dom, expression) => {
    return dom(expression).length;
};

module.exports.success = { success: true };
module.exports.error = (message) => { return { success: false, message: message } };
