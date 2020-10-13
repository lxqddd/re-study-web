/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-11 08:00:26
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-11 08:23:32
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
      title: '开课吧'
    }),
    new CleanWebpackPlugin()
  ]
}
