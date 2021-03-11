const example = require('./example.js')

Page({
  onShareAppMessage() {
    return {
      title: '创建画布',
      path: 'packageAPI/pages/canvas/canvas'
    }
  },

  onLoad() {
    this.context = wx.createContext()
    console.log('wx.createContext', this.context);

    const methods = Object.keys(example)
    console.log(methods);
    this.setData({
      methods
    })

    const that = this
    methods.forEach(function (method) {
      that[method] = function () {
        // 写法1 官方文档有描述的写法， 微信基础库支持，我们不支持
        // 
        console.log('call action', method)
        const ctx = wx.createCanvasContext('canvas');
        example[method](ctx)
        ctx.draw(false, (res) => { console.log(res) });
        const actions = that.context.getActions()
        console.log('that.context.getActions()', actions, ctx);
        
        // 写法2 更旧版本的写法 微信支持，fino基础库不支持
        // wx.createContext 和 wx.drawCanvas 疑似已经被从官方基础库文档中移除，但是官方基础库依旧支持

        // example[method](that.context)
        // const actions = that.context.getActions()
        // wx.drawCanvas({
        //   canvasId: 'canvas',
        //   actions
        // })

        // 写法3 同层渲染的原生canvas 就没实现
      }
    })
  },

  toTempFilePath() {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success(res) {
        console.log(res)
      },

      fail(res) {
        console.log(res)
      }
    })
  }
})
