// pages/API/get-network-type/get-network-type.js
Page({
  data: {
  },

  showToast() {
    console.log('wx.showToast');
    wx.showToast({
      title: '12345678901234567890',
      icon: 'success',
      duration: 2000,
      mask: false,
      success: (res) => {
        console.log('wx.showToast success', res);
      },
      fail: (res) => {
        console.log('wx.showToast fail', res);
      },
      complete: (res) => {
        console.log('wx.showToast complete', res);
      },
    })
  },

  hideToast() {
    console.log('wx.hideToast');
    wx.hideToast({
      success: (res) => {
        console.log('wx.hideToast success', res);
      },
      fail: (res) => {
        console.log('wx.hideToast fail', res);
      },
      complete: (res) => {
        console.log('wx.hideToast complete', res);
      },
    })
  },

  showLoading() {
    console.log('wx.showLoading');
    wx.showLoading({
      title: '这是loading',
      mask: false,
      success: (res) => {
        console.log('wx.showLoading success', res);
      },
      fail: (res) => {
        console.log('wx.showLoading fail', res);
      },
      complete: (res) => {
        console.log('wx.showLoading complete', res);
      },
    })
  },

  hideLoading() {
    console.log('wx.hideLoading');
    wx.hideLoading({
      success: (res) => {
        console.log('wx.hideLoading success', res);
      },
      fail: (res) => {
        console.log('wx.hideLoading fail', res);
      },
      complete: (res) => {
        console.log('wx.hideLoading complete', res);
      },
    })
  },

  showModal() {
    console.log('wx.showModal');
    wx.showModal({
      title: 'title',
      content: '这是一个模态弹窗,这是一个模态弹窗,这是一个模态弹窗,这是一个模态弹窗,这是一个模态弹窗',
      showCancel: true,
      cancelText: '取消文案',
      cancelColor: '#2be81f',
      confirmText: '确定文案',
      confirmColor: '#fa5151',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  showActionSheet() {
    console.log('wx.showActionSheet');
    wx.showActionSheet({
      alertText: 'alertText',
      itemColor: '#fa5151',
      itemList: ['A', 'B', 'C', 'D', 'E', 'F'],
      success (res) {
        console.log('wx.showActionSheet success', res);
      },
      fail (res) {
        console.log('wx.showActionSheet fail', res)
      },
      complete (res) {
        console.log('wx.showActionSheet complete', res)
      },
    })
  }
})
