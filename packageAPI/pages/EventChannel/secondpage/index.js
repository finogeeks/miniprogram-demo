// pages/debugpage/index.js
let secEventChannel
let eventChannel

Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: 123,
    testdata: [1,2,3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('debugpage onLoad', options)
    wx.onError((error) => {
      console.log('debugpage onError in api ', error)
    })
    eventChannel = this.getOpenerEventChannel()
    console.log(eventChannel)
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log('eventChannel debug: in second page acceptDataFromOpenerPage', data)
    })
    setTimeout(() => {
      console.log('~~~~~~~~~~~~~~~')
      this.eventchannelemit()
    }, 10000)
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
  gototweetdetail: function () {
    wx.redirectTo({
      url: '/pages/testvideo/index?timelineId=d758d38c-0e2f-4f3d-82b6-57194980fbd2&fcid=@staff_staff1:000000.finogeeks.com&from=HOME',
    })
  },
  goTestvideo() {
    // wx.redirectTo({
    //   url: '/pages/testvideo/index',
    // })
    wx.navigateTo({
      url: '/pages/testvideo/index',
      events: {
        testevent: this.testeventcb
      },
      success: (res) => {
        secEventChannel = res.eventChannel
        console.log('secEventChannel === eventChannel :  ', secEventChannel === eventChannel)
        secEventChannel.emit('testevent', {a: 'secEventChannel'})
      }
    })
  },
  savefiletophone() {
    wx.downloadFile({
      url: 'https://kong.citics.com/citics/download/H5/xin_src/page/pdf_viewer/html/pdf_viewer.html?file=https%3A%2F%2Fkong.citics.com%2Fxtougu%2Fupload%2Fstock_relation%2FMR.pdf',
      success(res) {
        console.log(res);
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function (res) {
            console.log('打开文档成功')
          },
          complete(res) {
            console.log(res)
          }
        })
      }
    })
    // wx.chooseImage({
    //   success: function(res) {
    //     const tempFilePaths = res.tempFilePaths
    //     console.log(res)
    //     // wx.saveFile({
    //     //   tempFilePath: tempFilePaths[0],
    //     //   success (res) {
    //     //     const savedFilePath = res.savedFilePath
    //     //     console.log(res)
    //     //   }
    //     // })
    //     wx.openDocument({
    //       filePath: tempFilePaths[0],
    //       success: function (res) {
    //         console.log('打开文档成功')
    //       }
    //     })
    //   }
    // })
    
  },
  dayinsdkversion() {
    const sdkversion = wx.getSystemInfoSync().SDKVersion;
    console.log(sdkversion)
  },
  getSupervisorInfo() {
    wx.getSuperviseInfo({
      success(res) {
        console.log('~~~getSuperviseInfo~~~ success  ', res)
      },
      complete(res) {
        console.log('~~~getSuperviseInfo~~~ complete  ', res)
      }
    })
  },
  gcp() {
    const cpage = getCurrentPages()
    console.log('debug getCurrentPages ', cpage)
  },
  eventcallback(opt) {
    console.log('debug eventcallback ', opt)
  },
  eventchannelon() {
    // const eventChannel = this.getOpenerEventChannel()
    console.log(eventChannel)
    eventChannel.on('testevent', this.eventcallback)
  },
  eventchanneloff() {
    // const eventChannel = this.getOpenerEventChannel()
    eventChannel.off('testevent', this.eventcallback)
  },
  eventchannelemit() {
    console.log('~~~~~~eventchannelemit~~~~~~~~~')
    // const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('testevent', {a: 'hahahhahh'})
  },
  eventchannelemitonceevvent() {
    // const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenerPage', {a: 'onceevent  hahahhahh'})
  },
  testeventcb(e) {
    console.log('eventChannel debug: in second page testevent cb', e)

    

    // setTimeout(() => {
    //   console.log(`.off('testevent'`)
    //   eventChannel.off('testevent', this.testeventcb)
    // }, 5000)
  },
})