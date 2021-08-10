//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    duration:'',
    stop:false,
    tempFilePath:''
  },
  onLoad(){
    this.ctx = wx.getRecorderManager()
    const listener = ['Error', 'FrameRecorded', 'InterruptionBegin', 'InterruptionEnd', 'Pause', 'Resume', 'Start']

    listener.forEach(key=>{
      this.ctx['on'+key]((res)=>{
        console.log('on'+key,res)
      })
    })
    this.ctx.onStop(res=>{
      const {tempFilePath} = res
      console.log(res)
      this.setData({
        tempFilePath
      })
    })
    const innerAudioContext = wx.createInnerAudioContext()
    this.audioContext = innerAudioContext
    this.audioContext.onError(res=>{
      console.log(res.errMsg)
      console.log(res)
      console.log(res.errCode)
    })
    //
  },
  start(){
    this.ctx.start({"format":"mp3"})
  },
  resume(){
    this.ctx.resume()
  },
  pause(){
    this.ctx.pause()
  },
  stop(){
    this.ctx.stop()
  },
  play(){
    if(this.data.tempFilePath){
      this.audioContext.src = this.data.tempFilePath
    }
    this.audioContext.play()
  }
})
