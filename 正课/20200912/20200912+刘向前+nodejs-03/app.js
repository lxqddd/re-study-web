/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-14 20:59:10
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-14 21:52:20
 */
const Koa = require('koa')
const staticCache = require('koa-static-cache')
const KoaRouter = require('@koa/router')
const KoaBody = require('koa-body')
const nunjucks = require('nunjucks')
const mysql = require('mysql2')

// 创建一个mysql的链接对象
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '********',
  database: 'kkb'
})

function query(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, function (err, results) {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

const tpl = new nunjucks.Environment(new nunjucks.FileSystemLoader('./template'), {
  watch: true,
  noCache: true
})

const app = new Koa()

// 静态
app.use(
  staticCache({
    prefix: '/public',
    dir: __dirname + '/public',
    gzip: true,
    dynamic: true
  })
)

// ================
// 暗号：数据库
// ================

// 通过 router 对象来管理url与函数的对应关系
const router = new KoaRouter()

router.get('/register', async ctx => {
  ctx.body = tpl.render('register.html')
})

router.post('/register', KoaBody(), async ctx => {
  let { name, password } = ctx.request.body
  if (!name || !password) {
    return (ctx.body = '注册失败')
  }

  await query('insert into `users` (`username`, `password`) values (?, ?)', [name, password])
  return (ctx.body = '注册成功')
})

app.use(router.routes())

app.listen(8888, () => {
  console.log('the server is running on port 8888')
})
