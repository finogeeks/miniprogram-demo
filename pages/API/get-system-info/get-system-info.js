// pages/API/get-system-info/get-system-info.js
Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo() {
    const that = this
    wx.getSystemInfo({
      success(res) {
        that.setData({
          systemInfo: res
        })
      }
    })
  },
  getSystemInfoSync() {
    const that = this;
    try {
      const res = wx.getSystemInfoSync()
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
      that.setData({
        systemInfo: res
      });
    } catch (e) {
      // Do something when catch error
    }
  },
  clearInfo() {
    this.setData({
      systemInfo: {}
    })
  },
})
