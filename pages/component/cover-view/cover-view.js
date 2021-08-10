//index.js
//获取应用实例
const app = getApp()


const loger = {
  success(res) {
    console.log(res)
  },
  fail(res) {
    console.log(res)
  },
  complete(res) {
    console.log('complete', res)
  }
}

Page({
  data: {
    className: ''
  },
  onLoad() {
    let count = 0
    setInterval(() => {
      console.log('Set animate className', count)
      this.setData({
        className: count++ % 2 === 0 ? 'active' : ''
      })
    }, 7000)
  },
  onClick(e) {
    console.log('cover-view click', e)
  },
  onParentClick(e) {
    console.log('cover-view parent click', e)
  }
})
                                          