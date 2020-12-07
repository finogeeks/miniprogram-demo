// pages/API/get-network-type/get-network-type.js
Page({
  data: {
    result: ''
  },
  testBuffer() {
    const base64 = 'CxYh'
    const arrayBuffer = wx.base64ToArrayBuffer(base64)
    console.log('call wx.base64ToArrayBuffer', arrayBuffer);
    const base64res = wx.arrayBufferToBase64(arrayBuffer)
    console.log('call wx.arrayBufferToBase64', base64res);
    this.setData({
      result: base64res
    });
  }
})
