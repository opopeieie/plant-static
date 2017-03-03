const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseConfig = require('./webpack.config'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    root = path.resolve(__dirname, '..');


module.exports = merge(baseConfig, {
    devServer: {
        historyApiFallback: true,//404
        hot:true,
        port: 8001
    },
    devtool: 'source-map',//调试
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//热启动插件
        new HtmlWebpackPlugin({
            inject:'body'//script标签注入body底部
        })
    ]
});