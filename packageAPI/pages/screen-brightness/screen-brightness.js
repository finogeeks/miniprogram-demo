// pages/API/screen-brightness/screen-brightness.js
Page({
  data: {
    screenBrightness: 0
  },

  onLoad() {
    this._updateScreenBrightness()
  },

  changeBrightness(e) {
    const value = Number.parseFloat(
      (e.detail.value).toFixed(1)
    )
    this.setData({
      screenBrightness: Number.parseFloat(
        e.detail.value.toFixed(1)
      )
    })
    wx.setScreenBrightness({
      value,
    })
  },

  keepScreenOn() {
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },

  _updateScreenBrightness() {
    wx.getScreenBrightness({
      success: (res) => {
        console.log(res);
        this.setData({
          screenBrightness: Number.parseFloat(
            res.value.toFixed(1)
          )
        })
      },
      fail(err) {
        console.error(err)
      }
    })
  }
})
