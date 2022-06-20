const example = {}

example.setGreen = function (context, isOld) {
  example.setRandom(context, isOld, 'green')
}

example.setRed = function (context, isOld) {
  example.setRandom(context, isOld, 'red')
}

// 设置随机颜色
example.setRandom = function (context, isOld, color) {
  if (isOld) {
    context.setFillStyle(color)
    context.setStrokeStyle(color)
    context.setFontSize(10)
    context.setShadow(10, 10, 30, color)
    context.setLineCap('butt')
    context.setLineJoin('miter')
    context.setLineWidth(1)
    context.setMiterLimit(10)
  } else {
    context.fillStyle = color
    context.strokeStyle = color
    context.fontSize = 10
    context.shadowColor = color
    context.shadowBlur = 30
    context.shadowOffsetX = 10
    context.shadowOffsetY = 10
    context.lineCap = 'butt'
    context.lineJoin = 'miter'
    context.lineWidth = 1
    context.miterLimit = 10
  }
}

// 重置颜色
example.reset = function (context, isOld) {
  context.beginPath()

  if (isOld) {
    context.setFillStyle('#000000')
    context.setStrokeStyle('#000000')
    context.setFontSize(10)
    context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)')
    context.setLineCap('butt')
    context.setLineJoin('miter')
    context.setLineWidth(1)
    context.setMiterLimit(10)
  } else {
    context.fillStyle = '#000000'
    context.strokeStyle = '#000000'
    context.fontSize = 10
    context.shadowColor = 'rgba(0, 0, 0, 0)'
    context.shadowBlur = 0
    context.shadowOffsetX = 0
    context.shadowOffsetY = 0
    context.lineCap = 'butt'
    context.lineJoin = 'miter'
    context.lineWidth = 1
    context.miterLimit = 10
  }
}

example.transform = function (context, isOld) {
  context.transform(1, 0, 0, 1, 30, 10)
}

example.measureText = function (context, isOld) {
  const data = context.measureText('123')
  console.log(`width: ${data.width}`)
}

example.arc = function (context, isOld) {
  context.beginPath()
  context.arc(75, 75, 50, 0, Math.PI * 2, true)
  context.moveTo(110, 75)
  context.arc(75, 75, 35, 0, Math.PI, false)
  context.moveTo(65, 65)
  context.arc(60, 65, 5, 0, Math.PI * 2, true)
  context.moveTo(95, 65)
  context.arc(90, 65, 5, 0, Math.PI * 2, true)

  context.stroke()
}

example.arcTo = function (context, isOld) {
  context.beginPath();
  context.moveTo(20, 20);           // 创建开始点
  context.lineTo(100, 20);          // 创建水平线
  context.arcTo(150, 20, 150, 70, 50); // 创建弧
  context.lineTo(150, 120);
  context.arcTo(200, 120, 200, 170, 20); // 创建弧
  context.stroke();
}

example.beginPath = function (context, isOld) {
  context.beginPath()
  context.moveTo(20, 75)
  context.lineTo(250, 75)
  context.stroke()

  context.beginPath()
  context.moveTo(50, 20)
  context.lineTo(150, 130)
  context.stroke()
}

example.bezierCurveTo = function (context, isOld) {
  context.beginPath()
  context.moveTo(20, 20)
  context.bezierCurveTo(20, 100, 200, 100, 200, 20)
  context.stroke()
  context.beginPath()
  context.moveTo(60, 60)
  context.bezierCurveTo(60, 100, 200, 100, 200, 60)
  context.stroke()
}

example.clearRect = function (context, isOld) {
  context.beginPath()
  context.rect(0, 0, 300, 150)
  context.fill()
  context.clearRect(20, 20, 100, 50)
}

example.clip = function (context, isOld) {
  // 剪切矩形区域
  context.rect(50, 20, 200, 120)
  context.stroke()
  context.clip()
  context.fillRect(0, 0, 150, 100)
}

example.closePath = function (context, isOld) {
  context.beginPath()
  context.moveTo(20, 20)
  context.lineTo(20, 100)
  context.lineTo(70, 100)
  context.closePath()
  context.stroke()

  context.beginPath()
  context.moveTo(100, 100)
  context.lineTo(120, 120)
  context.lineTo(100, 200)
  context.closePath()
  context.stroke()
}

example.rotate = function (context, isOld) {
  context.beginPath()
  context.rotate(10 * Math.PI / 180)
  context.rect(225, 75, 50, 50)
  context.fill()
  context.strokeStyle = 'red'
  context.rect(225, 75, 50, 50)
  context.stroke()
}

example.createCircularGradient = function (context, isOld) {
  if (isOld) {
    const grd = context.createCircularGradient(75, 50, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'green')
    context.setFillStyle(grd)
    context.fillRect(10, 10, 150, 80)
    context.draw()
  } else {
    const grd = context.createRadialGradient(75, 50, 5, 20, 20, 20);
    grd.addColorStop(0, "red")
    grd.addColorStop(1, "green")
    context.fillStyle = grd
    context.fillRect(10, 10, 150, 80)
  }
}

example.createLinearGradient = function (context, isOld) {
  const grd = context.createLinearGradient(0, 0, 170, 0)
  grd.addColorStop(0, "black")
  grd.addColorStop(1, "white")
  if (isOld) {
    context.setFillStyle(grd)
  } else {
    context.fillStyle = grd
  }
  context.fillRect(20, 20, 150, 100)
}

example.createPattern = function (context, isOld, color, canvas) {
  if (isOld) {
    const pat = context.createPattern('../../../image/icon_cloud_HL.png', "repeat")
    context.setFillStyle(pat)
    context.rect(0, 0, 150, 100)
    context.fill()
  } else {
    const img = canvas.createImage()
    img.onload = () => {
      const pat = context.createPattern(img, "repeat")
      context.fillStyle = pat
      context.rect(0, 0, 150, 100)
      context.fill()
    }
    img.src = '../../../image/icon_cloud_HL.png'
  }
}

example.scale = function (context, isOld) {
  context.beginPath()
  context.rect(25, 25, 50, 50)
  context.stroke()

  context.scale(2, 2)

  context.beginPath()
  context.rect(25, 25, 50, 50)
  context.stroke()


  context.scale(3, 3)
  context.beginPath()
  context.rect(40, 40, 50, 50)
  context.stroke()


  context.scale(1, 1)

}

example.translate = function (context, isOld) {
  context.beginPath()
  context.rect(10, 10, 100, 50)
  context.fill()

  context.translate(70, 70)
  context.beginPath()
  context.fill()

  context.translate(120, 120)

  context.beginPath()
  context.fill()
}

example.save = function (context, isOld) {
  context.beginPath()
  if (isOld) {
    context.setStrokeStyle('#00ff00')
  } else {
    context.strokeStyle = '#00ff00'
  }
  context.save()

  context.scale(2, 2)
  if (isOld) {
    context.setStrokeStyle('#ff0000')
  } else {
    context.strokeStyle = '#ff0000'
  }
  context.rect(0, 0, 100, 100)
  context.stroke()
  context.restore()

  context.rect(0, 0, 50, 50)
  context.stroke()
  context.scale(1, 1)
}

example.restore = function (context, isOld) {
  [3, 2, 1].forEach(function (item) {
    context.beginPath()
    context.save()
    context.scale(item, item)
    context.rect(10, 10, 100, 100)
    context.stroke()
    context.restore()
  })
}

example.drawImage = function (context, isOld, color, canvas) {
  if (isOld) {
    context.drawImage('/image/wechat.png', 0, 0)
  } else {
    const img = canvas.createImage()
    img.onload = () => {
      context.drawImage(img, 0, 0)
    }
    img.src = '/image/wechat.png'
  }
}

example.fillText = function (context, isOld) {
  context.beginPath()
  context.moveTo(0, 10)
  context.lineTo(300, 10)
  context.stroke()


  if (isOld) {
    context.setFontSize(10)
  } else {
    context.font = '10px arial'
  }
  context.fillText('Hello World', 0, 30)
  if (isOld) {
    context.setFontSize(20)
  } else {
    context.font = '20px arial'
  }
  context.fillText('Hello World', 100, 30)

  context.beginPath()
  context.moveTo(0, 30)
  context.lineTo(300, 30)
  context.stroke()
}

example.fill = function (context, isOld) {
  context.beginPath()
  context.rect(20, 20, 150, 100)
  context.fill()
}

example.stroke = function (context, isOld) {
  context.beginPath()
  context.moveTo(20, 20)
  context.lineTo(20, 100)
  context.lineTo(70, 100)
  context.stroke()
}

example.strokeRect = function (context, isOld) {
  context.strokeRect(20, 20, 150, 100)
  context.strokeRect(160, 180, 200, 200)
}

example.strokeText = function (context, isOld) {
  context.font = "20px arial"
  context.strokeText("Hello World!", 10, 50)

  context.font = "30px arial"
  // 创建渐变
  const gradient = context.createLinearGradient(0, 0, 200, 0)
  gradient.addColorStop("0", "magenta")
  gradient.addColorStop("0.5", "blue")
  gradient.addColorStop("1.0", "red")
  // 用渐变填色
  if (isOld) {
    context.setStrokeStyle(gradient)
  } else {
    context.strokeStyle = gradient
  }
  context.strokeText("finclip", 10, 90)
}


example.moveTo = function (context, isOld) {
  context.beginPath()
  context.moveTo(0, 0)
  context.lineTo(300, 150)
  context.stroke()

  context.beginPath()
  context.moveTo(40, 40)
  context.lineTo(200, 180)
  context.stroke()
}

example.lineTo = function (context, isOld) {
  context.beginPath()
  context.moveTo(20, 20)
  context.lineTo(20, 100)
  context.lineTo(70, 100)
  context.stroke()

  context.beginPath()
  context.moveTo(40, 40)
  context.lineTo(200, 180)
  context.lineTo(70, 100)
  context.stroke()
}

example.rect = function (context, isOld) {
  context.beginPath()
  context.rect(20, 20, 150, 100)
  context.stroke()

  context.beginPath()
  context.rect(40, 40, 180, 100)
  context.stroke()
}

example.quadraticCurveTo = function (context, isOld) {
  context.beginPath()
  context.moveTo(20, 20)
  context.quadraticCurveTo(20, 100, 200, 20)
  context.stroke()

  context.beginPath()
  context.moveTo(60, 60)
  context.quadraticCurveTo(30, 130, 200, 20)
  context.stroke()
}

example.setFillStyle = function (context, isOld) {
  ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
    if (isOld) {
      context.setFillStyle(item)
    } else {
      context.fillStyle = item
    }
    context.beginPath()
    context.rect(0 + 75 * index, 0, 50, 50)
    context.fill()
  })
}

example.setStrokeStyle = function (context, isOld) {
  ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
    if (isOld) {
      context.setStrokeStyle(item)
    } else {
      context.strokeStyle = item
    }
    context.beginPath()
    context.rect(0 + 75 * index, 0, 50, 50)
    context.stroke()
  })
}


example.setTextAlign = function (context, isOld) {
  // 在位置 150 创建蓝线
  function setTextAlign(text) {
    if (isOld) {
      context.setTextAlign(text)
    } else {
      context.textAlign = text
    }
  }
  context.moveTo(150, 20)
  context.lineTo(150, 170)
  context.stroke()

  context.font = "15px Arial"

  // 显示不同的 textAlign 值
  setTextAlign("start")
  context.fillText("textAlign=start", 150, 60)
  setTextAlign("end")
  context.fillText("textAlign=end", 150, 80)
  setTextAlign("left")
  context.fillText("textAlign=left", 150, 100)
  setTextAlign("center")
  context.fillText("textAlign=center", 150, 120)
  setTextAlign("right")
  context.fillText("textAlign=right", 150, 140)
}

example.setTextBaseline = function (context, isOld) {
  // 在位置 150 创建蓝线

  function setTextBaseline(text) {
    if (isOld) {
      context.setTextBaseline(text)
    } else {
      context.textBaseline = text
    }
  }
  context.moveTo(5, 100)
  context.lineTo(395, 100)
  context.stroke()

  context.font = "20px Arial"

  // 显示不同的 textAlign 值
  setTextBaseline("top")
  context.fillText("Top", 5, 100)
  setTextBaseline("bottom")
  context.fillText("Bottom", 50, 100)
  setTextBaseline("middle")
  context.fillText("Middle", 120, 100)
  setTextBaseline("alphabetic")
  context.fillText("Alphabetic", 190, 100)
  setTextBaseline("hanging")
  context.fillText("Hanging", 290, 100)
}

example.setTransform = function (context, isOld) {
  // 在位置 150 创建蓝线

  context.fillRect(0, 0, 250, 100)

  context.setTransform(1, 0.5, -0.5, 1, 30, 10)
  if (isOld) {
    context.setFillStyle('red')
  } else {
    context.fillStyle = 'red'
  }
  context.fillRect(0, 0, 250, 100);

  context.setTransform(1, 0.5, -0.5, 1, 30, 10)
  if (isOld) {
    context.setFillStyle('blue')
  } else {
    context.fillStyle = 'blue'
  }
  context.fillRect(0, 0, 250, 100)
}

example.setGlobalAlpha = function (context, isOld) {
  [1, 0.5, 0.1].forEach(function (item, index) {
    try {
      context.setGlobalAlpha(item)
    } catch (e) {
      context.globalAlpha = item
    }
    context.beginPath()
    context.rect(0 + 75 * index, 0, 50, 50)
    context.fill()
  })
}

example.setShadow = function (context, isOld) {
  context.beginPath()
  context.rect(10, 10, 100, 100)
  context.fill()

  context.beginPath()
  context.rect(50, 50, 100, 100)
  context.fill()
}

example.setFontSize = function (context, isOld) {
  [10, 20, 30, 40].forEach(function (item, index) {
    if (isOld) {
      context.setFontSize(item)
    } else {
      context.font = item + 'px arial'
    }
    context.fillText('Hello, world', 20, 20 + 40 * index)
  })
}

example.setLineCap = function (context, isOld) {
  context.setLineWidth(10)
  if (isOld) {
    context.setLineWidth(10)
  } else {
    context.lineWidth = 10
  }
  ['butt', 'round', 'square'].forEach(function (item, index) {
    context.beginPath()
    if (isOld) {
      context.setLineCap(item)
    } else {
      context.lineCap = item
    }
    context.moveTo(20, 20 + 20 * index)
    context.lineTo(100, 20 + 20 * index)
    context.stroke()
  })
}

example.setLineDash = function (context, isOld) {
  context.beginPath()
  context.setLineDash([5, 15])
  context.moveTo(0, 50)
  context.lineTo(300, 50)
  context.stroke()

  // Solid line
  context.beginPath()
  context.setLineDash([])
  context.moveTo(0, 100)
  context.lineTo(300, 100)
  context.stroke()
}

example.setLineJoin = function (context, isOld) {
  if (isOld) {
    context.setLineWidth(10)
  } else {
    context.lineWidth = 10
  }
  ['bevel', 'round', 'miter'].forEach(function (item, index) {
    context.beginPath()
    if (isOld) {
      context.setLineJoin(item)
    } else {
      context.lineJoin = item
    }
    context.moveTo(20 + 80 * index, 20)
    context.lineTo(100 + 80 * index, 50)
    context.lineTo(20 + 80 * index, 100)
    context.stroke()
  })
}

example.setLineWidth = function (context, isOld) {
  [2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath()
    if (isOld) {
      context.setLineWidth(item)
    } else {
      context.lineWidth = item
    }
    context.moveTo(20, 20 + 20 * index)
    context.lineTo(100, 20 + 20 * index)
    context.stroke()
  })
}

example.setMiterLimit = function (context, isOld) {

  if (isOld) {
    context.setLineWidth(4)
  } else {
    context.lineWidth = 4
  }
  [2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath()
    if (isOld) {
      context.setMiterLimit(item)
    } else {
      context.miterLimit = item
    }
    context.moveTo(20 + 80 * index, 20)
    context.lineTo(100 + 80 * index, 50)
    context.lineTo(20 + 80 * index, 100)
    context.stroke()
  })
}

example.globalCompositeOperation = function (context, isOld) {
  if (isOld) {
    context.setFillStyle('red')
  } else {
    context.fillStyle = 'red'
  }
  context.fillRect(20, 20, 75, 50)
  context.globalCompositeOperation = "source-over"
  if (isOld) {
    context.setFillStyle('blue')
  } else {
    context.fillStyle = 'blue'
  }
  context.fillRect(50, 50, 75, 50)

  if (isOld) {
    context.setFillStyle('red')
  } else {
    context.fillStyle = 'red'
  }
  context.fillRect(150, 20, 75, 50)
  context.globalCompositeOperation = "destination-over"
  if (isOld) {
    context.setFillStyle('blue')
  } else {
    context.fillStyle = 'blue'
  }
  context.fillRect(180, 50, 75, 50)
}

example.createImage = function (context, isOld, color, canvas) {
  if (isOld) {
    context.fillText('createImage 不会生效', 20, 20)
  } else {
    // 本地路径 1
    const img = canvas.createImage()
    img.src = '../../../image/wechat.png'
    img.onload = () => {
      context.drawImage(img, 0, 0, 100, 100)
    }

    wx.getImageInfo({
      src: 'http://img.daimg.com/uploads/allimg/210526/3-2105261P1490-L.jpg',
      success(res) {
        const img = canvas.createImage()
        img.src = res.path
        // finfile
        img.onload = () => {
          context.drawImage(img, 120, 0, 100, 100)
        }
      }
    })

    // 网络路径
    const img2 = canvas.createImage()
    img2.src = 'http://img.daimg.com/uploads/allimg/211113/3-2111131612510-L.jpg'
    img2.onload = () => {
      context.drawImage(img2, 240, 0, 100, 100)
    }

  }
}

module.exports = example
