// pages/cart/childCpns/w-cart-item/w-cart-item.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
    }
  },
  data: {

  },
  methods: {
    onCheckClick(event) {
      // 1.查找有无对应商品的iid
      const goods = app.globalData.cartList.find(item =>
        item.iid == this.properties.goods.iid)
      goods.checked = !goods.checked

      // 2.获取当前点击商品的index
      const index = event.currentTarget.dataset.index;

      // 3.回调
      app.changeGoodsState(index, goods)
    }
  }
})