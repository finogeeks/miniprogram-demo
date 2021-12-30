// pages/writefile/index.js
console.log('page 打印', wx.env.USER_DATA_PATH);

// const base64 = require('../../utils/data')
let fs = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // base64,
    // 配置路径循环生成
    paths: [
      `finfile://usr/a.txt`,
      `finfile://usr/b.txt`,
      `finfile://usr/c.txt`,
      `finfile://usr/test`,
      `finfile://usr/1.zip`,
      `finfile://usr/test/a.txt`,
      `finfile://usr/test/b.txt`,
      `finfile://usr/test/c.txt`,
      `finfile://temp/c.txt`,
      `finfile://temp/a/b/c`,
      `finfile://store/c.txt`,
      `http://usr/1.zip`,
      `http://usr/aa`,
      `http://usr/aa/ab.txt`,
      `http://store/a.txt`,
      `http://store/b.txt`,
      `http://store/test`,
      `wxfile://usr/aa`,
      `wxfile://usr/aa/abc.txt`,

    ],


    filePath: '',
    data: "",
    encoding: "",
    recursive: null,
    path1: '',
    path2: '',
    flag: '',
    position: '',
    offset:'',
    entries:''
  },

  onLoad() {
    this.setData({
      filePath: `${wx.env.USER_DATA_PATH}`
    })
    fs = wx.getFileSystemManager()
  },

  setParams(e) {
    const { key } =  e.currentTarget.dataset
    this.setData({
      [key]: e.detail.value
    })
  },


  

  downZipSave(){
    const  fs=wx.getFileSystemManager()
    wx.downloadFile({
      url: 'https://app.finogeeks.com/finchat/sdk/FinApplet-dev-2.34.0-alpha20210826v06.zip',
      success(res){
        console.log("文件下载成功",res)
        fs.saveFile({
          tempFilePath: res.tempFilePath,
          filePath: `${wx.env.USER_DATA_PATH}/1.zip`,          
          success(res){
            console.log("zip保存成功",res)
          },
          fail(res){
            console.log("zip保存失败",res)
          }
        })
      }
    })
  },


  invokeApi(e) {
    console.log('点击了 button')
    const { api, encoding, data, recursive, flag, length, entries, position, offset, arr = [], set, arrayBuffer, ...params } =  e.currentTarget.dataset

    if (api) {
      // 将配置的参数转换为 data 参数
      Object.keys(params).forEach(value => {
        const key = params[value]
        params[value] = this.data[key]
      })

      // encoding 和 data 有配置就是 true，直接赋值
      if (encoding !== undefined) {
        params.encoding = this.data.encoding
      }

      if (entries !== undefined) {
        params.entries = this.data.entries
      }

      if (length !== undefined) {
        params.length = this.data.length
      }
      if (position !== undefined) {
        params.position = this.data.position
      }

      if (data !== undefined) {
        params.data = this.data.data
      }
      if (recursive !== undefined) {
        params.recursive = this.data.recursive
      }

      if (flag !== undefined) {
        params.flag = this.data.flag
      } 

      if (arrayBuffer !== undefined) {
        params.arrayBuffer = new ArrayBuffer(arrayBuffer)
      }
      
      if (api.endsWith('Sync') && arr && arr.length) {
        let list = arr.split(',').map(key => this.data[key])
        console.log('准备执行同步 api：', api, list)
        fs[api].apply(this, list)
      } else {
        console.log('准备执行 api：', api, params)
        const res = fs[api]({
          ...params,
          success: (res) =>{
            if (set && res[set]) {
              this.setData({
                [set]: res[set]
              })
            }
            console.log('调用成功 success')
            console.log(res)
          },
          fail (res) {
            console.log('调用失败 fail')
            console.log(res)
          }
        })
        if (res) {
          console.log('调用成功 success:', res)
        }
        if (set) {
          this.setData({
            [set]: res
          })
        }
      }



    }
  }
})
 