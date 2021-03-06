// pages/API/image/image.js
const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({
  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange(e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange(e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage() {
    const that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success(res) {
        console.log(res)
       
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },
  previewImage(e) {
    const current = e.target.dataset.src

    wx.previewImage({
      current,
      urls: this.data.imageList
    })
  },
  // 展示第一张图片信息
  showImageInfo() {
    if (!this.data.imageList.length) {
      return;
    }
    // 获取第一张图片信息
    wx.getImageInfo({
      src: this.data.imageList[0],
      success (res) {
        wx.showModal({
          title: `高：${res.height}, 宽：${res.width}`,
        })
        console.log(res.width)
        console.log(res.height)
      }
    })
  },
  // 长按保存第一张图片
  saveImage() {
    if (!this.data.imageList.length) {
      return;
    }
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imageList[0],
      success(res) { 
        wx.showToast({
          title: '保存成功',
        })
      }
    })
  },
})
