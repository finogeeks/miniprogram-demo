Page({

  onLoad() {

  },


  data: {
    x: 0,
    y: 0,
    scale: 2,
    show: false
  },

  show() {
    this.setData({
      show: !this.data.show
    })
  },

  tap() {
    this.setData({
      x: '60rpx',
      y: '60rpx'
    })
  },

  tap2() {
    this.setData({
      scale: 3
    })
  },

  log(e) {
    console.log(e)
  }
})
