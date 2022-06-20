const app = getApp()

Page({
  data: {
    
  },
  getRandomValues () {
    wx.getRandomValues({
      length: 20,
      complete (res) {
        console.log('getRandomValues complete: ', res)
      }
    })
  }
})
