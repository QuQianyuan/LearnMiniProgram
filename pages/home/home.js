// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true, // 是否添加蒙版 默认没有 蒙版出现无法点击其他地方
      success: function() {
        console.log('展示弹窗成功');
      },
      fail: function() {
        console.log('展示弹窗失败');
      },
      complete: function() {
        console.log('完成函数的调用');
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容，嘿嘿嘿',
      // showCancel: false, // 取消按钮是否显示，默认显示
      cancelText: '退出',
      cancelColor: 'red',
      success: function(res) {
        console.log(res)
        if (res.cancel) {
          console.log('用户点击了取消')
        }
        if(res.confirm) {
          console.log('用户点击了确定按钮')
        }
      },
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    setTimeout(() => {
      // 必须手动调用hideLoading才会让loading消失
      wx.hideLoading()
    },2000)
  },
  handleShowactionSheet() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
      }
    })
  },
  // 分享函数
  onShareAppMessage: function(options) {
    return {
      title: '你好啊，李彦宏', //显示标题
      path: '/page/about/about', //显示的路径
      // 分享界面显示的图片： 本地图片/网络图片
      imageUrl: 'https://fc3tn.baidu.com/it/u=3316085102,1601821812&fm=202&src=bqdata',
    }
  }
})