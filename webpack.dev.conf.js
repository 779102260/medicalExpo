const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  	mode: 'development',
  	devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        
        //这些变量不必再import了
        new webpack.ProvidePlugin({
            $:'jquery',
            React:'react',
            Component:['react','Component'],
            ReactDOM:'react-dom'
        })
    ]
});