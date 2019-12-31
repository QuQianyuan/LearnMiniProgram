// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服', '裤子', '选择']
  },
  handleBtnClick() {
    console.log('按钮发生点击')
  },
  handleTouchStart() {
    console.log('手指点上去立即触发')
  },
  handleTouchMove() {
    console.log('手指在上面移动触发')
  },
  handleTouchEnd() {
    console.log('手指松开立即触发')
  },
  handleLongPress() {
    console.log('点上去超过300ms触发，和tap两个都在，只会执行其中一个')
  },
  handleEventClick(event) {
    // type:事件类型
    // timestamp：页面打开到触发事件所经过的毫秒
    // currentTarget/target：触发事件的一些属性值集合
    //触发事件的view 产生事件的view
    // detail：记录点击地方的的x，y
    // touches和changeTouches的区别：
    // 多少个手指触摸
    // 记录变化后的手指
    console.log('---------', event);
  },
  handleEventEnd(event) {
    console.log('+++++++++', event);
  },
  handleInner(event) {
    console.log(event);
  },
  handleOuter(event) {
    console.log(event);
  },
  handleItemClick(event) {
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index);
  },


  // 事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleView1() {
    console.log('handleView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleView2() {
    console.log('handleView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleView3() {
    console.log('handleView3')
  },
})