Page({
  data: {
    launchOptions: {},
    items: [
      'width', 'height', 'top', 'bottom', 'left',
    ],
  },
  getLaunchOptions() {
    const that = this
    const result = wx.getMenuButtonBoundingClientRect()
    console.log('wx.getMenuButtonBoundingClientRect', result);
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
