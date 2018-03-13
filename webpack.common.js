const path               = require('path');
const webpack            = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'js', 'index.js')
    },

    output: {
        filename:      '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js'
    },

    resolve: {
        alias: {
            shaders: path.resolve(__dirname, 'src', 'shaders')
        }
    },
    
    module: {
        rules: [
            {
                test:    /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['syntax-dynamic-import'],
                        presets: ['env']
                    }
                }
            },
            {
                test:    /\.glsl$/,
                exclude: /(node_modules|bower_components)/,
                loader:  'webpack-glsl-loader'
            }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
};