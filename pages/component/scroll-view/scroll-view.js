const order = ['demo1', 'demo2', 'demo3']

Page({
  onPulling(e) {
    console.log('onPulling:', e)
  },
  onRefresh() {
    if (this._freshing) return
    this._freshing = true
    setTimeout(() => {
      this.setData({
        triggered: false,
      })
      this._freshing = false
    }, 3000)
  },
  onRestore(e) {
    console.log('onRestore:', e)
  },
  onAbort(e) {
    console.log('onAbort', e)
  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'pages/component/scroll-view/scroll-view'
    }
  },

  data: {
    toView: 'green',
    triggered: false,
  },

  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },



})
