const webpack = require('webpack');
const merge   = require('webpack-merge');
const path    = require('path');
const common  = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist', 'dev')
    },
    
    devtool: 'eval-source-map',

    devServer: {
        hot:              true,
        contentBase:      path.resolve(__dirname, 'dist', 'dev'),
        watchContentBase: true
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
    ]
});