const example = require('./example.js')

function randomHexColor() {
  var r = Math.floor(Math.random() * 256); //随机生成256以内r值
  var g = Math.floor(Math.random() * 256); //随机生成256以内g值
  var b = Math.floor(Math.random() * 256); //随机生成256以内b值
  var alpha = Math.random() * 0.4 + 0.6; //随机生成1以内a值
  return `rgba(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色

}

Page({
  onShareAppMessage() {
    return {
      title: '创建画布',
      path: 'packageAPI/pages/canvas/canvas'
    }
  },

  log1(e) {
    console.log('ctx1:', e.type, e)
  },

  log2(e) {
    console.log('ctx2:', e.type, e)
  },

  onLoad() {

    const methods = Object.keys(example)
    this.setData({
      methods
    })

    // 旧获取 canvas 方式
    const ctx1 = wx.createCanvasContext('canvas1');
    console.log('ctx1', ctx1)

    // 新获取 canvas 方式
    let ctx2
    let canvas2
    const query = wx.createSelectorQuery()
    query.select('#canvas2').fields({ node: true, size: true }).exec((res) => {
      canvas2 = res[0].node
      ctx2 = canvas2.getContext('2d')

      // 可以设置 dpr 的值，绘制高分辨率的图
      const dpr = 1 || wx.getSystemInfoSync().pixelRatio
      canvas2.width = res[0].width * dpr
      canvas2.height = res[0].height * dpr
      console.log('ctx2', ctx2)
    })

    // fino 基础库兼容新旧写法，两者均可获取到同样的 context
    // 当 canvas 带 native 时，表示用原生组件
    // 原生组件下，仅 putImageData 和 getImageData api 会有区别

    const that = this
    methods.forEach(function (method) {
      that[method] = function () {
        console.log("run:", method)
        let color = null
        if (method === 'setRandom') {
          color = randomHexColor()
        }
        example[method](ctx1, true, color)
        // 旧版需要调用 draw 接口
        ctx1.draw(true, (res) => { console.log('ctx1 draw finish:', res) });

        example[method](ctx2, false, color, canvas2)
        try {
          // 微信新的 canvas 没有 draw 方法，加个报错兼容
          ctx2.draw(true, (res) => { console.log('ctx2 draw finish:', res) })
        } catch (err) {
        }
      }
    })
  },

  toTempFilePath() {
    wx.canvasToTempFilePath({
      canvasId: 'canvas1',
      success(res) {
        console.log('canvas1', res)
      },

      fail(res) {
        console.log('canvas1', res)
      }
    })

    const query = wx.createSelectorQuery()
    query.select('#canvas2').fields({ node: true, size: true }).exec((res) => {
      const canvas = res[0].node

      wx.canvasToTempFilePath({
        canvas,
        success(res) {
          console.log('canvas2', res)
        },

        fail(res) {
          console.log('canvas2', res)
        }
      })
    })
  },
  imageData() {

    // 旧版
    // 整一个绿色方块
    const arr = new Array(100 * 100 * 4);
    for (var i = 0; i < arr.length; i += 4) {
      arr[i + 0] = 0;
      arr[i + 1] = 255;
      arr[i + 2] = 0;
      arr[i + 3] = 255;
    }
    // 把绿色方块画到 0 0 坐标
    wx.canvasPutImageData({
      canvasId: 'canvas1',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      data: new Uint8ClampedArray(arr),
      success(res) {
        console.log(res)
      },
      fail: console.log
    })
    // 获取 0 0 坐标，100 * 100 的图
    wx.canvasGetImageData({
      canvasId: 'canvas1',
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      success(res) {
        console.log(res)
        // 把获取到的，画到 200 0 坐标上
        // 会出现两个绿色方块
        wx.canvasPutImageData({
          canvasId: 'canvas1',
          x: 200,
          y: 0,
          width: 100,
          height: 100,
          data: res.data,
          success(res) {
            console.log(res)
          },
          fail: console.log
        })
      },
      fail: console.log
    })


    // 新版
    const query = wx.createSelectorQuery()
    query.select('#canvas2').fields({ node: true, size: true }).exec((res) => {
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      // 一个绿色方块数据
      const imgData = context.createImageData(100, 100);
      for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = 0;
        imgData.data[i + 1] = 255;
        imgData.data[i + 2] = 0;
        imgData.data[i + 3] = 255;
      }

      context.putImageData(imgData, 0, 0, 20, 20, 100, 100)

      const image = context.getImageData(50, 50, 100, 100)
      context.putImageData(image, 200, 0, 20, 20, 100, 100)
    })

  }
})
