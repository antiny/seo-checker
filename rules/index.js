'use strict';

module.exports = {
    'images':       require('./images-without-alt.js'),
    'links':        require('./links_without_rel.js'),
    'title':        require('./head-title-tag.js'),
    'desc':         require('./head-meta-description.js'),
    'keywords':     require('./head-meta-keywords.js'),
    'strongTags':   require('./too-many-strong-tags.js'),
    'h1':           require('./more-than-one-h1.js')
};