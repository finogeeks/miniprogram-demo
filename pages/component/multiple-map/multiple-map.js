// pages/mapmultiple/mapmultiple.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    no1: null,
    no2: null,
    no3: null,
    non4: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const no1 = wx.createMapContext('abcdef1')
    const no2 = wx.createMapContext('abcdef2')
    const no3 = wx.createMapContext('abcdef3')
    const no4 = wx.createMapContext('abcdef4')
    this.setData({
      no1,
      no2,
      no3,
      no4
    })
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
  emitaddmarkers (e) {
    console.log(e.target.dataset.mapid)
    const mapcontext = this.data[`no${e.target.dataset.mapid}`]
    mapcontext.getCenterLocation({
      complete:(res) => {
        console.log(res)
        const { latitude, longitude } = res
        mapcontext.addMarkers({
          markers: [{
            latitude, longitude
          }],
          complete: (res)=> {
            console.log('addMarkers complete: ',res)
          }
        })
      }
    })
  },
  emitgetcenterlocation(e) {
    const mapcontext = this.data[`no${e.target.dataset.mapid}`]
    mapcontext.getCenterLocation({
      iconPath: '/assets/images/logo.png',
      success: (res) => {
        console.log('debug: getCenterLocation succcess ', res)
      },
      fail: (res) => {
        console.log('debug: getCenterLocation fail ', res)
      },
      complete: (res) => {
        console.log('debug: getCenterLocation complete ', res)
      }
    })
  }
}) 