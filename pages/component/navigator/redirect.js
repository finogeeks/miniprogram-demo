Page({
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'pages/component/navigator/redirect'
    }
  },

  onLoad(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  }
})
