// pages/API/get-network-type/get-network-type.js
Page({
  data: {
  },

  showNavigationBarLoading() {
    console.log('wx.showNavigationBarLoading');
    wx.showNavigationBarLoading({
      success: (res) => {
        console.log('wx.showNavigationBarLoading success', res);
      },
      fail: (res) => {
        console.log('wx.showNavigationBarLoading fail', res);
      },
      complete: (res) => {
        console.log('wx.showNavigationBarLoading complete', res);
      },
    })
  },
  hideNavigationBarLoading() {
    console.log('wx.hideNavigationBarLoading');
    wx.hideNavigationBarLoading({
      success: (res) => {
        console.log('wx.hideNavigationBarLoading success', res);
      },
      fail: (res) => {
        console.log('wx.hideNavigationBarLoading fail', res);
      },
      complete: (res) => {
        console.log('wx.hideNavigationBarLoading complete', res);
      },
    })
  },
  setNavigationBarTitle() {
    console.log('wx.setNavigationBarTitle');
    wx.setNavigationBarTitle({
      title: Math.random().toString(),
      success: (res) => {
        console.log('wx.setNavigationBarTitle success', res);
      },
      fail: (res) => {
        console.log('wx.setNavigationBarTitle fail', res);
      },
      complete: (res) => {
        console.log('wx.setNavigationBarTitle complete', res);
      },
    })
  },
  setNavigationBarColor() {
    console.log('wx.setNavigationBarColor');
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#e8c51a',
      animation: {
        duration: 1000,
        timingFunc: 'easeIn'
      },
      success: (res) => {
        console.log('wx.setNavigationBarTitle success', res);
      },
      fail: (res) => {
        console.log('wx.setNavigationBarTitle fail', res);
      },
      complete: (res) => {
        console.log('wx.setNavigationBarTitle complete', res);
      },
    })
  },
})
