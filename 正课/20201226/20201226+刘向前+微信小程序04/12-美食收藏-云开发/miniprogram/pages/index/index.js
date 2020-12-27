//index.js
const app = getApp()
/* 初始化微信云 */
wx.cloud.init();
/* 获取当前云环境的数据库 */
const db = wx.cloud.database();
Page({
  data: {
    
  },
  onLoad: function() {
    this.del2()
  },

  /* 更新 */
  update(){
    db.collection("favorList").doc("0Ve3TZRRENdAQawR05P7ZTaimUYnkUYumhsf8gBsypSS8yN6").update({
      data: {
        city: '北京市'
      },
      success: function(res) {
        console.log(res)
      }
    })
  },

  /* 删除 */
  del1(){
    /* 将会失败 */
    db.collection('collect').where({
      id:"47"
    }).remove()
  },
  del2(){
    wx.cloud.callFunction({
      name: "delCollect",
      data: {id:"47"}
    })
  },
  /* 获取所有热门店铺 */
  getFavorList(){

  }
})
