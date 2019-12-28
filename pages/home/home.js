Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [
      {id:110, name: 'kebo', age:18},
      { id: 111, name: 'lan', age: 19 },
      { id: 112, name: 'jon', age: 20 },
      { id: 113, name: 'lugo', age: 21 },
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误做法：界面不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)
    
    // 2.this.setData()
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter-1
    })
  }
})