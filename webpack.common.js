const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'js', 'index.js')
    },

    output: {
        filename:      '[name].[hash].bundle.js',
        chunkFilename: '[id].[chunkhash].chunk.js'
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
};