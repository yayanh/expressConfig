/**
 * Created by LiYN on 2016/12/15.
 */
var webpack = require('webpack');

module.exports = {

    devtool: 'source-map',

    entry: './hello.ts',

    output: {
        filename: 'app.js',
        path: './dist'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }

};