// pages/API/audio/audio.js
Page({
  onReady (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('https://www-cdn.finclip.com/audios/test.m4a')
    this.audioCtx.play()
  },
  data: {
    audioCtx: null,
    name: '此时此刻',
    src: '',
  },
  audioPlay () {
    this.audioCtx.play()
  },
  audioPause () {
    this.audioCtx.pause()
  },
  audio14 () {
    this.audioCtx.seek(14)
  },
  audioStart () {
    this.audioCtx.seek(0)
  }
})
