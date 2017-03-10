const path = require('path');
const root = path.resolve(__dirname, '.');//根目录
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, 'plant/src/main.js'),//项目文件入口
    output: {
        path: path.join(root, 'dist'),//出口文件目录
        filename: '[name]-[hash].min.js'
    },
    resolve: {
        alias: {
            component: path.join(root, 'plant/src/components'),
            common: path.join(root, 'plant/src/common'),
            util: path.join(root, 'plant/src/util'),
            views: path.join(root, 'plant/src/views'),
            styles: path.join(root, 'plant/src/styles'),
            routes: path.join(root, 'plant/src/routes')
        },
        extensions: ['.js', '.vue']
    },
    resolveLoader: {},
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.css$/,
                // we extract the styles into their own .css file instead of having
                // them inside the js.
                loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader" })
            },
            {test: /\.less$/, loader: "style!css!less|postcss"},
            {
                test: /\.scss$/,
                // we extract the styles into their own .css file instead of having
                // them inside the js.
                loader: ExtractTextPlugin.extract({fallback:'style', use:'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'})
            },
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.json$/, loader: 'json'},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            {test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};