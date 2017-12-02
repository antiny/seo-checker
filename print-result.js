'use strict';

const fs = require('fs');
const stream = require('stream');

const print = (issues, output) => {
    return new Promise(function (resolve, reject) {
        if (output === undefined) {
            resolve(issues);
        }
        else if (output instanceof stream.Writable) {
            output.write(format(issues));
            resolve(issues);
        }
        else if (output instanceof console.Console) {
            console.log(format(issues));
            resolve(issues);
        }
        else if (typeof output == 'string') {
            fs.writeFile(output, format(issues), function (err, data) {
                if (err) { reject(err); }
                resolve(issues);
            })
        }
        else {
            console.warn(`unsupported output ${output}, skipping write result`);
            resolve(issues);
        }
    });

};

const format = (issues) => {
    return issues.map(s => `* ${s}\n`).join('')
};

module.exports = print;