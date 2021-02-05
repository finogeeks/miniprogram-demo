Page({
  data: {
    formats: {},
    bottom: 0,
    readOnly: true,
    placeholder: '开始输入...',
    _focus: false,
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onLoad() {
    
  },
  onEditorReady(opt) {
    console.log(opt)
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      console.log('~~~~~createSelectorQuery~~~res~~~', res);
      that.editorCtx = res.context
    }).exec()
  },
  blurEditor() {
    this.editorCtx.blur({
      success(res) {
        console.log('editor blur success', res);
      },
      fail(res) {
        console.log('editor blur fail', res);
      },
      complete(res) {
        console.log('editor blur complete', res);
      }
    })
  },
  clearEditor() {
    this.editorCtx.clear({
      success(res) {
        console.log('editor clear success', res);
      },
      fail(res) {
        console.log('editor clear fail', res);
      },
      complete(res) {
        console.log('editor clear complete', res);
      }
    })
  },
  setColor() {
    const that = this
    that.editorCtx.format('color', 'red')
  },
  setColorGreen() {
    const that = this
    that.editorCtx.format('color', 'green')
  },
  getContents() {
    this.editorCtx.getContents({
      success(res) {
        console.log('editor getContents success', res);
      },
      fail(res) {
        console.log('editor getContents fail', res);
      },
      complete(res) {
        console.log('editor getContents complete', res);
      }
    })
  },
  getSelectionText() {
    this.editorCtx.getSelectionText({
      success(res) {
        console.log('editor getSelectionText success', res);
      },
      fail(res) {
        console.log('editor getSelectionText fail', res);
      },
      complete(res) {
        console.log('editor getSelectionText complete', res);
      }
    })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success(res) {
        console.log('editor insertDivider success', res);
      },
      fail(res) {
        console.log('editor insertDivider fail', res);
      },
      complete(res) {
        console.log('editor insertDivider complete', res);
      }
    })
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      count: 1,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths[0];
        console.log("tempFilePaths", tempFilePaths)
        that.editorCtx.insertImage({
          src: tempFilePaths,
          mode: 'aspectFit',
          
          success(res) {
            console.log('editor insertImage success', res);
          },
          fail(res) {
            console.log('editor insertImage fail', res);
          },
          complete(res) {
            console.log('editor insertImage complete', res);
          }
        })
      }
    })
  },
  insertImageOnline() {
    this.editorCtx.insertImage({
      src: 'https://www-cdn.finclip.com/images/logo.png',
      mode: 'aspectFit',
      
      success(res) {
        console.log('editor insertImage success', res);
      },
      fail(res) {
        console.log('editor insertImage fail', res);
      },
      complete(res) {
        console.log('editor insertImage complete', res);
      }
    })
  },
  insertText() {
    this.editorCtx.insertText({
      text: 'insertText   ',
      success(res) {
        console.log('editor insertText success', res);
      },
      fail(res) {
        console.log('editor insertText fail', res);
      },
      complete(res) {
        console.log('editor insertText complete', res);
      }
    })
  },
  redo() {
    this.editorCtx.redo({
      success(res) {
        console.log('editor redo success', res);
      },
      fail(res) {
        console.log('editor redo fail', res);
      },
      complete(res) {
        console.log('editor redo complete', res);
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat({
      success(res) {
        console.log('editor removeFormat success', res);
      },
      fail(res) {
        console.log('editor removeFormat fail', res);
      },
      complete(res) {
        console.log('editor removeFormat complete', res);
      }
    })
  },
  scrollIntoView() {
    console.log('scrollIntoView')
    this.editorCtx.scrollIntoView()
  },
  setContents() {
    this.editorCtx.setContents({
      delta: [
        { insert: 'Hello ' },
        { insert: 'World!', attributes: { bold: true } },
        { insert: '\n' }
      ],
      success(res) {
        console.log('editor setContents success', res);
      },
      fail(res) {
        console.log('editor setContents fail', res);
      },
      complete(res) {
        console.log('editor setContents complete', res);
      }
    })
  },
  undo() {
    this.editorCtx.undo({
      success(res) {
        console.log('editor undo success', res);
      },
      fail(res) {
        console.log('editor undo fail', res);
      },
      complete(res) {
        console.log('editor undo complete', res);
      }
    })
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  complete(){
    const that = this
    console.log("富文本内容", that.editorCtx.getContents({ 
      success: function (res) {
        console.log('富文本内容', res.html)
        wx.setStorageSync('richtext', res.html)
        wx.navigateTo({
          url: '/richtextpage/richtextpage',
        })
      }
    }))
  },
  removeColor() {
    const that = this
    that.editorCtx.removeFormat({
      success(res) {
        console.log('removeFormat success', res)
      }
    })
  },
  setBlod() {
    console.log('setBlod')
    this.editorCtx.format('bold')
  },
  setFormat(event) {
    const {changename, chanvevalue=null} = event.target.dataset;
    this.editorCtx.format(changename, chanvevalue);
  },
  changeReadOnly() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  }
})
