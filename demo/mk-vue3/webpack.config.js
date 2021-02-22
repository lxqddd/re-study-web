/*
 * @Author       : your name
 * @Date         : 2021-02-22 21:11:14
 * @LastEditTime : 2021-02-22 21:45:30
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \mk-vue3\webpack.config.js
 */
const path = require('path')

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  }
}

module.exports = config
