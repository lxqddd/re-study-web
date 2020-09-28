/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-28 21:14:18
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-28 21:36:57
 */
// 暗号：模块打包
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: ['raw-loader']
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: './images',
            publicPath: '../dist/images',
            limit: 1000
          }
        }
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true,
              sourceMap: false
            }
          }
        ]
      }
    ]
  }
}
