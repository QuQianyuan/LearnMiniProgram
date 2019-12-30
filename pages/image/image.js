// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handle() {
    //系统API，让用户在相册中选择图片（或者拍照）
    wx.chooseImage({
      success: (res)=> {
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置imagePath
        // 直接用this，undefined 要用箭头函数向上绑定 
        this.setData({  //这样才能双向绑定
          imagePath: path
        })
      },
    })
  },
  handleImageLoad() {
    console.log('图片加载完成')
  }
})