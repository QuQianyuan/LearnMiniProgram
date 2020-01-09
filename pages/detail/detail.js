// pages/detail/detail.js
import {
  getDetail,
  getRecommends,
  GoodsBaseInfo
} from '../../service/detail.js'

const app = getApp()

Page({
  data: {
    iid: '', //接收的iid
    topImages: [], //顶部的轮播图
    baseInfo: {}, //标题 价格 包邮等数据 
    ShopInfo: {}, //店铺信息
    detailInfo: {}, //商品信息图片
    paramsInfo: {}, //商品参数信息
    commentInfo: {}, //商品评论数据 数量
    recommends: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1.获取传入的id
    this.setData({
      iid: options.iid
    })

    // 2.请求商品详情数据
    this._getDetail()
    
    // 3.请求推荐的数据
    this._getRecommends()

  },
  _getDetail() {
    getDetail(this.data.iid).then(res => {
      // 1取出数据
      const data = res.data.result
      console.log(data)
      // 2取出顶部的轮播数据
      const topImages = data.itemInfo.topImages;
      // 3创建BaseInfo对象
      const baseInfo = new GoodsBaseInfo(data.columns, data.itemInfo, data.shopInfo.services)
      // 4取出店铺信息创建ShopInfo对象
      const ShopInfo = data.shopInfo;
      // 5创建detailInfo对象 商品信息图片
      const detailInfo = data.detailInfo;
      // 6创建ParamInfo对象 商品参数信息
      const paramsInfo = data.itemParams;
      // 7获取评论信息 判断是否有评论 没有就是空数组
      let commentInfo = {}
      if (data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0]
      }

      this.setData({
        topImages: topImages,
        baseInfo: baseInfo,
        ShopInfo: ShopInfo,
        detailInfo: detailInfo,
        paramsInfo: paramsInfo,
        commentInfo: commentInfo
      })
    })
  },
  _getRecommends() {
    getRecommends().then(res => {
      this.setData({
        recommends : res.data.data.list
      })
    })
  },
  onAddCart() {
    // 1.获取商品对象
    const obj = {}
    obj.iid = this.data.iid;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.realPrice = this.data.baseInfo.realPrice;

    // 2.将商品添加到加入到购物车
    app.addToCart(obj)

    // 3.加入成功提示
    wx:wx.showToast({
      title: '加入购物车成功'
    })
  }
})