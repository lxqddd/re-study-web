/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-09-25 19:57:02
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-09-25 20:14:09
 */
const http = require('http')
const fs = require('fs')
const socketIo = require('socket.io')

// 创建了一个 httpServer 的服务器对象
const server = http.createServer(async (req, res) => {
  let url = req.url

  if (req.url === '/') {
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.end(fs.readFileSync('./index.html'))
  }
})

// 在 httpServer 构建一个 socket server 对象
// io 以及处理了一个特殊的请求 /socket.io/socket.io.js，如果客户端请求这个url，那么返回的就是一个js文件（客户端需要用到的js文件）
const io = socketIo(server)

// 当有客户端通过socket链接了io服务器，那么下面这个函数就会别执行
io.on('connection', socket => {
  // console.log('a user connected', socket);

  // 给当前链接的客户端：socket，发送一个事件
  // socket.emit 给指定的客户端socket对象发送消息
  socket.emit('hello', {
    id: socket.id
  })
  // 给除了自己以外的其它socket对象发送消息
  socket.broadcast.emit('welcome', {
    id: socket.id
  })

  // 接收来自客户端推送过来的消息
  socket.on('message', function (data) {
    const message = {
      id: socket.id,
      message: data.message,
      datetime: getCurTime() // '2020-09-24 22:51:02'
    }
    socket.emit('data', message)
    socket.broadcast.emit('data', message)
  })
})

/**
 * 暗号：实时通信
 */
function getCurTime() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hourse = date.getHours() + 1
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${year}-${month <= 9 ? '0' + month : month}-${day <= 9 ? '0' + day : day} ${
    hourse <= 9 ? '0' + hourse : hourse
  }:${minute <= 9 ? '0' + minute : minute}:${second <= 9 ? '0' + second : month}`
}

server.listen(9999)
