// pages/API/get-network-type/get-network-type.js
Page({
  data: {
    hasNetworkType: false
  },
  getNetworkType() {
    const that = this
    wx.getNetworkType({
      success(res) {
        console.log(res)
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        })
      }
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  }
})
