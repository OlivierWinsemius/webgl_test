const path               = require('path');
const webpack            = require('webpack');
const HTMLWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT          = path.resolve(__dirname);
const JS_PATH       = path.resolve(ROOT, 'src', 'js');
const GL_PATH       = path.resolve(ROOT, 'src', 'shaders');
const TEMPLATE_PATH = path.resolve(ROOT, 'src', 'index.html');
const BUILD_PATH    = path.resolve(ROOT, 'build');

const DEV           = process.env.NODE_ENV !== 'production';

module.exports = {
    // STRUCTURE
    entry: path.resolve(JS_PATH, 'app.js'),
    output: {
        filename:   '[name].bundle.js',
        path:       BUILD_PATH
    },

    devServer: {
        contentBase: './src',
        hot:         true
    },

    // LOADERS
    module: {
        rules: [
            {
                test:    /\.js$/,
                include: JS_PATH,
                exclude: /(node_modules|bower_components)/,
                use:     {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env']
                    }
                }
            },
            {
                test:    /\.glsl$/,
                include: GL_PATH,
                loader:  'webpack-glsl-loader'
            }
        ]
    },

    // PLUGINS
    plugins: [
        new CleanWebpackPlugin([
            'build'
        ]),
        new HTMLWebpackPlugin({
            title:    'WebGL Canvas',
            template: TEMPLATE_PATH
        }),
        
        new webpack.DefinePlugin({ DEV }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    
    devtool: DEV ? 'inline-source-map' : 'source-map'
};