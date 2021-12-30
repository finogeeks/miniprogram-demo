// pages/component/map/map.js
let mapcontext
let unde

const data = {
  maptype: '3',
  maptypes: ['amap','google','baidu','auto'],
  booleanArray: [true, false, 'no'],
  showingSence: 'latlong',
  mapShow: true,
  editingLongitude: '113.93041',
  editingLatitude: '22.53332',
  // longitude: '114.063848',
  // latitude: '22.551365',
  // longitude: '85.1318117790985',
  // latitude: '45.69139458288415',
  latitude: 22.53332,
  longitude: 113.93041,
  // latitude: 200,
  // longitude: 200,
  scale: 12,
  editingScale: 12,
  minScale: 3,
  editingMinscale: 3,
  maxScale: 20,
  editingMaxscale: 20,
  markers:[
    {
      "id": 1,
      "latitude": 22.54332,
      "longitude": 113.94041,
      "joinCluster": true,
      "title": "title1",
      "zIndex": 1,
      "iconPath": "/assets/images/logo.png",
      "rotate": 0,
      "alpha": 1,
      "width": 30,
      "height": 30,
      "callout": {
        "content": "point1",
        "color": "#ff0000",
        "fontSize": 14,
        "borderRadius": 7,
        "borderWidth": 2,
        "borderColor": "#000000",
        "bgColor": "#ffffff",
        "padding": 1,
        "display": "ALWAYS",
        "textAlign": "center",
        "anchorX": 0,
        "anchorY": 0
      },
      "customCallout": {
        "display": "BYCLICK",
        "anchorX": 0,
        "anchorY": 0
      },
      "label": {
        "content": "label1",
        "color": "",
        "fontSize": 16,
        "anchorX": 0,
        "anchorY": 0,
        "borderWidth": 30,
        "borderColor": "",
        "borderRadius": 10,
        "bgColor": "",
        "padding": 10,
        "textAlign": "center"
      },
      "anchor": {
        "x": 0,
        "y": 0
      },
      "aria-label": "marker1 aria-label"
    },
    {
      "id": 2,
      "latitude": 22.52332,
      "longitude": 113.92041
    },
    {
      "id": 3,
      "latitude": 22.52332,
      "longitude": 113.93041
    },
    {
      "id":4,
      "latitude": 22.53332,
      "longitude": 113.93041,
      "callout": {
        "content": "point4",
      },
      "label": {
        "content": "label4"
      }
    },
    {
      "id":5,
      "latitude": 22.51332,
      "longitude": 113.92041,
      "joinCluster": true,
      "callout": {
        "content": "point5",
      },
      "label": {
        "content": "label5"
      }
    },
    {
      "id":6,
      "latitude": 22.51332,
      "longitude": 113.91041,
      "joinCluster": true,
      "label": {
        "content": "label6"
      }
    },
    {
      "id":7,
      "latitude": 22.50332,
      "longitude": 113.90041,
      "joinCluster": true,
      "callout": {
        "content": "point7",
      },
      "label": {
        "content": "label7"
      }
    }
  ],
  editingMarkers: `
  [
    {
      "id": 1,
      "latitude": 22.54332,
      "longitude": 113.94041,
      "joinCluster": true,
      "title": "title1",
      "zIndex": 1,
      "iconPath": "/assets/images/logo.png",
      "rotate": 0,
      "alpha": 1,
      "width": 30,
      "height": 30,
      "callout": {
        "content": "point1",
        "color": "#ff0000",
        "fontSize": 14,
        "borderRadius": 7,
        "borderWidth": 2,
        "borderColor": "#000000",
        "bgColor": "#ffffff",
        "padding": 1,
        "display": "ALWAYS",
        "textAlign": "center",
        "anchorX": 0,
        "anchorY": 0
      },
      "customCallout": {
        "display": "BYCLICK",
        "anchorX": 0,
        "anchorY": 0
      },
      "label": {
        "content": "label1",
        "color": "",
        "fontSize": 16,
        "anchorX": 0,
        "anchorY": 0,
        "borderWidth": 30,
        "borderColor": "",
        "borderRadius": 10,
        "bgColor": "",
        "padding": 10,
        "textAlign": "center"
      },
      "anchor": {
        "x": 0,
        "y": 0
      },
      "aria-label": "marker1 aria-label"
    },
    {
      "id": 2,
      "latitude": 22.52332,
      "longitude": 113.92041
    },
    {
      "id": 3,
      "latitude": 22.52332,
      "longitude": 113.93041
    },
    {
      "id":4,
      "latitude": 22.53332,
      "longitude": 113.93041,
      "callout": {
        "content": "point4"
      },
      "label": {
        "content": "label4"
      }
    },
    {
      "id":5,
      "latitude": 22.51332,
      "longitude": 113.92041,
      "joinCluster": true,
      "callout": {
        "content": "point5"
      },
      "label": {
        "content": "label5"
      }
    },
    {
      "id":6,
      "latitude": 22.51332,
      "longitude": 113.91041,
      "joinCluster": true,
      "label": {
        "content": "label6"
      }
    },
    {
      "id":7,
      "latitude": 22.50332,
      "longitude": 113.90041,
      "joinCluster": true,
      "callout": {
        "content": "point7"
      },
      "label": {
        "content": "label7"
      }
    }
  ]
  `,
  polyline: [{
    "points": [{
      "latitude": 22.53332,
      "longitude": 113.93041
    },{
      "latitude": 22.52332,
      "longitude": 113.92041
    },{
      "latitude": 22.52332,
      "longitude": 113.93041
    }],
    "color": "#02ecff",
    "colorList": ["#00bcd4","#ff9800"],
    "dottedLine": false,
    "arrowIconPath": "",
    "width": 6,
    "arrowLine": true,
    "borderColor": "#000000",
    "borderWidth": 6,
    "level": "abovelabels"
  }],
  editingPolyline: `
    [{
      "points": [{
        "latitude": 22.52332,
        "longitude": 113.93041
      },{
        "latitude": 22.51332,
        "longitude": 113.92041
      },{
        "latitude": 22.51332,
        "longitude": 113.93041
      }],
      "color": "#02ecff",
      "colorList": ["#00bcd4","#ff9800"],
      "dottedLine": false,
      "arrowIconPath": "",
      "width": 6,
      "arrowLine": true,
      "borderColor": "#000000",
      "borderWidth": 6,
      "level": "abovelabels"
    }]
  `,
  circles: [{
    "latitude": 22.53932,
    "longitude": 113.93641,
    "color": "#ff455b",
    "fillColor": "#acfd00",
    "radius": 500,
    "strokeWidth": 5,
    "level": "abovelabels"
  }],
  editingCircles: `[{
    "latitude": 22.53932,
    "longitude": 113.93641,
    "color": "#ff455b",
    "fillColor": "#acfd00",
    "radius": 500,
    "strokeWidth": 5,
    "level": "abovelabels"
  }]`,
  controls: [{
    "id": 4,
    "position": {
      "left": 20,
      "top": 60,
      "width": 30,
      "height": 30
    },
    iconPath: "https://img2.baidu.com/it/u=1558944015,1677859960&fm=26&fmt=auto",
    clickable: true
  },{
    "id": 5,
    "position": {
      "left": 20,
      "top": 100,
      "width": 30,
      "height": 30
    },
    iconPath: "/image/duck.gif",
    clickable: true
  }],
  editingControls: `
    [{
      "id": 4,
      "position": {
        "left": 20,
        "top": 60,
        "width": 30,
        "height": 30
      },
      "iconPath": "/assets/images/logo.png",
      "clickable": true
    },{
      "id": 5,
      "position": {
        "left": 20,
        "top": 100,
        "width": 30,
        "height": 30
      },
      "iconPath": "/image/duck.gif",
      "clickable": true
    }]
  `,
  includePoints: [
    {
      "id": 1,
      "latitude": 22.03332,
      "longitude": 113.03041,
    },{
      "id": 2,
      "latitude": 21.53332,
      "longitude": 112.93041,
    },{
      "id": 3,
      "latitude": 23.53332,
      "longitude": 114.93041,
    }
  ],
  editingIncludePoints: `[
    {
      "id": 1,
      "latitude": 22.03332,
      "longitude": 113.03041
    },{
      "id": 2,
      "latitude": 21.53332,
      "longitude": 112.93041
    },{
      "id": 3,
      "latitude": 23.53332,
      "longitude": 114.93041
    }
  ]`,
  showLocation: false,
  polygons: [{
    "points": [
      {
        "latitude": 22.53932,
        "longitude": 113.93641
      },
      {
        "latitude": 22.53932,
        "longitude": 113.92641
      },
      {
        "latitude": 22.52932,
        "longitude": 113.92641
      },
      {
        "latitude": 22.52932,
        "longitude": 113.93641
      }
    ],
    "strokeWidth": 4,
    "strokeColor": "#9C27B0",
    "fillColor": "#fff202",
    "zIndex": 1,
    "level": "abovelabels"
  }],
  editingPolygons: `
    [{
      "points": [
        {
          "latitude": 22.53932,
          "longitude": 113.93641
        },
        {
          "latitude": 22.53932,
          "longitude": 113.92641
        },
        {
          "latitude": 22.52932,
          "longitude": 113.92641
        },
        {
          "latitude": 22.52932,
          "longitude": 113.93641
        }
      ],
      "strokeWidth": 4,
      "strokeColor": "#9C27B0",
      "fillColor": "#fff202",
      "zIndex": 1,
      "level": "abovelabels"
    }]
  `,
  rotate: 90,
  editingrotate: 90,
  skew: 20,
  editingskew: 20,
  enable3D: true,
  showCompass: false,
  showScale: true,
  enableOverlooking: true,
  enableZoom: true,
  enableScroll: true,
  enableRotate: true,
  enableSatellite: true,
  enableTraffic: false,
  enablePoi: true,
  enableBuilding: true,
  setting: {
    "skew": 0,
    "rotate": 0,
    "showLocation": false,
    "showScale": false,
    "enableZoom": true,
    "enableScroll": true,
    "enableRotate": true,
    "showCompass": false,
    "enable3D": false,
    "enableOverlooking": false,
    "enableSatellite": false,
    "enableTraffic": false,
  },
  eidtingSetting: `
  {
    "skew": 0,
    "rotate": 0,
    "showLocation": false,
    "showScale": false,
    "enableZoom": true,
    "enableScroll": true,
    "enableRotate": true,
    "showCompass": false,
    "enable3D": false,
    "enableOverlooking": false,
    "enableSatellite": false,
    "enableTraffic": false
  }
  `,
  controlAreaHeight: '400px',
  latlong: `[22.53332,113.93041]`,
  translatemarkerMarkerid: 'no',
  translatemarker_marker_autoRotate: 2,
  translatemarker_rotate: 'no',
  translatemarker_duration: 'no',
  translatemarker_marker_moveWithRotate: 2,
  translatemarker_destination: `{"latitude": 22.33332, "longitude": 113.83041 }`,
  markerIconPath: '/assets/images/logo.png',
  toNumber: true,
  moveAlong_path: `[
    {
      "latitude": 22.54332,
      "longitude": 113.94041
    },
    {
      "latitude": 22.53332,
      "longitude": 113.93041
    },
    {
      "latitude": 22.51332,
      "longitude": 113.93041
    },
    {
      "latitude": 22.51332,
      "longitude": 113.95041
    },
    {
      "latitude": 22.53332,
      "longitude": 113.95041
    },
    {
      "latitude": 22.54332,
      "longitude": 113.94041
    }
  ]`,
  moveAlongMarkerid: 'no',
  moveAlong_autoRotate: 2,
  moveAlong_duration: 'no',
  moveAlong2_path: `[
    {
      "latitude": 22.54332,
      "longitude": 113.94041
    },
    {
      "latitude": 22.53332,
      "longitude": 113.93041
    },
    {
      "latitude": 22.51332,
      "longitude": 113.93041
    },
    {
      "latitude": 22.51332,
      "longitude": 113.95041
    },
    {
      "latitude": 22.53332,
      "longitude": 113.95041
    },
    {
      "latitude": 22.54332,
      "longitude": 113.94041
    }
  ]`,
  moveAlong2Markerid: 'no',
  moveAlong2_autoRotate: 2,
  moveAlong2_duration: 'no',
  centerOffset: [0.5,0.5],
  editingcenterOffset : `[0.5,0.5]`,
  controls_id: 'no',
  controls_position: `{
    "left": 20,
    "top": 20,
    "width": 30,
    "height": 30
  }`,
  controls_iconPath: '',
  controls_clickable: 2,
  polyline_points: `[{
    "latitude": 22.53332,
    "longitude": 113.93041
  },{
    "latitude": 22.52332,
    "longitude": 113.92041
  },{
    "latitude": 22.52332,
    "longitude": 113.93041
  }]`,
  polyline_color: "no",
  polyline_colorList: `["#00bcd4","#ff9800"]`,
  polyline_dottedLine: 2,
  polyline_arrowIconPath: "no",
  polyline_width: 'no',
  polyline_arrowLine: false,
  polyline_borderColor: 'no',
  polyline_borderWidth: 'no',
  polyline_level: 'abovelabels',
  circle_latitude: 'no',
  circle_longitude: 'no',
  circle_color: 'no',
  circle_fillColor: 'no',
  circle_radius: 'no',
  circle_strokeWidth: 'no',
  circle_level: 'abovelabels',
  includePoints_points: `[
    {
      "id": 1,
      "latitude": 22.03332,
      "longitude": 113.03041
    },{
      "id": 2,
      "latitude": 21.53332,
      "longitude": 112.93041
    },{
      "id": 3,
      "latitude": 23.53332,
      "longitude": 114.93041
    }
  ]`,
  includePoints_padding: `[10,10,10,10]`,
  polygons_points: `[
    {
      "latitude": 22.53932,
      "longitude": 113.93641
    },
    {
      "latitude": 22.53932,
      "longitude": 113.92641
    },
    {
      "latitude": 22.52932,
      "longitude": 113.92641
    },
    {
      "latitude": 22.52932,
      "longitude": 113.93641
    }
  ]`,
  polygons_strokeWidth: 'no',
  polygons_strokeColor: 'no',
  polygons_fillColor: 'no',
  polygons_zIndex: 'no',
  polygons_level: 'no',
  markers_id: '5',
  markers_latitude: '22.51932',
  markers_longitude: '113.92641',
  markers_joinCluster: 2,
  markers_title: 'no',
  markers_zIndex: 'no',
  markers_iconPath: 'no',
  markers_rotate: 'no',
  markers_alpha: 'no',
  markers_width: 'no',
  markers_height: 'no',
  markers_callout: `
  {
    "content": "point1",
    "color": "#ff0000",
    "fontSize": 14,
    "borderRadius": 7,
    "borderWidth": 2,
    "borderColor": "#000000",
    "bgColor": "#ffffff",
    "padding": 1,
    "display": "ALWAYS",
    "textAlign": "center",
    "anchorX": 0,
    "anchorY": 0
  }
  `,
  markers_customCallout: `
  {
    "display": "BYCLICK",
    "anchorX": 0,
    "anchorY": 0
  }
  `,
  markers_label: `
  {
    "content": "label1",
    "color": "#ff0000",
    "fontSize": 5,
    "anchorX": 0,
    "anchorY": 0,
    "borderWidth": 1,
    "borderColor": "#000000",
    "borderRadius": 2,
    "bgColor": "#ffffff",
    "padding": 1,
    "textAlign": "center"
  }
  `,
  markers_anchor: `
  {
    "x": 0,
    "y": 0
  }
  `,
  markers_arialabel: 'no',
  addmarkers_clear: 2,
  addmarkers_markers: `[
    {
      "id": 666,
      "latitude": 22.51332,
      "longitude": 113.92041
    },
    {
      "id": 667,
      "latitude": 22.50332,
      "longitude": 113.93041
    }
  ]`,
  removemarker_markerIds: `[]`,
  initmarkercluster_enableDefaultStyle: 2,
  initmarkercluster_zoomOnClick: 2,
  initmarkercluster_gridSize: 60,
  movetolocation_longitude: '113.93041',
  movetolocation_latitude: '22.53332',
  openmapapp_longitude: '113.93041',
  openmapapp_latitude: '22.53332',
  openmapapp_destination: '目的地'
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ...data
  },

  resetData () {
    this.setData(data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const {windowHeight} = wx.getSystemInfoSync()
    const windowHeight = 650
    this.setData({
      controlAreaHeight: (windowHeight - 324) + 'px',
      // latlong: `[${this.data.latitude}, ${this.data.longitude}]`
    })
    this.emitCreateMapContext()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  emitCreateMapContext() {
    mapcontext = wx.createMapContext('maplearn')
    console.log(mapcontext)
  },
  bindtapHandler (res) {
    console.log('debug: bindtapHandler ', res)
  },
  bindmarkertapHandler (res) {
    console.log('debug: bindmarkertapHandler ', res)
  },
  bindlabeltapHandler (res) {
    console.log('debug: bindlabeltapHandler ', res)
  },
  bindcontroltapHandler (res) {
    console.log('debug: bindcontroltapHandler ', res)
  },
  bindcallouttapHandler (res) {
    console.log('debug: bindcallouttapHandler ', res)
  },
  bindupdatedHandler (res) {
    console.log('debug: bindupdatedHandler ', res)
  },
  bindregionchangeHandler (res) {
    console.log('debug: bindregionchangeHandler ', res)
  },
  bindpoitapHandler (res) {
    console.log('debug: bindpoitapHandler ', res)
  },
  bindanchorpointtapHandler (res) {
    console.log('debug: bindanchorpointtapHandler ', res)
  },
  countMarker () {
    let {
      markers_id,
      markers_latitude,
      markers_longitude,
      markers_joinCluster,
      markers_title,
      markers_zIndex,
      markers_iconPath,
      markers_rotate,
      markers_alpha,
      markers_width,
      markers_height,
      markers_callout,
      markers_customCallout,
      markers_label,
      markers_anchor,
      markers_arialabel,
      booleanArray,
      toNumber
    } = this.data

    markers_joinCluster = booleanArray[markers_joinCluster]

    try {
      markers_callout = JSON.parse(markers_callout)
    } catch (e) {}
    try {
      markers_customCallout = JSON.parse(markers_customCallout)
    } catch (e) {}
    try {
      markers_label = JSON.parse(markers_label)
    } catch (e) {}
    try {
      markers_anchor = JSON.parse(markers_anchor)
    } catch (e) {}

    const params = {}

    markers_id !== 'no' && (params.id = toNumber ? Number(markers_id) : String(markers_id))
    markers_latitude !== 'no' && (params.latitude = toNumber ? Number(markers_latitude) : String(markers_latitude))
    markers_longitude !== 'no' && (params.longitude = toNumber ? Number(markers_longitude) : String(markers_longitude))
    markers_zIndex !== 'no' && (params.zIndex = toNumber ? Number(markers_zIndex) : String(markers_zIndex))
    markers_rotate !== 'no' && (params.rotate = toNumber ? Number(markers_rotate) : String(markers_rotate))
    markers_alpha !== 'no' && (params.alpha = toNumber ? Number(markers_alpha) : String(markers_alpha))
    markers_width !== 'no' && (params.width = toNumber ? Number(markers_width) : String(markers_width))
    markers_height !== 'no' && (params.height = toNumber ? Number(markers_height) : String(markers_height))
    markers_callout !== 'no' && (params.callout = markers_callout)
    markers_customCallout !== 'no' && (params.customCallout = markers_customCallout)
    markers_label !== 'no' && (params.label = markers_label)
    markers_anchor !== 'no' && (params.anchor = markers_anchor)
    markers_joinCluster !== 'no' && (params.joinCluster = markers_joinCluster)
    markers_title !== 'no' && (params.title = markers_title)
    markers_iconPath !== 'no' && (params.iconPath = markers_iconPath)
    markers_arialabel !== 'no' && (params['aria-label'] = markers_arialabel)

    return params
  },
  addMarker () {
    const params = this.countMarker()

    console.log('添加markers: ', params)
    const markers = this.data.markers
    markers.push(params)

    this.setData({
      markers
    })
  },
  changeMarker () {
    let { editingMarkers } = this.data
    try {
      editingMarkers = JSON.parse(editingMarkers)
    } catch (e) {
      console.log(e)
    }
    console.log('changeMarker: ', editingMarkers)
    this.setData({
      markers: editingMarkers
    })
  },
  randomHexColor() {
    var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
    while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
     hex = '0' + hex;
    }
    return '#' + hex; //返回‘#'开头16进制颜色
  },
  randomRadius() {
    return Math.floor(Math.random() * 3000) 
  },
  changePolyline () {
    let polyline
    try {
      polyline = JSON.parse(this.data.editingPolyline)
    } catch(e) {
      polyline = this.data.editingPolyline
    }
    this.setData({
      polyline
    })
    console.log('当前polyline: ', this.data.polyline)
  },
  addPolyline () {
    let {
      polyline_points,
      polyline_color,
      polyline_colorList,
      polyline_dottedLine,
      polyline_arrowIconPath,
      polyline_width,
      polyline_arrowLine,
      polyline_borderColor,
      polyline_borderWidth,
      polyline_level,
      booleanArray,
      toNumber
    } = this.data
    
    polyline_dottedLine = booleanArray[polyline_dottedLine]
    polyline_arrowLine = booleanArray[polyline_arrowLine]

    const params = {}
    try {
      polyline_points = JSON.parse(polyline_points)
    } catch (e) {}
    try {
      polyline_colorList = JSON.parse(polyline_colorList)
    } catch (e) {}

    polyline_points !== 'no' && (params.points = polyline_points)
    polyline_color !== 'no' && (params.color = polyline_color)
    polyline_colorList !== 'no' && (params.colorList = polyline_colorList)
    polyline_dottedLine !== 'no' && (params.dottedLine = polyline_dottedLine)
    polyline_arrowIconPath !== 'no' && (params.arrowIconPath = polyline_arrowIconPath)
    polyline_width !== 'no' && (params.width = toNumber ? Number(polyline_width) : String(polyline_width))
    polyline_arrowLine !== 'no' && (params.arrowLine = polyline_arrowLine)
    polyline_borderColor !== 'no' && (params.borderColor = polyline_borderColor)
    polyline_borderWidth !== 'no' && (params.borderWidth = toNumber ? Number(polyline_borderWidth) : String(polyline_borderWidth))
    polyline_level !== 'no' && (params.level = polyline_level)

    console.log('添加polyline :  ', params)

    const polyline = this.data.polyline
    polyline.push(params)
    this.setData({
      polyline
    })
  },
  addCircles () {
    let {
      circle_latitude,
      circle_longitude,
      circle_color,
      circle_fillColor,
      circle_radius,
      circle_strokeWidth,
      circle_level,
      toNumber
    } = this.data

    const params = {}

    circle_latitude !== 'no' && (params.latitude = toNumber ? Number(circle_latitude) : String(circle_latitude))
    circle_longitude !== 'no' && (params.longitude = toNumber ? Number(circle_longitude) : String(circle_longitude))
    circle_color !== 'no' && (params.color = circle_color)
    circle_fillColor !== 'no' && (params.fillColor = circle_fillColor)
    circle_radius !== 'no' && (params.radius = circle_radius)
    circle_strokeWidth !== 'no' && (params.strokeWidth = circle_strokeWidth)
    circle_level !== 'no' && (params.level = circle_level)

    console.log('添加circle :  ', params)

    const circles = this.data.circles
    circles.push(params)
    this.setData({
      circles
    })
  },
  changeCircles () {
    let { editingCircles } = this.data
    try {
      editingCircles = JSON.parse(editingCircles)
    } catch (e) {}
    this.setData({
      circles: editingCircles
    })
  },
  addControls () {
    let { controls_id, controls_iconPath, controls_position, controls_clickable, toNumber, booleanArray } = this.data

    controls_clickable = booleanArray[controls_clickable]

    try {
      controls_position = JSON.parse(controls_position)
    } catch(e) {}

    const params = {}
    controls_id !== 'no' && (params.id = toNumber ? Number(controls_id) : String(controls_id))
    controls_iconPath !== 'no' && (params.iconPath = controls_iconPath)
    controls_position !== 'no' && (params.position = controls_position)
    controls_clickable !== 'no' && (params.clickable = controls_clickable)
    const controls = this.data.controls
    controls.push(params)
    console.log('添加controls 参数: ', params)
    this.setData({
      controls
    })
  },
  consoleControls () {
    console.log('当前controls: ', this.data.controls)
    this.setData({
      editingControls: JSON.stringify(this.data.controls)
    })
  },
  changeControls () {
    let controls
    try {
      controls = JSON.parse(this.data.editingControls)
    } catch(e) {
      controls = this.data.editingControls
    }
    this.setData({
      controls
    })
    console.log('当前controls: ', this.data.controls)
  },
  changeIncludePoints () {
    let { editingIncludePoints } = this.data
    try {
      editingIncludePoints = JSON.parse(editingIncludePoints)
    } catch (e) {}
    console.log('includePoints : ', editingIncludePoints)
    this.setData({
      includePoints: editingIncludePoints
    })
  },
  switchtoNumber (event) {
    this.setData({
			toNumber: event.detail.value
		});
  },
  changeAttribute (e) {
    const attribute = e.target.dataset.attribute
    const obj = {}
    obj[attribute] = !!!this.data[attribute]
    console.log('修改参数 ', obj)
    this.setData(obj)
  },
  attributePickerChange(e) {
    const attribute = e.target.dataset.attribute
    const obj = {}
    obj[attribute] = e.detail.value
    console.log('修改参数 ', obj)
    this.setData(obj)
  },
  changeInputValue (e) {
    const attribute = e.target.dataset.attribute
    const obj = {}
    obj[attribute] = e.detail.value
    console.log('修改数据 ', obj)
    this.setData(obj)
  },
  changePolygons () {
    let { editingPolygons } = this.data
    try {
      editingPolygons = JSON.parse(editingPolygons)
    } catch (e) {}
    console.log('改变polygons:  ', editingPolygons)
    this.setData({
      polygons: editingPolygons
    })
  },
  addPolygons () {
    let {
      polygons_points,
      polygons_strokeWidth,
      polygons_strokeColor,
      polygons_fillColor,
      polygons_zIndex,
      polygons_level,
      toNumber
    } = this.data

    try {
      polygons_points = JSON.parse(polygons_points)
    } catch (e) {}

    const params = {}
    polygons_points !== 'no' && (params.points = polygons_points)
    polygons_strokeWidth !== 'no' && (params.strokeWidth = toNumber ? Number(polygons_strokeWidth) : String(polygons_strokeWidth))
    polygons_zIndex !== 'no' && (params.zIndex = toNumber ? Number(polygons_zIndex) : String(polygons_zIndex))
    polygons_strokeColor !== 'no' && (params.strokeColor = polygons_strokeColor)
    polygons_fillColor !== 'no' && (params.fillColor = polygons_fillColor)
    polygons_level !== 'no' && (params.level = polygons_level)

    console.log('添加polygons:  ', params)

    const polygons = this.data.polygons
    polygons.push(params)

    this.setData({
      polygons
    })
  },
  changeSetting () {

    let {eidtingSetting} = this.data
    try {
      eidtingSetting = JSON.parse(eidtingSetting)
    } catch (e) {}

    console.log('修改setting： ', eidtingSetting)

    this.setData({
      setting: eidtingSetting
    })
  },
  switchType (e) {
    const type = e.target.dataset.sencetype
    this.setData({
      showingSence: type
    })
  },
  emitAddMarkers () {
    let {
      addmarkers_clear,
      booleanArray
    } = this.data

    addmarkers_clear = booleanArray[addmarkers_clear]

    const marker = this.countMarker()

    const params = {
      markers: [marker]
    }

    addmarkers_clear !== 'no' && (params.clear = addmarkers_clear)

    console.log('addMarkers 参数： ', params)

    mapcontext.addMarkers(Object.assign({
      success: (res) => {
        console.log('debug: addMarkers succcess ', res)
      },
      fail: (res) => {
        console.log('debug: addMarkers fail ', res)
      },
      complete: (res) => {
        console.log('debug: addMarkers complete ', res)
      }
    }, params))
  },
  emitAddMarkers2 () {
    let {
      addmarkers_markers,
      addmarkers_clear,
      booleanArray
    } = this.data

    addmarkers_clear = booleanArray[addmarkers_clear]

    try {
      addmarkers_markers = JSON.parse(addmarkers_markers)
    } catch(e) {}

    const params = {}

    addmarkers_markers !== 'no' && (params.markers = addmarkers_markers)
    addmarkers_clear !== 'no' && (params.clear = addmarkers_clear)
    
    console.log('addMarkers 参数： ', params)

    mapcontext.addMarkers(Object.assign({
      success: (res) => {
        console.log('debug: addMarkers succcess ', res)
      },
      fail: (res) => {
        console.log('debug: addMarkers fail ', res)
      },
      complete: (res) => {
        console.log('debug: addMarkers complete ', res)
      }
    }, params))

  },
  emitFromScreenLocation () {
    mapcontext.fromScreenLocation({
      success: (res) => {
        console.log('debug: fromScreenLocation succcess ', res)
      },
      fail: (res) => {
        console.log('debug: fromScreenLocation fail ', res)
      },
      complete: (res) => {
        console.log('debug: fromScreenLocation complete ', res)
      }
    })
  },
  emitGetCenterLocation () {
    mapcontext.getCenterLocation({
      iconPath: '/assets/images/logo.png',
      success: (res) => {
        console.log('debug: getCenterLocation succcess ', res)
      },
      fail: (res) => {
        console.log('debug: getCenterLocation fail ', res)
      },
      complete: (res) => {
        console.log('debug: getCenterLocation complete ', res)
      }
    })
  },
  emitApi (e) {
    const apiname = e.target.dataset.apiname
    mapcontext[apiname]({
      success: (res) => {
        console.log(`debug: ${apiname} succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: ${apiname} fail `, res)
      },
      complete: (res) => {
        console.log(`debug: ${apiname} complete `, res)
      }
    })
  },
  emitIncludePoints () {

    let {
      includePoints_points,
      includePoints_padding
    } = this.data

    try {
      includePoints_points = JSON.parse(includePoints_points)
      includePoints_padding = JSON.parse(includePoints_padding)
    } catch (e) {}

    const params = {}

    includePoints_points !== 'no' && (params.points = includePoints_points)
    includePoints_padding !== 'no' && (params.padding = includePoints_padding)

    console.log('includePoints 参数： ', params)

    mapcontext.includePoints(Object.assign({
      success: (res) => {
        console.log(`debug: includePoints succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: includePoints fail `, res)
      },
      complete: (res) => {
        console.log(`debug: includePoints complete `, res)
      }
    }, params))
  },
  emitInitMarkerCluster () {

    let {
      initmarkercluster_enableDefaultStyle,
      initmarkercluster_zoomOnClick,
      initmarkercluster_gridSize,
      booleanArray,
      toNumber
    } = this.data

    initmarkercluster_enableDefaultStyle = booleanArray[initmarkercluster_enableDefaultStyle]
    initmarkercluster_zoomOnClick = booleanArray[initmarkercluster_zoomOnClick]

    const params = {}

    initmarkercluster_enableDefaultStyle !== 'no' && (params.enableDefaultStyle = initmarkercluster_enableDefaultStyle)
    initmarkercluster_zoomOnClick !== 'no' && (params.zoomOnClick = initmarkercluster_zoomOnClick)
    initmarkercluster_gridSize !== 'no' && (params.gridSize = toNumber ? Number(initmarkercluster_gridSize) : String(initmarkercluster_gridSize))

    console.log('initMarkerCluster 参数： ', params)

    mapcontext.initMarkerCluster(Object.assign({
      success: (res) => {
        console.log(`debug: initMarkerCluster succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: initMarkerCluster fail `, res)
      },
      complete: (res) => {
        console.log(`debug: initMarkerCluster complete `, res)
      }
    }, params))
  },
  emitMoveAlong2 () {
    let {
      moveAlong2_path,
      moveAlong2Markerid,
      moveAlong2_autoRotate,
      moveAlong2_duration,
      booleanArray,
      toNumber
    } = this.data

    moveAlong2_autoRotate = booleanArray[moveAlong2_autoRotate]

    let path = moveAlong2_path
    // if (moveAlong2_path === '{}') {
    //   path = {}
    // } else if (moveAlong2_path === '[]') {
    //   path = []
    // } else {
    //   try {
    //     path = moveAlong2_path.replace('[', '').replace(']', '').split('},').map(e => {
    //       const str = e.indexOf('}') > -1 ? e : (e + '}')
    //       return JSON.parse(str)
    //     })
    //   } catch (e) {}
    // }
    try {
      path = JSON.parse(moveAlong2_path)
    } catch (e) {}

    try {
      moveAlong2Markerid = JSON.parse(moveAlong2Markerid)
    } catch(e) {
      if (!isNaN(moveAlong2Markerid)) {
        moveAlong2Markerid = toNumber ? Number(moveAlong2Markerid) : String(moveAlong2Markerid)
      }
    }

    const params = {}
    moveAlong2Markerid !== 'no' && (params.markerId = moveAlong2Markerid)
    moveAlong2_autoRotate !== 'no' && (params.autoRotate = moveAlong2_autoRotate)
    moveAlong2_duration !== 'no' && (params.duration = toNumber ? Number(moveAlong2_duration) : String(moveAlong2_duration))
    moveAlong2_path !== 'no' && (params.path = path)
    
    console.log('moveAlong 参数: ', params)

    mapcontext.moveAlong(Object.assign({
      success: (res) => {
        console.log(`debug: moveAlong succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: moveAlong fail `, res)
      },
      complete: (res) => {
        console.log(`debug: moveAlong complete `, res)
      }
    }, params))
  },
  emitMoveAlong () {
    let {
      moveAlong_path,
      moveAlongMarkerid,
      moveAlong_autoRotate,
      moveAlong_duration,
      booleanArray,
      toNumber
    } = this.data

    moveAlong_autoRotate = booleanArray[moveAlong_autoRotate]

    let path = moveAlong_path
    // if (moveAlong_path === '{}') {
    //   path = {}
    // } else if (moveAlong_path === '[]') {
    //   path = []
    // } else {
    //   try {
    //     path = moveAlong_path.replace('[', '').replace(']', '').split('},').map(e => {
    //       const str = e.indexOf('}') > -1 ? e : (e + '}')
    //       return JSON.parse(str)
    //     })
    //   } catch (e) {}
    // }

    try {
      path = JSON.parse(moveAlong_path)
    } catch (e) {}
    
    try {
      moveAlongMarkerid = JSON.parse(moveAlongMarkerid)
    } catch (e) {
      if (!isNaN(moveAlongMarkerid)) {
        moveAlongMarkerid = toNumber ? Number(moveAlongMarkerid) : String(moveAlongMarkerid)
      }
    }

    const params = {}
    moveAlongMarkerid !== 'no' && (params.markerId = moveAlongMarkerid)
    moveAlong_autoRotate !== 'no' && (params.autoRotate = moveAlong_autoRotate)
    moveAlong_duration !== 'no' && (params.duration = toNumber ? Number(moveAlong_duration) : String(moveAlong_duration))
    moveAlong_path !== 'no' && (params.path = path)
    
    console.log('moveAlong 参数: ', params)

    mapcontext.moveAlong(Object.assign({
      success: (res) => {
        console.log(`debug: moveAlong succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: moveAlong fail `, res)
      },
      complete: (res) => {
        console.log(`debug: moveAlong complete `, res)
      }
    }, params))
  },
  emitMoveToLocation () {
    let { 
      movetolocation_longitude,
      movetolocation_latitude,
      toNumber
     } = this.data
    const params = {}
     
    movetolocation_longitude !== 'no' && (params.longitude = toNumber ? Number(movetolocation_longitude) : String(movetolocation_longitude))
    movetolocation_latitude !== 'no' && (params.latitude = toNumber ? Number(movetolocation_latitude) : String(movetolocation_latitude))

    console.log('moveToLocation 参数: ', params)

    mapcontext.moveToLocation(Object.assign({
      success: (res) => {
        console.log(`debug: moveToLocation succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: moveToLocation fail `, res)
      },
      complete: (res) => {
        console.log(`debug: moveToLocation complete `, res)
      }
    }, params))
  },
  emitOn () {
    mapcontext.on('markerClusterCreate', (res) => {
      console.log('debug: mapcontext.on markerClusterCreate ',res)
    })
    mapcontext.on('markerClusterClick', (res) => {
      console.log('debug: mapcontext.on markerClusterClick ',res)
    })
  },
  emitOpenMapApp () {
    let { 
      openmapapp_longitude,
      openmapapp_latitude,
      openmapapp_destination,
      toNumber
     } = this.data
    const params = {}
     
    openmapapp_longitude !== 'no' && (params.longitude = toNumber ? Number(openmapapp_longitude) : String(openmapapp_longitude))
    openmapapp_latitude !== 'no' && (params.latitude = toNumber ? Number(openmapapp_latitude) : String(openmapapp_latitude))
    openmapapp_destination !== 'no' && (params.destination = openmapapp_destination)

    console.log('openMapApp 参数: ', params)

    mapcontext.openMapApp(Object.assign({
      success: (res) => {
        console.log(`debug: openMapApp succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: openMapApp fail `, res)
      },
      complete: (res) => {
        console.log(`debug: openMapApp complete `, res)
      }
    }, params))
  },
  emitRemoveMarkers () {
    let { removemarker_markerIds } = this.data
    try {
      removemarker_markerIds = JSON.parse(removemarker_markerIds)
    } catch (e) {}

    const params = {}

    removemarker_markerIds !== 'no' && (params.markerIds = removemarker_markerIds)

    console.log('removeMarkers 参数： ', params)

    mapcontext.removeMarkers(Object.assign({
      success: (res) => {
        console.log(`debug: removeMarkers succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: removeMarkers fail `, res)
      },
      complete: (res) => {
        console.log(`debug: removeMarkers complete `, res)
      }
    }, params))
  },
  emitSetCenterOffset () {
    const params = {}
    let { centerOffset } = this.data
    try {
      centerOffset = JSON.parse(centerOffset)
    } catch (e) {}
    centerOffset !== 'no' && (params.offset = centerOffset)
    console.log('setCenterOffset 参数:  ', params)
    mapcontext.setCenterOffset(Object.assign({
      success: (res) => {
        console.log(`debug: setCenterOffset succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: setCenterOffset fail `, res)
      },
      complete: (res) => {
        console.log(`debug: setCenterOffset complete `, res)
      }
    }, params))
  },
  emitSetLocMarkerIcon () {
    const params = {}
    this.data.markerIconPath !== 'no' && (params.iconPath = this.data.markerIconPath)
    console.log('setLocMarkerIcon 参数: ', params)
    mapcontext.setLocMarkerIcon({
      iconPath: '/assets/images/logo.png',
      success: (res) => {
        console.log(`debug: setLocMarkerIcon succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: setLocMarkerIcon fail `, res)
      },
      complete: (res) => {
        console.log(`debug: setLocMarkerIcon complete `, res)
      }
    })
  },
  emitTranslateMarker ({nodest}) {
    let {
      translatemarkerMarkerid,
      translatemarker_marker_autoRotate,
      translatemarker_rotate,
      translatemarker_duration,
      translatemarker_marker_moveWithRotate,
      translatemarker_destination,
      booleanArray,
      toNumber
    } = this.data
    translatemarker_marker_autoRotate = booleanArray[translatemarker_marker_autoRotate]
    translatemarker_marker_moveWithRotate = booleanArray[translatemarker_marker_moveWithRotate]
    let destination = translatemarker_destination
    if (translatemarker_destination === 'null') {
      destination = null
    } else if (translatemarker_destination === '[]') {
      destination = []
    } else {
      try {
        destination = JSON.parse(translatemarker_destination)
      } catch (e) {}
    }
    try {
      translatemarkerMarkerid = JSON.parse(translatemarkerMarkerid)
    } catch(e) {
      if (!isNaN(translatemarkerMarkerid)) {
        translatemarkerMarkerid = toNumber ? Number(translatemarkerMarkerid) : String(translatemarkerMarkerid)
      }
    }
    const params = {}
    translatemarkerMarkerid !== 'no' && (params.markerId = translatemarkerMarkerid)
    translatemarker_marker_autoRotate !== 'no' && (params.autoRotate = translatemarker_marker_autoRotate)
    translatemarker_rotate !== 'no' && (params.rotate = toNumber ? Number(translatemarker_rotate) : String(translatemarker_rotate))
    translatemarker_duration !== 'no' && (params.duration = toNumber ? Number(translatemarker_duration) : String(translatemarker_duration))
    translatemarker_marker_moveWithRotate !== 'no' && (params.moveWithRotate = translatemarker_marker_moveWithRotate)
    destination !== 'no' && (params.destination = destination)
    console.log('translateMarker 参数: ', params)
    mapcontext.translateMarker(Object.assign({
      animationEnd: (res) => {
        console.log(`debug: translateMarker animationEnd `, res)
      },
      success: (res) => {
        console.log(`debug: translateMarker succcess `, res)
      },
      fail: (res) => {
        console.log(`debug: translateMarker fail `, res)
      },
      complete: (res) => {
        console.log(`debug: translateMarker complete `, res)
      }
    }, params))
  },
  goBack () {
    wx.redirectTo({
      url: '/pages/jumppage/index',
    })
  },
  latlongChange (e) {
    // const {toNumber} = this.data
    let latlong = e.detail.value
    try {
      if (latlong === '') {
        latlong = ['','']
      } else if (latlong === 'null') {
        latlong = [null, null]
      } else {
        latlong = JSON.parse(e.detail.value)
      }
    } catch (e) {
      latlong = [latlong, null]
    }
    console.log(latlong)
    // const latitude = toNumber ? Number(latlong[0]) : String(latlong[0])
    // const longitude = toNumber ? Number(latlong[1]) : String(latlong[1])
    const latitude = latlong[0]
    const longitude = latlong[1]
    console.log(`改变latitude、longitude :  ` )
    console.log(latitude, longitude)
    this.setData({
      latitude,
      longitude
    })
  },
  chooseLocalImage () {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res)
        this.setData({
          markerIconPath: res.tempFilePaths[0],
          controls_iconPath: res.tempFilePaths[0],
          polyline_arrowIconPath: res.tempFilePaths[0],
          markers_iconPath: res.tempFilePaths[0]
        })
      }
    })
  },
  getstorepath () {
    wx.saveFile({
      tempFilePath: this.data.markerIconPath,
      success: (res) => {
        console.log(res)
        this.setData({
          markerIconPath: res.savedFilePath,
          controls_iconPath: res.savedFilePath,
          polyline_arrowIconPath: res.savedFilePath,
          markers_iconPath: res.savedFilePath
        })
      }
    })
  },
  getusrpath () {
    wx.getFileSystemManager().saveFile({
      tempFilePath: this.data.markerIconPath,
      filePath: `${wx.env.USER_DATA_PATH}/markericon/test.jpg`,
      success: (res) => {
        console.log(res)
        this.setData({
          markerIconPath: res.savedFilePath,
          controls_iconPath: res.savedFilePath,
          polyline_arrowIconPath: res.savedFilePath,
          markers_iconPath: res.savedFilePath
        })
      },
      complete: (res) => {
        console.log(res)
      }
    })
  },
  attributeKeyChange (e) {
    const { toNumber } = this.data
    const { attribute, defaultnum, orginalattribute } = e.target.dataset
    let value = e.detail.value
    const orginalval = e.detail.value
    try {
      value = JSON.parse(value)
    } catch (e) {
      if (defaultnum) {
        value = toNumber ? (isNaN(value) ? value : Number(value)) : String(value)
      }
    }
    if (typeof value === 'number' && !toNumber) {
      value = String(value)
    }
    const obj = {}
    obj[attribute] = value
    orginalattribute && (obj[orginalattribute] = orginalval)
    console.log('改变的属性： ', obj)
    this.setData(obj)
  },
  showMap () {
    this.setData({
      mapShow: !this.data.mapShow
    })
  },
  emitchooseLocation () {
    wx.chooseLocation({
      longitude: '85.1318117790985',
      latitude: '45.69139458288415',
      complete (res) {
        console.log('chooseLocation complete ', res)
      }
    })
  },
  emitinvokeMapTask: function () {
    wx.invokeMapTask({
      complete: (res) => {
        console.log(res)
      }
    })
  },
  emitchooseimage () {
    wx.chooseImage({
      count: 3,
      // sizeType: 'original',
      sourceType: ['album', 'camera'],
      complete: function complete(res) {
        console.log(res)
      }
    })
  },
  goPage () {
    wx.navigateTo({
      url: '/pages/mapmultiple/mapmultiple'
    })
  },
  testundefined () {
    this.setData({
      latitude: undefined
    })
  }
})                      