/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-21 22:49:57
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-22 09:47:15
 */
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const KoaBody = require('koa-body')
const mysql = require('mysql2')
const koaJwt = require('koa-jwt')
const jwt = require('jsonwebtoken')
const koaBody = require('koa-body')
const KoaStaticCache = require('koa-static-cache')

// 创建一个mysql的链接对象
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '******',
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

const app = new Koa()
const router = new KoaRouter()
app.use(
  KoaStaticCache({
    prefix: '/',
    dir: __dirname + '/upload',
    gzip: true,
    dynamic: true
  })
)

/**
 * jwt鉴权
 */
// 登录
app.use(koaJwt({ secret: 'kaikeba' }).unless({ path: [/^\/login/] }))
router.post('/login', koaBody(), async ctx => {
  const { username, password } = ctx.request.body
  if (username && password) {
    const [userRes] = await query('select * from users where username=? and password=?', [
      username,
      password
    ])
    // 验证通过了
    if (userRes) {
      let token = jwt.sign({ id: userRes.id, name: userRes.username }, 'kaikeba')
      ctx.set('Authorization', 'Bearer ' + token)
      ctx.body = {
        code: 0,
        message: 'success',
        data: '登录成功'
      }
    } else {
      ctx.body = {
        code: 1,
        message: 'error',
        data: '登录失败'
      }
    }
  } else {
    ctx.body = {
      code: 1,
      message: 'error',
      data: '登录失败'
    }
  }
})

// 上传
const uploadOptions = {
  multipart: true,
  formidable: {
    uploadDir: __dirname + '/upload',
    keepExtensions: true
  }
}
router.post('/upload', KoaBody(uploadOptions), async ctx => {
  let userInfo = {}
  if (ctx.get('Authorization')) {
    const token = ctx.get('Authorization')
    let decoded = jwt.verify(token.replace('Bearer ', ''), 'kaikeba')
    userInfo = { ...decoded }
    if (!decoded) {
      ctx.body = '无权访问'
      return
    }
  }
  let { path, type, size } = ctx.request.files.attachment
  path = path.replace(/\\/g, '/')
  const lastIndex = path.lastIndexOf('/')
  const filename = path.substring(lastIndex + 1)
  await query('insert into `photos` (`filename`, `type`, `size`, `uid`) values (?, ?, ?, ?)', [
    filename,
    type,
    parseInt(size),
    parseInt(userInfo.id)
  ])

  ctx.body = {
    code: 0,
    message: '',
    data: {
      filename
    }
  }
})
router.get('/getPhotos', async ctx => {
  let userInfo = {}
  if (ctx.get('Authorization')) {
    let token = ctx.get('Authorization')
    let decoded = jwt.verify(token.replace('Bearer ', ''), 'kaikeba')
    userInfo = { ...decoded }
    if (!decoded) {
      ctx.body = '无权访问'
      return
    }
  }
  const imgs = await query('select * from `photos` where uid=?', [parseInt(userInfo.id)])
  ctx.body = {
    code: 0,
    message: 'success',
    data: imgs
  }
})

app.use(router.routes())
app.listen(8888)
