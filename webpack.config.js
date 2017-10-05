const path = require('path');

//webpack.config.js
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    target: 'node'
};