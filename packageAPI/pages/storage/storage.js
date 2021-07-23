// pages/API/storage/storage.js
Page({

  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },

  keyChange(e) {
    this.setData({
      key: e.detail.value
    })
  },

  dataChange(e) {
    this.setData({
      data: e.detail.value
    })
  },

  getStorageSync() {
    const {key, data} = this.data
    let storageData

    if (key.length === 0) {
      this.setData({
        key,
        data,
      })
      wx.showModal({
        title: '读取数据失败',
        content: 'key 不能为空'
      })
    } else {
      storageData = wx.getStorageSync(key)
      console.log(storageData)
      if (storageData === '') {
        this.setData({
          key,
          data: storageData
        })
        wx.showModal({
          title: '读取数据失败',
          content: '找不到 key 对应的数据'
        })
      } else {
        this.setData({
          key,
          data:storageData
        })
        wx.showModal({
          title: '读取数据成功',
          content: `${storageData}`,
        })
      }
    }
  },

  setStorageSync() {
    const {key, data} = this.data
    if (key.length === 0) {
      this.setData({
        key,
        data,
      })
      wx.showModal({
        title: '保存数据失败',
        content: 'key 不能为空'
      })
    } else {
      wx.setStorageSync(key, data)
      this.setData({
        key,
        data,
      
      })
      wx.showModal({
        title: '存储数据成功'
      })
    }
  },

  clearStorageSync() {
    wx.clearStorageSync()
    this.setData({
      key: '',
      data: '',
    })
    wx.showModal({
      title: '清除数据成功'
    })
  },
  removeStorageSync() {
    const key = this.data.key;
    if (!key) {
      wx.showModal({
        title: '移除数据失败',
        content: 'key 不能为空'
      })
      return;
    }
    wx.removeStorageSync(key)
    wx.showModal({
      title: '移除数据成功',
    })
  },
  getStorageInfoSync() {
    const res = wx.getStorageInfoSync();
    wx.showModal({
      title: '请查看console',
    })
    console.log(res)
  },
  clearStorage() {
    wx.clearStorage({
      success: (res) =>{
        this.setData({
          key: '',
          data: '',
        })
        wx.showModal({
          title: '清除数据成功'
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
    
  },
  getStorage() {
    const key = this.data.key;
    if (!key) {
      wx.showModal({
        title: '获取数据失败',
        content: 'key 不能为空'
      })
      return;
    }
    wx.getStorage({
      key,
      success: (res) =>{
        console.log(res);
        wx.showModal({
          title: '获取数据成功',
        })
        this.setData({
          data: res.data
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
    
  },
  getStorageInfo() {
    wx.getStorageInfo({
      success: (res) =>{
        console.log(res);
        wx.showModal({
          title: '获取数据成功',
          content: '请查看console'
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  removeStorage() {
    const key = this.data.key;
    if (!key) {
      wx.showModal({
        title: '移除数据失败',
        content: 'key 不能为空'
      })
      return;
    }
    wx.removeStorage({
      key,
      success: (res) =>{
        console.log(res);
        wx.showModal({
          title: '移除数据成功',
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  setStorage() {
    const key = this.data.key;
    const data = this.data.data;
    if (!key) {
      wx.showModal({
        title: '保存数据失败',
        content: 'key 不能为空'
      })
      return;
    }
    wx.setStorage({
      key,
      data,
      success: (res) =>{
        console.log(res);
        wx.showModal({
          title: '保存数据成功',
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  clearData() {
    this.setData({
      key: '',
      data: '',
    })
  }
})
