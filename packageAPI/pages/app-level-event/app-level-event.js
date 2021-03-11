Page({

  data: {
    type: 'unset',
    launchOptions: {},
    items: [
      'path', 'scene', 'query', 'shareTicket', 'referrerInfo',
    ],
  },

  created() {
    const that = this;
    wx.onAppShow((res) => {
      console.log('wx.onAppShow', res);
      that.setData({
        launchOptions: res,
        type: 'onAppShow'
      })
    })
    wx.onAppHide((res) => {
      console.log('wx.onAppHide', res);
      that.setData({
        launchOptions: {},
        type: 'onAppHide'
      })
    })
  },

  getLaunchOptions() {
    const that = this
    const result = wx.getLaunchOptionsSync()
    console.log('wx.getLaunchOptionsSync', result)
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
    console.log('wx.getEnterOptionsSync', result)
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
