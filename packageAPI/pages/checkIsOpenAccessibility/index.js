
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: ''
  },
  checkIsOpenAccessibility () {
    const self = this
    wx.checkIsOpenAccessibility({
      complete (res) {
        console.log('checkIsOpenAccessibility complete: ', res)
        self.setData({
          status: res.open
        })
      }
    })
  }
})