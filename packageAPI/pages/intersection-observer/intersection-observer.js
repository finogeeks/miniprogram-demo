Page({
  onShareAppMessage() {
    return {
      title: 'WXML节点布局相交状态',
      path: 'packageAPI/pages/intersection-observer/intersection-observer'
    }
  },

  data: {
    appear: false
  },
  onLoad() {
    this._observer = wx.createIntersectionObserver(this)
    this._observer
      .relativeTo('.scroll-view')
      .observe('.ball', (res) => {
        console.log(res)
        this.setData({
          appear: !this.data.appear
        })
      })
  },
  onUnload() {
    if (this._observer) this._observer.disconnect()
  }
})
