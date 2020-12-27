// 使用了 async await 语法
const cloud = require('wx-server-sdk')
// 初始化 cloud，API 调用要和云函数所在的当前所在环境一致
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
//数据库
const db = cloud.database()

//函数体
exports.main = async (event, context) => {
  try {
    return await db.collection('collect').where({
      openid: event.openid,
      id:event.id
    }).remove()
  } catch (e) {
    console.error(e)
  }
}