// pages/API/upload-file/upload-file.js

Page({
  chooseImage() {
    const self = this
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        const files = res.tempFiles;
        wx.uploadFile({
          url: 'https://finchat-mop.finogeeks.club/api/v1/netDiskProxy/needCheckAuth/self?type=file&content={}&thumbnail=false&timestamp=1581254809&uuid=12345&appid=6000133&sign=21AE06173F566598FF9A055277AA55C4', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'uploadFile': files[0],
          },
          success (res){
            const data = res.data
            //do something
            console.log(res);
          },
          fail (res) {
            console.log(res);
          }
        })
      }
    })
  },
})
