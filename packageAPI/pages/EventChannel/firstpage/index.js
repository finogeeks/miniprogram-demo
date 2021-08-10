let eventChannel = {}

Component({

  /**
   * 组件的初始数据
   */
  data: {

  },

  options: {
    multipleSlots: true,
    testoptions: '12skdfksdfk123'
  },

  attached() {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoDebugpage() {
      const self = this
      wx.navigateTo({
        url: '/packageAPI/pages/EventChannel/secondpage/index',
        events: {
          testevent: this.testeventcb
        },
        success(res) {
          console.log('debug wx.navigateTo success callback')
          eventChannel = res.eventChannel
          res.eventChannel.on('acceptDataFromOpenerPage', self.testevent)
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        }
      })
    },
    testeventcb(e) {
      console.log('eventChannel debug: in first page testevent cb', e)
      setTimeout(() => {
        console.log(`.off('testevent'`)
        eventChannel.off('testevent', this.testeventcb)
      }, 5000)
    },
    testevent(data) {
      console.log('eventChannel debug: in first page acceptDataFromOpenerPage', data)
      setTimeout(() => {
        console.log(`.off('acceptDataFromOpenerPage')`)
        eventChannel.off('acceptDataFromOpenerPage')
      }, 5000)
    },
    reditotestpage() {
      wx.redirectTo({
        url: '/pages/testpage/index',
      })
    }
  }
})
