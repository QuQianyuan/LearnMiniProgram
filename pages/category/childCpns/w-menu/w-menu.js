// pages/category/childCpns/w-menu/w-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories: {
      type: Array,
      value: []
    }

  },
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event) {
      console.log(event)
      // 1.改变当前的currentIndex
      const currentIndex = event.currentTarget.dataset.index;
      this.setData({
        currentIndex
      })
      // 2.将最新的currentIndex传递到分类界面
      this.triggerEvent('menuClick', {currentIndex}, {})
    }
  }
})
