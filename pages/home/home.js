// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   * 2.初始化数据
   */
  data: {
    list: [],
    message: '哈哈哈'
  },

  /**
   * 生命周期函数--监听页面加载
   * 1.监听页面的生命周期函数
   */
  onLoad: function (options) {
    console.log('onLoad')
    const _this = this
    wx.request({
      url: 'http://106.54.54.237:8000/api/w1/home/multidata',
      // 箭头函数中的this 一层一层向上找
      success: (res)=> {
        console.log(res)
        const data = res.data.data.recommend.list
        this.setData({
          list: data
        })
      }
      // success: function(res) {
      //   const data = res.data.data.recommend.list
      //   _this.setData({
      //     list: data
      //   })
      // }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 3.监听wxml中的一些相关事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleClick() {
    console.log('哈哈哈被点击了')
  },
  //4.监听其他事件

  //监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },

  //监听页面滚动到底部
  onReachBottom() {
    console.log('滚动到底部')
  },

  //监听下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新的事件')
  }
})