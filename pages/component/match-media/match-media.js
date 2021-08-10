// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onResize(res){
    res.size.windowWidth // 新的显示区域宽度
    res.size.windowHeight // 新的显示区域高度
    console.log(res.size.windowWidth*res.size.windowWidth)
    wx.showToast({
      title:res.size.windowWidth*res.size.windowWidth
    })
  },
  onLoad() {
    this.setData({
      motto: 'hello world'
    })
  },
  click1(){
    wx.navigateTo({
      url: '/pages/indexApi/indexApi',
    })
  }
})
