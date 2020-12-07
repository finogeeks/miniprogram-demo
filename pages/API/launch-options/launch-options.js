Page({
  onShareAppMessage() {
    return {
      title: '获取小程序启动时的参数',
      path: 'packageAPI/pages/launch-options/launch-options'
    }
  },

  data: {
    launchOptions: {},
    items: [
      'path', 'scene', 'query', 'shareTicket', 'referrerInfo',
    ],
  },
  getLaunchOptions() {
    const that = this
    const result = wx.getLaunchOptionsSync()
    console.log('wx.getLaunchOptionsSync', result);
    for(const key in result) {
      if(typeof result[key] === 'object') {
        result[key] = JSON.stringify(result[key])
      }
    }
    that.setData({
      launchOptions: result
    })
  },
  getEnterOptionsSync() {
    const that = this
    const result = wx.getEnterOptionsSync()
    console.log('wx.getEnterOptionsSync', result);
    for(const key in result) {
      if(typeof result[key] === 'object') {
        result[key] = JSON.stringify(result[key])
      }
    }
    that.setData({
      launchOptions: result
    })
  },
  clear() {
    this.setData({
      launchOptions: {}
    })
  }
})
