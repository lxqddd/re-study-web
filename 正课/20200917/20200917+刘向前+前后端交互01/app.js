/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-19 10:20:52
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-19 11:14:41
 */
const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaBody = require('koa-body')
const KoaStaticCache = require('koa-static-cache')
const mysql = require('mysql2')

// 创建一个mysql的链接对象
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'duoduo521',
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
    dir: __dirname + '/public',
    prefix: '/public',
    gzip: true,
    dynamic: true
  })
)

// 渲染图片的时候把这个目录也设置成静态目录了
app.use(
  KoaStaticCache({
    dir: __dirname + '/static/upload',
    prefix: '/upload',
    gzip: true,
    dynamic: true
  })
)

const uploadOptions = {
  multipart: true,
  formidable: {
    uploadDir: __dirname + '/static/upload',
    keepExtensions: true
  }
}
router.post('/upload', KoaBody(uploadOptions), async ctx => {
  // console.log(ctx.request.files);
  let { path, type, size } = ctx.request.files.attachment
  path = path.replace(/\\/g, '/')
  let lastIndex = path.lastIndexOf('/')
  let filename = path.substring(lastIndex + 1)
  // console.log(filename);

  let rs = await query('insert into `photos` (`filename`, `type`, `size`) values (?, ?, ?)', [
    filename,
    type,
    size
  ])

  ctx.body = {
    code: 0,
    message: '',
    data: {
      filename
    }
  }
})

/**
 * 暗号：ajax
 */

router.get('/getPhotos', async ctx => {
  const res = await query('select * from `photos`')
  ctx.body = {
    code: 0,
    message: 'success',
    data: res
  }
})

app.use(router.routes())

app.listen(8888)
