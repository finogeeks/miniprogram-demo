const app = getApp()

Page({
  data: {
    height: 50,
    flex: 1,
    show: true,
    position: 0,
    kbastyle: `height: 66px;position:44;`,
    editingvalue: `height: 66px;`,
    covershow: false
  },
  onLoad: function () {
    
  },

  focus1() {
    console.log('focus input\n')
  },

  blur1() {
    console.log('blur input')
  },

  focus2() {
    console.log('focus textarea')
  },

  blur2() {
    console.log('blur textarea')
  },

  tap (e) {
    console.log('bindtap', e)
  },

  positionchange (e) {
    console.log(e.detail.value)
    this.setData({
      position: e.detail.value
    })
  },

  textareainput (e) {
    const value = e.detail.value || ''
    console.log('textareainput', value)
    // const reg = new RegExp(`(?<=;)position:.*?(?=;)`)
    // const hasp = reg.exec(value)
    const hasp = value.indexOf('position:')
    console.log('textareainput', hasp)
    if (hasp > -1) {
      console.log('textareainput hasp ', value.slice((hasp+9), -1))
      this.setData({
        position: value.slice((hasp+9), -1)
      })
    }
    this.setData({
      kbastyle: value
    })
  },

  kbheightchange (e) {
    console.log('~~~~~~~~~~kbheightchange~~~~~~~~', e)
  },

  kbfocus () {
    console.log('~~~~~~~~~~kbfocus~~~~~~~~')
  },

  kbblur () {
    console.log('~~~~~~~~~~kbblur~~~~~~~~')
  },
  changecovershow () {
    this.setData({
      covershow: !this.data.covershow
    })
  }
})
