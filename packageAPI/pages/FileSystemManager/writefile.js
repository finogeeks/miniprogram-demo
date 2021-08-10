// pages/writefile/index.js
console.log('page 打印', wx.env.USER_DATA_PATH);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filePath: `${wx.env.USER_DATA_PATH}/d`,
    data: "",
    encoding: "utf-8",
    source: "",
    readencoding:"utf-8"

  },

  readFileFunc(path, encoding,position,length) {
    console.log('readFile encoding:', encoding, '; path:', path);

    const fs = wx.getFileSystemManager()
    fs.readFile({
      filePath: path,
      encoding,
      position,
      length,

      success(res) {
        console.log('readFile success:', res)
      },
      fail(res) {
        console.log('readFile fail:', res)
      }
    })
  },

  readFileSyncFunc(path, encoding, position, length) {
    console.log('readFileSync encoding:', encoding, '; path:', path);

    const fs = wx.getFileSystemManager()

    try {
      const res = fs.readFileSync(path, encoding,position,length)
      console.log('readFileSync res:', res)
    } catch (e) {
      console.log('readFileSync error:', e)
    }
  },

  //同步
  writeFileSync() {
    const fs = wx.getFileSystemManager()
    try {
      const res = fs.writeFileSync(
         /* `${wx.env.USER_DATA_PATH}/hello.mp3` */null, "", 'utf8'
      )
      console.log('writeFileSync:', res)

    } catch (e) {
      console.error('writeFileSync err:', e)
    }
  },

  //异步文件测试 
  writeFile() {
    console.log("打印地址", this.data.filePath)
    console.log("当前选中deta：",this.data.data)
    const fs = wx.getFileSystemManager()
    fs.writeFile({
      filePath: this.data.filePath,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeFile success:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
        this.readFileSyncFunc(this.data.filePath, this.data.encoding,1,3)
        this.readFileFunc(this.data.filePath, this.data.encoding,2,4)
      },
      fail(res) {
        console.log('writeFile fail:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },

  writeFileStartRange() {
    console.log("打印地址", this.data.filePath)
    console.log("当前选中deta：",this.data.data)
    const fs = wx.getFileSystemManager()
    fs.writeFile({
      filePath: this.data.filePath,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeFile success:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
        this.readFileSyncFunc(this.data.filePath, this.data.encoding,3,1)
        this.readFileFunc(this.data.filePath, this.data.encoding,3,1)
      },
      fail(res) {
        console.log('writeFile fail:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },

  writeFileLength0() {
    console.log("打印地址", this.data.filePath)
    console.log("当前选中deta：",this.data.data)
    const fs = wx.getFileSystemManager()
    fs.writeFile({
      filePath: this.data.filePath,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeFile success:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
        this.readFileSyncFunc(this.data.filePath, this.data.encoding,2,0)
        this.readFileFunc(this.data.filePath, this.data.encoding,2,0)
      },
      fail(res) {
        console.log('writeFile fail:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },

  writeFileLengthPoint() {
    console.log("打印地址", this.data.filePath)
    console.log("当前选中deta：",this.data.data)
    const fs = wx.getFileSystemManager()
    fs.writeFile({
      filePath: this.data.filePath,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeFile success:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
        this.readFileSyncFunc(this.data.filePath, this.data.encoding,2,1.2)
        this.readFileFunc(this.data.filePath, this.data.encoding,2,1.2)
      },
      fail(res) {
        console.log('writeFile fail:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },


  writeFileReadnoEncoding() {
    console.log("打印地址", this.data.filePath)
    console.log("当前选中deta：",this.data.data)
    const fs = wx.getFileSystemManager()
    const path = `${wx.env.USER_DATA_PATH}/nc`
    fs.writeFile({
      filePath:path,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeFile success:', res)
        console.log('写文件路径：' ,path),
        this.readFileSyncFunc(path)
        this.readFileFunc(path)
      },
      fail(res) {
        console.log('writeFile fail:', res)
//        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },

  writeFilePermission() {
    console.log("打印地址", this.data.filePath)
    console.log("当前选中deta：",this.data.data)
    const fs = wx.getFileSystemManager()
    fs.writeFile({

      data: this.data.data,
      filePath:`${wx.env.USER_DATA_PATH}/d`, 
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeFile success:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
        this.readFileSyncFunc(this.data.filePath, this.data.encoding,1,3)
        this.readFileFunc(this.data.filePath, this.data.encoding,2,4)
      },
      fail(res) {
        console.log('writeFile fail:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },

  writeFileNotFound() {
    console.log("打印地址", this.data.filePath)
    console.log("当前选中deta：",this.data.data)
    const fs = wx.getFileSystemManager()
    fs.writeFile({

      data: this.data.data,
      filePath:`${wx.env.USER_DATA_PATH}/d`, 
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeFile success:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
        this.readFileSyncFunc(`${wx.env.USER_DATA_PATH}/dl`,this.data.encoding,1,3)
        this.readFileFunc(`${wx.env.USER_DATA_PATH}/dl`, this.data.encoding,2,4)
      },
      fail(res) {
        console.log('writeFile fail:', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },

  base64File() {
    const path = `${wx.env.USER_DATA_PATH}/d`
    wx.fileToBase64({
      url: path,
      success: (res) =>  {
        console.log('fileToBase64 success:  ', res)
        console.log(res.data)
      },
      fail(res) {
        console.log('fileToBase64 fail:  ', res)
      }
    })
  },

  saveFile() {
    wx.saveFile({
      filePath: `${wx.env.USER_DATA_PATH}/d`,
      success(res) {
        console.log("保存成功", res)
      },
      fail(res) {
        console.log("保存失败", res)
      }
    })
  },



  downFile() {
    wx.downloadFile({
      url: `${wx.env.USER_DATA_PATH}/d`,
      success(res) {
        console.log("下载成功", res)
      },
      fail(res) {
        console.log("下载失败", res)
      }
    })
  },

  //图片
  writeImage() {
    const fs = wx.getFileSystemManager()
    const path = `${wx.env.USER_DATA_PATH}/a`
    fs.writeFile({
      filePath: path,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeImagSuccess', res)
        console.log(path)
        this.readFileSyncFunc(path, 'base64')
        this.readFileFunc(path, 'base64')
      },
      fail(res) {
        console.log('writeImageFail', res)
      }
    })
  },

  imagePreview() {
    wx.previewImage({
      urls: [`${wx.env.USER_DATA_PATH}/a`],
      success(res) {
        console.log("图片预览成功", res)
      },
      fail(res) {
        console.log("图片预览失败", res)
      }
    })
  },


  imageCompress() {

    wx.compressImage({
      src: '`${wx.env.USER_DATA_PATH}/a`',

      success(res) {
        console.log("图片压缩成功", res)
      },
      fail(res) {
        console.log("图片压缩失败", res)
      }
    })
  },


  imageSaveToPhotosAlbum() {
    wx.saveImageToPhotosAlbum({
      filePath: `${wx.env.USER_DATA_PATH}/a`,

      success(res) {
        console.log("图片保存到相册成功", res)
      },
      fail(res) {
        console.log("图片保存到相册失败", res)
      }
    })
  },

  fileUpload() {

    wx.uploadFile({
      filePath: `${wx.env.USER_DATA_PATH}/a`,
      name: 'file',
      url: 'https://finchat-mop-b.finogeeks.club/api/v1/mop/finstore/dev/files?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjUxOTQyMjgsImZjaWQiOiI1ZmYzZDhmZWU3YzNiNTAwMDExYWQxMmEiLCJpYXQiOjE2MjUxODcwMjgsImlzcyI6Ijc1NWUxNnFrNVZLUnBlcWhKM1IySVFwV2NOdlQ5TWJOIn0.IQXdjiH5One-GVsU9E5KTze0fXJ7InJE-BrmcQs9yIc',
      success(res) {
        console.log("文件上传成功", res)
      },
      fail(res) {
        console.log("文件上传失败", res)
      }
    })
  },



  //视频
  writeVideo() {
    const fs = wx.getFileSystemManager()
    const path = `${wx.env.USER_DATA_PATH}/b.mp4`
    fs.writeFile({
      filePath: path,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeVideo Success', res)
        console.log(`${wx.env.USER_DATA_PATH}/b.mp4`)

        this.readFileSyncFunc(path, 'base64')
        this.readFileFunc(path, 'base64')
      },

      fail(res) {
        console.log('writeFail', res)
      }
    })
  },

  videoSaveToPhotosAlbum() {
    wx.saveVideoToPhotosAlbum({
      filePath: `${wx.env.USER_DATA_PATH}/b.mp4`,
      success(res) {
        console.log("视频保存到相册成功", res)
      },
      fail(res) {
        console.log("视频保存到相册失败", res)
      }
    })
  },


  mediaPreview() {
    wx.previewMedia({
      sources: [
        {
          "url": `${wx.env.USER_DATA_PATH}/b.mp4`,
          "type": "video"
        }
      ],
      success(res) {
        console.log("视频播放成功", res)
      },
      fail(res) {
        console.log("视频播放失败", res)
      }
    })
  },


  videoPreview() {
    wx.previewVideo({

      url: `${wx.env.USER_DATA_PATH}/b.mp4`,
      autoplay: true,
      success(res) {
        console.log('视频播放成功', res)
      },
      fail(res) {
        console.log('播放失败', res)
      }
    })

  },

  //语音
  writeAudio() {
    const fs = wx.getFileSystemManager()
    const path = `${wx.env.USER_DATA_PATH}/c.mp3`
    fs.writeFile({
      filePath: path,
      data: this.data.data,
      encoding: this.data.encoding,
      success: (res) => {
        console.log('writeAudio Success', res)
        console.log(`${wx.env.USER_DATA_PATH}/c.mp3`)
        this.readFileSyncFunc(path, 'base64',10,13)
        this.readFileFunc(path, 'base64',20,15)
      },

      fail(res) {
        console.log('writeFail', res)
      }
    })
  },

  innerAudioPlay() {
    const ctx = wx.createInnerAudioContext()
    ctx.src = `${wx.env.USER_DATA_PATH}/c.mp3`
    /*     ctx.seek(20) */
    ctx.play()
    ctx.onPlay(() => {
      console.log('开始播放')
    })
    ctx.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
      console.log(res)
    })
  },


  voicePlay() {

    wx.playVoice({
      filePath: `${wx.env.USER_DATA_PATH}/c.mp3`,
      success(res) {
        console.log("播放成功", res)
      },
      fail(res) {
        console.log("播放失败", res)
      }
    })
  },


  documentOpen() {
    const fs = wx.getFileSystemManager()
    fs.writeFile({
      filePath: `${wx.env.USER_DATA_PATH}/wd.doc`,
      data: this.data.data,
      encoding: this.data.encoding,
      success(res) {
        console.log('writeSuccess', res)
        console.log(`${wx.env.USER_DATA_PATH}/wd.doc`)
        wx.openDocument({
          filePath: `${wx.env.USER_DATA_PATH}/wd.doc`,

          success(res) {
            console.log("文件打开成功", res)
          },
          fail(res) {
            console.log("文件打开失败", res)
          }
        })
      },
      fail(res) {
        console.log('writeFail', res)
      }
    })
  },








  writeFileArrayBuffer() {
    console.log("打印地址", this.data.filePath)
    /*     console.log("打印data",this.data.data) */
    const fs = wx.getFileSystemManager()
    fs.writeFile({
      data: wx.base64ToArrayBuffer(this.data.data),
      filePath: `${wx.env.USER_DATA_PATH}/d`,
      encoding: this.data.encoding,
      success(res) {
        console.log('writeSuccess', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      },
      fail(res) {
        console.log('writeFail', res)
        console.log(`${wx.env.USER_DATA_PATH}/d`)
      }
    })
  },




  bindchangepath(e) {
    this.setData({
      filePath: e.detail.value
    })
  },

  bindchangeencoding(e) {
    this.setData({
      encoding: e.detail.value
    })
  },

  bindchangedata(e) {
    this.setData({
      data: e.detail.value
    })
  },


})
