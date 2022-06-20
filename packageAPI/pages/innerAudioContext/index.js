//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    volume: 1,
    rate: 1,
  },
  onLoad() {
    const innerAudioContext = wx.createInnerAudioContext()
    this.ctx = innerAudioContext
    console.log(innerAudioContext)

    // innerAudioContext.playbackRate = 2.0

    // innerAudioContext.src = '/packageAPI/pages/innerAudioContext/mucis.mp3'
    // innerAudioContext.src = 'http://cdn.amathclass.cn/quesAudio/42fe780d-1607959109843.m4a'
    innerAudioContext.src = 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/mucis.mp3'

    const listener = ['Canplay', 'Ended', 'Pause', 'Play', 'Seeked', 'Seeking', 'Stop', 'TimeUpdate', 'Waiting']

    listener.forEach(key => {
      innerAudioContext['on' + key](() => {
        console.log('on' + key)
      })
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res)
      console.log(res.errCode)
    })
    // innerAudioContext.onWaiting((res)=>{
    //   console.log(res)
    //   console.log('wait')
    // })
  },
  onUnload() {
    this.ctx.destroy()
    console.log(this.ctx)
  },
  play() {
    this.ctx.play()
    // this.ctx.src = '/mucis.mp3'
    // this.ctx.autoplay = true
  },
  seek() {
    this.ctx.seek(60)
  },
  pause() {
    this.ctx.pause()
  },
  destroy() {
    this.ctx.destroy()
    console.log(this.ctx)
  },
  stop() {
    this.ctx.stop()
  },
  handleVolumeChange(e) {
    this.setData({
      volume: e.detail.value
    })
    this.ctx.volume = this.data.volume
  },
  handleRateChange(e) {
    this.setData({
      rate: e.detail.value
    })
    this.ctx.playbackRate = this.data.rate
  }
})
