const webpack           = require('webpack');
const path              = require('path');
const merge             = require('webpack-merge');
const UglifyPlugin      = require('uglifyjs-webpack-plugin');
const common            = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist', 'prod')
    },

    plugins: [
        new UglifyPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
    ]
});