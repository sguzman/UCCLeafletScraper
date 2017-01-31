let path = require('path');

module.exports = {
    entry: './app/js/churches.js',
    output: {
        path: './app/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js']
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};