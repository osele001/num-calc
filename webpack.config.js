var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/entry.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};