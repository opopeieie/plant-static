var precss = require('precss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var cssnano = require('cssnano');
var Ex = require('extract-text-webpack-plugin');
var webpack = require('webpack');
const path = require('path');
const root = path.resolve(__dirname, '.');//根目录



module.exports = {
    entry:{
        foundation:path.join(__dirname, 'plant/src/styles/foundation.css'),
        test:path.join(__dirname, 'plant/src/styles/test.css')
    },
    output: {
        path: path.join(root, 'dist'),//出口文件目录
        filename: "[name].css"
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss: function() {
                    return [autoprefixer, precss, cssnano,cssnext]
                }
            }
        }),
    ]

};