// pages/API/on-network-status-change/on-network-status-change.js
Page({
  onShareAppMessage() {
    return {
      title: '监听手机网络变化',
      path: 'packageAPI/pages/on-network-status-change/on-network-status-change'
    }
  },

  data: {
    isConnected: false,
  },
  onLoad() {
    const that = this
    this.onNetworkStatusChange()
    // wx.onNetworkStatusChange(function (res) {
    //   that.setData({
    //     isConnected: res.isConnected,
    //     networkType: res.networkType
    //   })
    // })
  },
  onShow() {
    const that = this
    wx.getNetworkType({
      success(res) {
        that.setData({
          isConnected: res.networkType !== 'none',
          networkType: res.networkType
        })
      }
    })
  },
  networkstatuschangehandler (res) {
    this.setData({
      isConnected: res.isConnected,
      networkType: res.networkType
    })
  },
  onNetworkStatusChange () {
    wx.onNetworkStatusChange(this.networkstatuschangehandler)
  },
  offNetworkStatusChange () {
    wx.offNetworkStatusChange(this.networkstatuschangehandler)
  }
})
