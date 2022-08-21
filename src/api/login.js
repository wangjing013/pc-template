export default ($axios) => {
  return {
    wechatLogin(data = {}) {
      return $axios.post('/uaa/pc/third-login/by-weixin', data)
    },
  }
}
