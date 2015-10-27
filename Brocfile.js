module.exports = 'public';

var Merge = require('broccoli-merge-trees');

module.exports = new Merge(['public', 'bower_components/normalize-css', 'bower_components/font-awesome'], { overwrite: true });
