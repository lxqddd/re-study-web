/*
 * @Author       : your name
 * @Date         : 2021-02-22 21:11:14
 * @LastEditTime : 2021-02-24 21:30:51
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \mk-vue3\webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: '3000',
    publicPath: '/',
    hot: true
  },
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: '/node_modules',
        use: ['babel-loader']
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      title: 'webpack搭建vue3开发环境'
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ]
}

module.exports = config
