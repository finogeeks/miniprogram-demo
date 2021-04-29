// pages/API/load-font-face/load-font-face.js
Page({
  data: {
    fontFamily: 'Bitstream Vera Serif Bold',
    loaded: false,
  },

  onLoad() {
    this.setData({
      loaded: false
    })
  },

  loadFontFace() {
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://www-cdn.finclip.com/fonts/Pacifico.ttf")',
      success(res) {
        console.log(res.status)
        self.setData({loaded: true})
      },
      fail(res) {
        console.log(res.status)
      },
      complete(res) {
        console.log(res.status)
      }
    })
  },

  clear() {
    this.setData({loaded: false})
  }
})
