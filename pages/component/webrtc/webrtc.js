// logs.js

let sockTask
let socketId
let pc1
let mediaRecorder

Page({
  data: {
    logs: [],
    show: false,
    toggle: true,
    connectId: '',
    toId: '',
    localStream: null,
    localStreamId: '',
    remoteStreamId: '',
    showwebrtc: true,
    recordFile: ''
  },
  tuIdChange(e) {
    this.setData({
      toId: e.detail.value
    })
  },
  onLoad() {
    const connectId = Math.random().toString(36).slice(-4).toUpperCase()
    this.setData({
      connectId
    })
  },
  startSocket() {
    sockTask = wx.connectSocket({
      url: 'wss://finogeeks-tools.finogeeks.club/webrtc-server',
      // url: 'ws://localhost:8989',
      complete (res) {
        console.log('DEBUG: socket-staff |||| connectSocket complete: ', res)
      }
    })
    sockTask.onOpen((res) => {
      console.log('DEBUG: socket-staff |||| sockTask.onOpen: ', res)
      sockTask.send({
        data: JSON.stringify({
          type: 'ready',
          id: this.data.connectId
        })
      })
    })
    sockTask.onMessage(async (res) => {
      let data
      try {
        data = JSON.parse(res.data)
      } catch (e) {
        data = {}
      }
      console.log('DEBUG: socket-staff |||| sockTask.onMessage: ', data)
      if (data.type === 'sendOffer') {
        // 收到 sendOffer 时，表示自己是 remote 端
        await pc1.setRemoteDescription(data.args)
        const answer = await pc1.createAnswer()
        sockTask.send({
          data: JSON.stringify({
            type: 'sendAnswer',
            args: answer,
            to: data.from,
            from: this.data.connectId
          })
        })
        await pc1.setLocalDescription(answer)
      }

      if (data.type === 'sendAnswer') {
        // 收到 answer 时，表示自己是 host 端
        await pc1.setRemoteDescription(data.args)
      }

      if (data.type === 'icecandidate') {
        await pc1.addIceCandidate(data.args)
      }
    })
  },
  async makeCall () {
    const offer = await pc1.createOffer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1
    })
    pc1.setLocalDescription(offer)
    sockTask.send({
      data: JSON.stringify({
        type: 'sendOffer',
        args: offer,
        to: this.data.toId,
        from: this.data.connectId
      })
    })
  },
  async startWebrtc() {
    const stream = await wx.webrtc.mediaDevices.getUserMedia({ audio: true, video: true })
    const { streamId } = stream
    this.setData({
      localStreamId: streamId,
      localStream: stream
    })
    const servers = { iceServers: [{ urls: "stun:stun.stunprotocol.org" }] }
    const mediaConstraints = { optional: [{ RtpDataChannels: true }] }
    pc1 = await wx.webrtc.createRTCPeerConnection(servers, mediaConstraints)
    console.log('pc1', pc1.id)
    pc1.addEventListener('icecandidate', e => {
      console.log('DEBUG: listener-callback ---- icecandidate', e)
      sockTask.send({
        data: JSON.stringify({
          args: e.candidate,
          type: 'icecandidate',
          to: this.data.toId,
          from: this.data.connectId
        }),
        complete (res) {
          console.log('sockTask.send complete: ',res)
        }
      })
    });
    pc1.addEventListener('negotiationneeded', e => {
      console.log('DEBUG: listener-callback ---- negotiationneeded', e)
    })
    pc1.addEventListener('iceconnectionstatechange', e => {
      console.log('DEBUG: listener-callback ---- iceconnectionstatechange', e)
    })
    pc1.addEventListener('signalingstatechange', e => {
      console.log('DEBUG: listener-callback ---- signalingstatechange', e)
    })


    pc1.addEventListener('track', e => {
      console.log('DEBUG: listener-callback ---- ontrack', e)
      this.setData({
        remoteStreamId: e.streams[0].streamId
      })
    })

    const tracks = await stream.getTracks()
    console.log('tracks: ', tracks)
    tracks.forEach(t => {
      pc1.addTrack(t)
    })
  },
  goBack () {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  webrtcshow () {
    this.setData({
      showwebrtc: !this.data.showwebrtc
    })
  },
  newalocalRecord () {
    mediaRecorder = wx.webrtc.createMediaRecorder(this.data.localStream)
    mediaRecorder.ondataavailable = (event) => {
      console.log('DEBUG: listener-callback ---- mediaRecorder.ondataavailable ,  ', event)
    }
    mediaRecorder.onerror = (event) => {
      console.log('DEBUG: listener-callback ---- mediaRecorder.onerror ,  ', event)
    }
    mediaRecorder.onstop = (event) => {
      console.log('DEBUG: listener-callback ---- mediaRecorder.onstop ,  ', event)
      this.setData({
        recordFile: event.tempFilePath
      })
    }
    mediaRecorder.onresume = (event) => {
      console.log('DEBUG: listener-callback ---- mediaRecorder.onresume ,  ', event)
    }
    mediaRecorder.onpause = (event) => {
      console.log('DEBUG: listener-callback ---- mediaRecorder.onpause ,  ', event)
    }
    mediaRecorder.onstart = (event) => {
      console.log('DEBUG: listener-callback ---- mediaRecorder.onstart ,  ', event)
    }
  },
  startLocalRecord () {
    mediaRecorder.start()
  },
  stopLocalRecord () {
    mediaRecorder.stop()
  }
})
