// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '../../service/category.js'

Page({
  data: {
    categories: [],
    categoryData: {},
    currentIndex: 0
  },
  onLoad: function(options) {
    this._getData()
  },
  _getData() {
    // 1.请求分类数据
    this._getCategory()
  },
  _getCategory() {
    getCategory().then(res => {
      console.log(res)
      // 1.获取categories
      const categories = res.data.data.category.list

      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      }

      // 3.修改data中的数据
      this.setData({
          categories: categories,
          categoryData: categoryData
        }),

        // 4.请求第一个类别的数
        this._getSubcategory(0)

      // 5.请求第一个类别的详情数据
      this._getCategoryDetail(0)
    })
  },
  _getSubcategory(currentIndex) {
    // 1.获取对应的maitkey
    const maitkey = this.data.categories[currentIndex].maitKey;
    // 2.请求的数据
    getSubcategory(maitkey).then(res => {
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subcategories = res.data.data.list;
      this.setData({
        categoryData: tempCategoryData
      })
    })
  },
  _getCategoryDetail(currentIndex) {
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');
  },
  _getRealCategoryDetail(index, miniWallKey, type) {
    getCategoryDetail(miniWallKey, type).then(res => {
      console.log(res)
      // 1.获取categoryData
      const categoryData = this.data.categoryData;

      // 2.修改数据
      categoryData[index].categoryDetail = res.data;

      this.setData({
        categoryData: categoryData
      })
    })
  },
  menuClick(event) {
    // 1.改变当前的currentIndex
    console.log(event)
    const currentIndex = event.detail.currentIndex;
    this.setData({
      currentIndex
    })
    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex)
    
    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
  }
})