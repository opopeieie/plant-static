const webpack = require('webpack'),
      merge = require('webpack-merge'),
      config = require('./webpack.config'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    devServer: {
        historyApiFallback: true,//404
        hot:true,
        port: 8001
    },
    devtool: 'source-map',//调试
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//热启动插件
        new HtmlWebpackPlugin({
            title:'plant',
            templateContent:'<div id="app"></div>',
            inject:'body'//script标签注入body底部
        })
    ]
});