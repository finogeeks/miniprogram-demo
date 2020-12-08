Page({
  onShareAppMessage() {
    return {
      title: 'textarea',
      path: 'pages/component/textarea/textarea'
    }
  },

  data: {
    focus: false
  },

  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  }
})
