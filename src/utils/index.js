import qs from 'qs'

const regx = /\?/
// 拼接参数
export const concatQueryParams = (url, params = {}) => {
  return regx.test(url)
    ? `${url}&${qs.stringify(params)}`
    : `${url}?${qs.stringify(params)}`
}
