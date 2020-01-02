// pages/home/home.js
Page({
  data: {
    title: '嘿嘿嘿'
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?title="你好啊"&age=18',
    })
  }
})