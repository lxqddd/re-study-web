/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-10 22:55:44
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-12 09:23:36
 */

// ================
// 暗号：koa
// ================

const Koa = require('Koa')
const KoaRouter = require('@koa/router')
const fs = require('fs')
const staticCache = require('koa-static-cache')

const app = new Koa()
const router = new KoaRouter()

app.use(
  staticCache({
    prefix: '/static',
    dir: __dirname + '/public',
    gzip: true,
    dynamic: true
  })
)
app.use(router.routes())

router.get('/', ctx => {
  ctx.type = 'html'
  ctx.body = fs.readFileSync('public/index.html').toString()
})

app.listen('8888', () => {
  console.log('the server is running on port 8888')
})
