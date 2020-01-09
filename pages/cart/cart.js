// pages/cart/cart.js
const app = getApp()
Page({
  data: {
    cartList: [],
    selected: true,
    totalPrice: 0,
    totalCounter: 0
  },
  onLoad() {
    // 1.第一次加载数据
    this.setData({
      cartList: app.globalData.cartList
    })

    // 2.设置回调
    app.addCartCallback = () => {
      this.setData({
        cartList: app.globalData.cartList
      })
      this.changeData();
    }
    // 3.设置修改某个商品的回调
    app.changeGoodsState = (index, goods) => {
      // 1.修改某一项的选中状态
      this.setData({
        [`cartList[${index}]`]: goods
      })
      // 2.修改全部选中的状态
      let selectAll = null;
      // if (this.data.cartList.length === 0) {
      //   selectAll = false
      // }
      //   遍历数组 有不是选中的 就返回 返回了就为true 取反 false
      // find函数 查找 找到了就直接返回 高效
      selectAll = !this.data.cartList.find(item => !item.checked)
      this.setData({
        selected: selectAll
      })

      this.changeData()
    }
  },
  onShow() {
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`,
    })
    this.changeData()
  },
  onSelectAll() {
    // 1.判断是否是全部选中
    if (this.data.selected) { //目前全部选中
      this.data.cartList.forEach(item => {
        item.checked = false
      })
      this.setData({
        cartList: this.data.cartList,
        selected: false
      })
    } else { //某些没选中
      this.data.cartList.forEach(item => {
        item.checked = true
      })
      this.setData({
        cartList: this.data.cartList,
        selected: true
      })
    }
    this.changeData()
    console.log(this.data.cartList);
  },
  changeData() {
    // 1.获取所有选中的数据
    let totalPrice = 0;
    let counter = 0;
    for (let item of this.data.cartList) {
      if (item.checked) {
        counter++;
        totalPrice += item.realPrice * item.count;
      }
    }

    console.log(counter, totalPrice)
    // 2.修改数据
    this.setData({
      totalCounter: counter,
      totalPrice: totalPrice
    })
  }
})