const path = require('path');
const root = path.resolve(__dirname, '.');//根目录
module.exports = {
    entry: path.join(__dirname, 'plant/src/main.js'),//项目文件入口
    output: {
        path: path.join(root, 'dist'),//出口文件目录
        filename: 'main.js'//出口文件名
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
            {test: /.css$/, loader: 'style!css'},
            {test: /\.less$/, loader: "style!css!less|postcss"},
            {test: /\.scss$/, loader: "style!css!sass|postcss"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.json$/, loader: 'json'},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'},

        ]
    }
};