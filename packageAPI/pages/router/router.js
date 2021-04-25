// packageAPI/pages/get-network-type/get-network-type.js
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
    console.log('wx.redirectTo', '/packageAPI/pages/buffer/buffer');
    wx.redirectTo({url: '/packageAPI/pages/buffer/buffer'})
  },
  navigateTo() {
    console.log('wx.navigateTo', '/packageAPI/pages/buffer/buffer');
    wx.navigateTo({url: '/packageAPI/pages/buffer/buffer'})
  },
  navigateBack() {
    wx.navigateBack()
  }
})
