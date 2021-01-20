// pages/component/page-meta/page-meta.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tile: 'page-meta',
    bgColor: '#ffffff',
    bgColorTop: '#333333',
    bgColorBottom: '#999999',
    scrollTop: '100rpx',
    duration: 200,
    fontSize: '30px',
    pageStyle: 'color: red',
    navigationTitle: '初始化navigation-bar文档',
    navigationBgColor: '#000000',
    frontColor: '#ffffff', // 只支持是全黑或者全白
    isLoadding: false,
    duration: 300,
    func: 'linear'

  },
  onResize(e) {
    console.log('当前页面正在resize',e)
  },
  onScroll(e) {
    console.log('当前页面正在滑动', e)
  },
  updatePageMeta() {
    this.setData({
      bgColor: '#000000',
      bgColorTop: '#999999',
      bgColorBottom: '#333333',
      fontSize: '30px',
      pageStyle: 'color: blue',
      scrollTop: '500rpx'

    })
  },
  updateNavigationBar() {
    this.setData({
      navigationTitle: '更新navigation-bar文档',
      navigationBgColor: '#999999',
      frontColor: '#000000', // 只支持是全黑或者全白
      isLoadding: true,
      duration: 500,
      func: 'linear'
    })
  },
  onShareAppMessage() {
    return {
      title: 'page-meta',
      path: 'pages/component/page-meta/page-meta'
    }
  }
})