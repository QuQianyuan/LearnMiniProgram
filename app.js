App({
  addToCart(obj) { //obj是新添加的商品
    // 查找之前数组中是否有该商品(的iid 唯一标识)
    const newObj = this.globalData.cartList.find(item => item.iid === obj.iid)
    // const newObj = null;
    // for (let item of this.globalData.cartList) { //循环遍历商品数组
    //   if (item.iid === obj.iid) { //如果商品的iid等于这个传过来的iid
    //     newObj = item //这个商品就等于 传过来的
    //   }
    // }
    // 2.判断odlObj是否有值
    if (newObj) { //有值的话旧的商品 数量+1
      newObj.count += 1;
    } else { //否则 商品的数量=1
      obj.count = 1;
      obj.checked = true
      this.globalData.cartList.push(obj); //并且把商品添加的数组里去
    }
    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },
  globalData: {
    cartList: []
  }
})