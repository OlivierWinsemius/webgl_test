const path               = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'js', 'index.js')
    },

    output: {
        filename:      '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test:    /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['dynamic-import-webpack'],
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