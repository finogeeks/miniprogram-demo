// pages/API/download-file/download-file.js
Page({
  downloadImage() {
    const self = this

    wx.downloadFile({
      url: 'https://nextcloud.finogeeks.club/s/GF2zYNNnqTQ4gXG/preview', // 文件资源
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
