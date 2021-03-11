// pages/API/get-network-type/get-network-type.js
Page({
  data: {
    result: '',
    timeInterval: null,
    timeout: null,
  },

  switchTab() {
    console.log('wx.switchTab', '/pages/API/index/index');
    wx.switchTab({url: '/pages/API/index/index'})
  },
  reLaunch() {
    console.log('wx.reLaunch', '/pages/API/index/index');
    wx.reLaunch({url: '/pages/API/index/index'})
  },
  redirectTo() {
    console.log('wx.redirectTo', '/pages/API/buffer/buffer');
    wx.redirectTo({url: '/pages/API/buffer/buffer'})
  },
  navigateTo() {
    console.log('wx.navigateTo', '/pages/API/buffer/buffer');
    wx.navigateTo({url: '/pages/API/buffer/buffer'})
  },
  navigateBack() {
    wx.navigateBack()
  }
})
