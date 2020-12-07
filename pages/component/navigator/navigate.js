Page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'pages/component/navigator/navigate'
    }
  },

  onLoad(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  }
})
