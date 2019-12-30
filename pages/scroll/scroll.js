// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleScroll(event) {
    console.log('正在滚动',event)
  },
  tolower() {
    console.log('滚动到底部/右边触发')
  }
})