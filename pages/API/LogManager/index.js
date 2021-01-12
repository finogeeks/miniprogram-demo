//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  startLog:function(data) {
    console.log('startLog')
    const logger = wx.getLogManager({level: 0})
    logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
    logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
    logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
    logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
    logger.log('test getLogManager log ~~~')
    // 使用logger打印的日志不会体现在小程序vconsole中
    console.log(123123123123123123123123123123123123123123)
    console.log(29384759823475983724895)
    //  使用普通console日志在vconsole正常打印
  }
})
