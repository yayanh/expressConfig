/**
 * Created by LiYN on 2016/12/15.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {

    devtool: 'source-map',

    entry: {
        '/dist/app':'./app/main.ts',
        '/dist/polyfills': './ts/polyfills.ts',
        '/dist/vendor': './ts/vender.ts',
        '/dist/hello':'./hello.ts'
    },

    output: {
        filename: '[name].js',
        path: './public/'
    },

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },{
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};