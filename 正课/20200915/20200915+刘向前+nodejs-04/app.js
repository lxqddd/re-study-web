/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-16 22:30:42
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-16 23:41:00
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
  password: '*********',
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

const router = new KoaRouter()

router.get('/', async ctx => {
  ctx.body = tpl.render('addOver.html')
})
router.get('/addItem', async ctx => {
  ctx.body = tpl.render('addItem.html')
})

// ==============
// 暗号：上传
// ==============
const addItemKoaBodyOptions = {
  multipart: true,
  formidable: {
    uploadDir: __dirname + '/attachments',
    keepExtensions: true
  }
}
router.post('/addItem', KoaBody(addItemKoaBodyOptions), async ctx => {
  let { cover } = ctx.request.files
  let type, size
  if (cover) {
    let path = cover.path.replace(/\\/g, '/')
    let lastIndex = path.lastIndexOf('/')
    filename = path.substring(lastIndex + 1)
    type = cover.type
    size = cover.size
  }

  await query('insert into `attachments` (`filename`, `type`, `size`) values (?, ?, ?)', [
    filename,
    type,
    size
  ])

  ctx.body = tpl.render('message.html', {
    message: '添加成功',
    url: '/'
  })
})

app.use(router.routes())

app.listen(8888, () => {
  console.log('the server is running on port 8888')
})
