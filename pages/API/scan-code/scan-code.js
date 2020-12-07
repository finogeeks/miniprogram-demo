// pages/API/scan-code/scan-code.js
Page({
  data: {
    result: ''
  },

  scanCode() {
    const that = this
    wx.scanCode({
      success(res) {
        that.setData({
          result: res.result
        })
      },
      fail() {}
    })
  }
})
