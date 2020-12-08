Page({
  onShareAppMessage() {
    return {
      title: '小程序接口能力展示',
      path: 'pages/API/index'
    }
  },
  data: {
    list: [{
      id: 'base',
      name: '基础',
      open: false,
      pages: [
      {
        zh: 'buffer',
        url: 'buffer/buffer'
      },
      {
        zh: '获取小程序启动参数',
        url: 'launch-options/launch-options'
      },
      {
        zh: '应用级事件',
        url: 'app-level-event/app-level-event'
      },
      {
        zh: '定时器',
        url: 'timmer/timmer'
      },
      ],
    },
      {
        id: 'page',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '设置界面标题',
            url: 'set-navigation-bar-title/set-navigation-bar-title'
          }, {
            zh: '标题栏加载动画',
            url: 'navigation-bar-loading/navigation-bar-loading'
          }, {
            zh: '设置TabBar',
            url: '@set-tab-bar'
          }, {
            zh: '页面跳转',
            url: 'navigator/navigator'
          }, {
            zh: '下拉刷新',
            url: 'pull-down-refresh/pull-down-refresh'
          }, {
            zh: '创建动画',
            url: 'animation/animation'
          }, {
            zh: '创建绘画',
            url: 'canvas/canvas'
          }, {
            zh: '显示操作菜单',
            url: 'action-sheet/action-sheet'
          }, {
            zh: '显示模态弹窗',
            url: 'modal/modal'
          }, {
            zh: '页面滚动',
            url: 'page-scroll/page-scroll'
          }, {
            zh: '显示消息提示框',
            url: 'toast/toast'
          }, {
            zh: '获取WXML节点信息',
            url: 'get-wxml-node-info/get-wxml-node-info'
          }, {
            zh: 'WXML节点布局相交状态',
            url: 'intersection-observer/intersection-observer'
          }
        ]
      }, {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            zh: '获取手机网络状态',
            url: 'get-network-type/get-network-type'
          }, {
            zh: '监听手机网络变化',
            url: 'on-network-status-change/on-network-status-change'
          }, {
            zh: '获取手机系统信息',
            url: 'get-system-info/get-system-info'
          }, {
            zh: '打电话',
            url: 'make-phone-call/make-phone-call'
          }, {
            zh: '扫码',
            url: 'scan-code/scan-code'
          },{
            zh: '剪切板',
            url: 'clipboard-data/clipboard-data'
          }, {
            zh: '屏幕亮度',
            url: 'screen-brightness/screen-brightness'
          }, {
            zh: '振动',
            url: 'vibrate/vibrate'
          }, {
            zh: '手机联系人',
            url: 'add-contact/add-contact'
          }
        ]
      }, {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起一个请求',
            url: 'request/request'
          }, {
            zh: 'WebSocket',
            url: 'web-socket/web-socket'
          }, {
            zh: '上传文件',
            url: 'upload-file/upload-file'
          }, {
            zh: '下载文件',
            url: 'download-file/download-file'
          }
        ]
      }, {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            zh: '图片',
            url: 'image/image'
          }, {
            zh: '音频',
            url: 'audio/audio'
          }, {
            zh: '录音',
            url: 'voice/voice'
          }, {
            zh: '视频',
            url: 'video/video'
          }, {
            zh: '动态加载字体',
            url: 'load-font-face/load-font-face'
          }
        ]
      }, {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置',
            url: 'get-location/get-location'
          }, {
            zh: '使用原生地图选择位置',
            url: 'choose-location/choose-location'
          }
        ]
      }, {
        id: 'storage',
        name: '数据',
        pages: [{
          zh: '本地存储',
          url: 'storage/storage'
        }],
      }
    ],
    isSetTabBarPage: false,
    theme: 'light'
  },
  onShow() {
    this.leaveSetTabBarPage()
  },
  onHide() {
    this.leaveSetTabBarPage()
  },
  kindToggle(e) {
    const id = e.currentTarget.id; const
      list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          wx.navigateTo({
            url: '/pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },
  enterSetTabBarPage() {
    this.setData({
      isSetTabBarPage: true
    })
  },
  leaveSetTabBarPage() {
    this.setData({
      isSetTabBarPage: false
    })
  },
})
