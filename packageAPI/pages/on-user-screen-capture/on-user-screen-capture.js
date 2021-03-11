// pages/API/screen-brightness/screen-brightness.js
Page({
  data: {},

  onUserCaptureScreen() {
    wx.showToast({
      title: '开始监听',
    })
    wx.onUserCaptureScreen(() => {
      wx.showToast({
        title: '用户屏幕截图',
      })
    })
  },

  offUserScreenCapture() {
    wx.showToast({
      title: '取消监听',
    })
    wx.offUserCaptureScreen();
  }
})
