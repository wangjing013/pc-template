import { message } from 'ant-design-vue'

const axiosPlugin = ({ $axios }, inject) => {
  $axios.setBaseURL(process.env.BASE_URL)
  $axios.onRequest((config) => {
    return config
  })
  $axios.onResponse((response) => {
    const { code, msg } = response.data
    if (code !== 200) {
      message.error({
        content: msg,
      })
    }
    return response.data
  })
  $axios.onError((error) => {
    message.error({
      content: error.message,
    })
  })

  // 动态注入
  const requireContext = require.context('../api/', false, /\.js$/)
  const regx = /(?:\w+)/
  requireContext.keys().forEach((key) => {
    // 通过 requireContext(key)导出文件内容
    const mod = requireContext(key)
    const fn = mod.__esModule && mod.default ? mod.default : mod
    inject(`${regx.exec(key)[0]}Api`, fn($axios))
  })
}

export default axiosPlugin
