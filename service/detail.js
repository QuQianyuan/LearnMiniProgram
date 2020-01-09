import request from './network.js'

export function getDetail(iid) {
  return request({
    url: '/detail',
    data: {
      iid
    }
  })
}
export function getRecommends() {
  return request({
    url: '/recommend'
  })
}

export class GoodsBaseInfo {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}