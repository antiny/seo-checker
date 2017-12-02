'use strict';

module.exports.countTags = (dom, expression) => {
    return dom(expression).length;
};

module.exports.success = { success: true };
module.exports.error = (message) => { return { success: false, message: message } };
module.exports.log = (issues) => { issues.forEach(i => console.log(`* ${i}`)); };