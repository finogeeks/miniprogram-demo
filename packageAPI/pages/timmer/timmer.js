// pages/API/get-network-type/get-network-type.js
Page({
  data: {
    result: '',
    timeInterval: null,
    timeout: null,
  },

  handleClearInterval() {
    clearInterval(this.data.timeInterval);
    console.log('clearInterval', this.data.timeInterval);
  },
  handleClearTimeout() {
    clearTimeout(this.data.timeout);
    console.log('clearTimeout', this.data.timeout);
  },
  handleSetInterval() {
    this.handleClearInterval();
    const that = this;
    const timeInterval = setInterval(() => {
      that.setData({ result: Math.random() })
    }, 1000);
    console.log('setInterval', timeInterval);
    this.setData({ timeInterval: timeInterval })
  },
  handleSetTimeout() {
    this.handleClearTimeout();
    const that = this;
    const timeout = setTimeout(() => {
      that.setData({ result: Math.random() })
    }, 1000);
    console.log('setTimeout', timeout);
    this.setData({ timeout: timeout })
  },
})
