// pages/API/voice/voice.js
const util = require('../../../utils/util.js')

let playTimeInterval
let recordTimeInterval
Page({
  data: {
    recording: false, // 录音中
    filePath: '',
  },

  onHide() {
    if (this.data.recording) {
      wx.stopRecord() // 结束录音
    }
  },
  startRecord() {
    this.setData({
      recording: true,
    })
    const that = this;
    wx.startRecord({
      success (res) {
        console.log(res);
        const tempFilePath = res.tempFilePath
        that.setData({
          filePath: tempFilePath,
        })
      },
      fail(res) {
        console.log(res);
      }
    })
  },
  stopRecord() {
    this.setData({
      recording: false,
    })
    wx.stopRecord() // 结束录音
  },
  playVoice() {
    wx.playVoice({
      filePath: this.data.filePath,
      success: (res) => {
        console.log('播放成功', res);
      },
      fail: (res) =>{
        console.log('播放失败', res);
      }
    })
  },
  stopVoice() {
    wx.stopVoice({
      success: (res) => {
        console.log('播放成功', res);
      },
      fail: (res) =>{
        console.log('播放失败', res);
      }
    })
  },
  pauseVoice() {
    wx.pauseVoice();
  }
})
