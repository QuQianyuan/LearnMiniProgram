// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '嘿嘿嘿',
    firstName: 'yuehan',
    lastName: 'jack',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['撒旦', '请问','防抖','执行'],
    nums:[
      [10,23,45,67],
      [101,243,545,667],
      [140,213,452,677],
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },
  numberToFixed(value) {
    return value.toFixed(2)
  },
})