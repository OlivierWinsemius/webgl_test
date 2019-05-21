const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'js', 'index.js'),
    },

    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].[chunkhash].chunk.js',
    },

    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src', 'images'),
        },
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                }],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.glsl$/,
                exclude: /node_modules/,
                loader: 'webpack-glsl-loader',
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]',
                    },
                }],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
};
