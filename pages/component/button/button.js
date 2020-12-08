const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'pages/component/button/button'
    }
  }
}

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  }(types[i]))
}

Page(pageObject)
