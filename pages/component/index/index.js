Page({
  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'pages/component/index'
    }
  },

  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper', 'match-media', 'movable', 'cover-view','page-container', 'share-element']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'rich-text', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea','editor','keyboard-accessory']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'video', 'camera', 'webrtc']
      }, {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: ['canvas']
      },  {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: ['web-view']
      }, {
        id: 'page-attr',
        name: '页面属性配置节点',
        pages: ['page-meta']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map','multiple-map']
      }
    ],
    theme: 'light'
  },

  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })

    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({ theme })
      })
    }
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  }
})
