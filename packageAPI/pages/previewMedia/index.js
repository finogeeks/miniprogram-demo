Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  previewMedia(url) {
    console.log(url)
    wx.previewMedia({
      sources: [
        {
          url: typeof url === 'string' ? url : 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/304-400x400.jpeg',
          type: 'image',
          poster: 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/1071-400x600.jpeg'
        },
        {
          url: 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/1071-400x600.jpeg',
          type: 'image',
          poster: 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/1071-400x600.jpeg'
        },
        {
          url: 'https://dn-odum9helk.qbox.me/spjc/1.mp4',
          type: 'video',
          poster: 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/1071-400x600.jpeg'
        }
      ],
      success(res) {
        console.log('previewMedia  success  ', res)
      },
      fail(res) {
        console.log('previewMedia  fail  ', res)
      },
      complete(res) {
        console.log('previewMedia  complete  ', res)
      }
    })
  },
  previewMedialocal: function() {
    wx.getImageInfo({
      src: 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/1071-400x600.jpeg',
      success: (res)=> {
        console.log(res)
        this.previewMedia(res.path)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  previewImage() {
    wx.previewImage({
      urls: [
        'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/304-400x400.jpeg',
        'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/temp/1071-400x600.jpeg',
      ],
      showmenu: true
    })
  },
  previewVideo() {
    wx.previewVideo({
      url: 'https://public-1251849568.cos.ap-guangzhou.myqcloud.com/homeSite/video/%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D.mp4',
      autoplay: false
    })
  },
})