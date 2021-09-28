Page({
  data: {
    videoSrc: null,
    flash: 'on',
    devicePosition: 'back',

  },

  onLoad() {
    this.ctx = wx.createCameraContext()
  },



  takePhoto1() {
 
    this.ctx.takePhoto({
      quality: 'low',
      success: (res) => {
        console.log(res);
        console.log("takePhoto success回调")
        this.setData({
          src: res.tempImagePath
        })
        wx.getImageInfo({
          src: res.tempImagePath,
          success(res){
            console.log(res)
            wx.showModal({
              title: "宽高比："+res.width+"*"+res.height+'图片类型:'+res.type
            })
          }
        })
      },
      fail(res){
        console.log(res)
        console.log("takePhoto fail回调")
      },
      complete(res){
        console.log(res)
        console.log("takePhoto complete回调")
      }

    })
  },


  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      },
      fail(res){
        console.log("开始录制失败的回调",res)
      },
      complete(res){
        console.log("开始录制完成",res)
      }
    })
  },
  stopRecord() {
    this.ctx.stopRecord({
//      compressed:true,

      success: (res) => {
        console.log("停止录制",res)
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempVideoPath,
          success(res){
            console.log("保存到本地",res)
          },
          fail(res){
            console.log(0)
            console.log('保存失败',res)
          }
        })
      },
      fail(res){
        console.log("停止录制失败",res)
      },
      complete(res){
        console.log("完成录制",res)
      }
    })
  },

  saveVedio(){
    wx.downloadFile({
      url: 'https://dn-odum9helk.qbox.me/spjc/1.mp4',
      success(res) {
        console.log('下载视频成功')
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res){
            console.log('http路径保存',res)
          }
        })
      },
      fail(res) {
        console.log('下载视频失败', res)
      }
    })
    
  },

  cchangedevicePosition(e){
    this.setData({
      devicePosition: e.detail.value
    }),
    wx.showToast({
      title: "当前摄像头朝向: " + e.detail.value,
      icon: "none"
    })
  },



  bindchangeflash(e){
    this.setData({
      flash: e.detail.value
    }),
    wx.showToast({
      title: "当前闪关灯模式: " + e.detail.value,
      icon: "none"
    })
  },

  bindinitdone(data) {
    console.log('bindinitdone camera初始化完成', data)
  },

  bindstop(){
    console.log('摄像头在非正常终止时触发，如退出后台等情况----触发了')
  },
  binderror(){
    console.log('用户不允许使用摄像头时======触发了')
  },

  bindscancode(){
    console.log("bindscancode扫码识别成功")
  },

})