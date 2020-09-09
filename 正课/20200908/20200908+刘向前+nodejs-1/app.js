/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-08 22:57:37
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-09 22:44:26
 */
// ===========================================
// 暗号： webserver
// ===========================================
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http
  .createServer()
  .on('request', (req, res) => {
    let result
    if (req.url === '/') {
      result = fs.readFileSync(path.resolve(__dirname, './public') + '/index.html').toString()
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(result)
  })
  .listen(8888, () => {
    console.log('the prot run on 8888')
  })
