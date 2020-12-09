// pages/API/download-file/download-file.js
Page({
  downloadImage() {
    const self = this

    wx.downloadFile({
      url: 'https://p2.ssl.qhimgs1.com/t016f54160c5c81c652.jpg', // 文件资源
      success: res => {
        console.log('downloadFile success, res is', res)
        self.setData({
          imageSrc: res.tempFilePath
        })
      },
      fail: console.error
    })
  }
})
