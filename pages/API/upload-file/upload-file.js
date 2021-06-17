// pages/API/upload-file/upload-file.js

Page({
  chooseImage() {
    const self = this
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        const files = res.tempFiles;
        wx.uploadFile({
          url: 'https://finchat-mop.finogeeks.club/api/v1/netdisk/upload/self?type=file&content={}', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'X-Consumer-Custom-ID': 'test',
          },
          success: res => {
            // 返回文件 ID
            console.log('uploadImage success, res is:', res)
            const data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
            const url = `https://finchat-mop.finogeeks.club/api/v1/mop/netdisk/download/${data.netdiskID}`
            self.setData({
              imageSrc: url
            });
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })
          },
          fail({errMsg}) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })
      }
    })
  },
})
