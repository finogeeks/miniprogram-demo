// pages/API/make-phone-call/make-phone-call.js
Page({
  data: {
    disabled: true
  },
  bindInput(e) {
    this.inputValue = e.detail.value

    if (this.inputValue.length > 0) {
      this.setData({
        disabled: false
      })
    } else {
      this.setData({
        disabled: true
      })
    }
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.inputValue,
      success() {
        console.log('成功拨打电话')
      }
    })
  }
})
