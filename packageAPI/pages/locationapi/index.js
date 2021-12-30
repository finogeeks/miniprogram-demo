
Page({
  data: {
    openLocation_latitude: 22.53332,
    openLocation_longitude: 113.93041,
    openLocation_scale: 18,
    openLocation_name: 'testname',
    openLocation_address: 'addressaddressaddressaddress',
    getLocation_type: 'gcj02',
    getLocation_altitude: 'false',
    getLocation_isHighAccuracy: 'false',
    getLocation_highAccuracyExpireTime: 3000,
    chooseLocation_latitude: 22.53332,
    chooseLocation_longitude: 113.93041
  },
  onLoad() {
    
  },
  valueChange (e) {
    const { changekey } = e.target.dataset
    const { value } = e.detail
    const obj = {}
    obj[changekey] = value
    this.setData(obj)
  },
  emitopenLocation () {
    let { 
      openLocation_latitude: latitude,
      openLocation_longitude: longitude,
      openLocation_scale: scale,
      openLocation_name: name,
      openLocation_address: address
    } = this.data
    const args = {}
    try {
      latitude = JSON.parse(latitude)
    } catch (e) {}
    try {
      longitude = JSON.parse(longitude)
    } catch (e) {}
    try {
      scale = JSON.parse(scale)
    } catch (e) {}
    // try {
    //   name = JSON.parse(name)
    // } catch (e) {}
    // try {
    //   address = JSON.parse(address)
    // } catch (e) {}
    latitude !== 'no' && (args.latitude = latitude)
    longitude !== 'no' && (args.longitude = longitude)
    scale !== 'no' && (args.scale = scale)
    name !== 'no' && (args.name = name)
    address !== 'no' && (args.address = address)
    console.log('openLocation 参数: ', args)
    wx.openLocation({
      ...args,
      success (res) {
        console.log('openLocation success: ', res)
      },
      fail (res) {
        console.log('openLocation fail: ', res)
      },
      complete (res) {
        console.log('openLocation complete: ', res)
      }
    })
  },
  emitgetLocation () {
    let {
      getLocation_type: type,
      getLocation_altitude: altitude,
      getLocation_isHighAccuracy: isHighAccuracy,
      getLocation_highAccuracyExpireTime: highAccuracyExpireTime,
    } = this.data
    const args = {}
    try {
      type = JSON.parse(type)
    } catch (e) {}
    try {
      altitude = JSON.parse(altitude)
    } catch (e) {}
    try {
      isHighAccuracy = JSON.parse(isHighAccuracy)
    } catch (e) {}
    try {
      highAccuracyExpireTime = JSON.parse(highAccuracyExpireTime)
    } catch (e) {}
    type !== 'no' && (args.type = type)
    altitude !== 'no' && (args.altitude = altitude)
    isHighAccuracy !== 'no' && (args.isHighAccuracy = isHighAccuracy)
    highAccuracyExpireTime !== 'no' && (args.highAccuracyExpireTime = highAccuracyExpireTime)
    console.log('getLocation 参数: ', args)
    wx.getLocation({
      ...args,
      success (res) {
        console.log('getLocation success: ', res)
      },
      fail (res) {
        console.log('getLocation fail: ', res)
      },
      complete (res) {
        console.log('getLocation complete: ', res)
      }
    })
  },
  emitchoosePoi () {
    wx.choosePoi({
      success (res) {
        console.log('emitchoosePoi success: ', res)
      },
      fail (res) {
        console.log('emitchoosePoi fail: ', res)
      },
      complete (res) {
        console.log('emitchoosePoi complete: ', res)
      }
    })
  },
  emitchooseLocation () {
    let {
      chooseLocation_latitude: latitude,
      chooseLocation_longitude: longitude
    } = this.data
    const args = {}
    try {
      latitude = JSON.parse(latitude)
    } catch (e) {}
    try {
      longitude = JSON.parse(longitude)
    } catch (e) {}
    
    latitude !== 'no' && (args.latitude = latitude)
    longitude !== 'no' && (args.longitude = longitude)
    console.log('chooseLocation 参数: ', args)
    wx.chooseLocation({
      ...args,
      success (res) {
        console.log('chooseLocation success: ', res)
      },
      fail (res) {
        console.log('chooseLocation fail: ', res)
      },
      complete (res) {
        console.log('chooseLocation complete: ', res)
      }
    })
  }
})
