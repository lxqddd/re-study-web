/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-21 22:49:57
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-22 01:16:00
 */
const Koa = require('koa')
const KoaStaticCache = require('koa-static-cache')
const koaServerHttpProxy = require('koa-server-http-proxy')
const fs = require('fs')

const app = new Koa()

app.use(
  koaServerHttpProxy('/api', {
    target: 'http://localhost:8888',
    pathRewrite: {
      '^/api': ''
    }
  })
)

app.use(
  KoaStaticCache({
    prefix: '/',
    dir: __dirname + '/static',
    gzip: true,
    dynamic: true
  })
)
app.use(
  KoaStaticCache({
    prefix: '/',
    dir: __dirname + '/upload',
    gzip: true,
    dynamic: true
  })
)

app.listen(9999)
