// pages/filetobase64/index.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    base64:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  downtrnas(e) {
    console.log(e.target.dataset.url)
    const self = this
    wx.downloadFile({
      url: e.target.dataset.url,
      success(res) {
        console.log('downloadfile success:  ', res)
        wx.fileToBase64({
          url: res.tempFilePath,
          success(res) {
            console.log('fileToBase64 success:  ', res)
            self.setData({
              base64:res.data
           }) 
            const ArrayBuffer=wx.base64ToArrayBuffer(res.data)
            console.log('print arrayBuffer',ArrayBuffer)
          },
          fail(res) {
            console.log('fileToBase64 fail:  ', res)
          }
        })
      },
      fail(res) {
        console.log('downloadfile fail:  ', res)
      }
    })
  }
})