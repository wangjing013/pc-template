import ReconnectingWebSocket from 'reconnecting-websocket'

const defaultOptions = {
  url: '',
  debug: false, // 显示日志
  protocols: [],
  maxRetries: 5,
  onerror: (event) => {},
  onopen: (event) => {},
  onmessage: (event) => {},
  ondisconnect: (event) => {},
}

export default class IMWebScoket {
  // 实例变量
  static instance = null
  // 获取实例
  static getInstance(url, options = {}) {
    IMWebScoket.instance = new IMWebScoket(url, options)
    return IMWebScoket.instance
  }

  constructor(url, options) {
    const mergeOptions = {}
    if (!options) {
      options = {}
    }
    for (const key in defaultOptions) {
      if (typeof options[key] !== 'undefined') {
        mergeOptions[key] = options[key]
      } else {
        mergeOptions[key] = defaultOptions[key]
      }
    }
    this.options = mergeOptions
    this.socket = new ReconnectingWebSocket(
      url,
      mergeOptions.protocols,
      mergeOptions
    )
    this.addEventListener()
  }

  // 初始化事件
  addEventListener() {
    // 监听连接建立
    this.socket.onopen = (event) => {
      this.options.onopen(event)
    }

    // 监听后端消息
    this.socket.onmessage = (event) => {
      const msg = event.data
      this.options.onmessage(msg)
    }

    // 监听 websocket 错误
    this.socket.onerror = (event) => {
      this.options.onerror(event)
    }

    // webscoket 连接关闭
    this.socket.onclose = (event) => {
      this.options.ondisconnect(event)
    }
  }

  // 心跳检查
  heartbeatCheck(data) {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
    this.timer = setInterval(() => {
      this.send(data)
    }, 5000)
  }

  // 发送消息
  send(data) {
    this.socket.send(data)
  }

  // 关闭连接
  close() {
    this.socket.close()
  }

  // 销毁
  destory() {
    this.close()
    IMWebScoket.instance = null
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
