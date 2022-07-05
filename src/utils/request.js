import axios from 'axios'

import loding from './loding'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'https://imooc-admin.lgdsunday.club/prod-api',
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    loding.open()
    return config
  },
  (error) => {
    loding.close()
    return new Error(error)
  }
)
service.interceptors.response.use(
  (res) => {
    loding.close()
    return res
  },
  (error) => {
    loding.close()
    return new Error(error)
  }
)

// 统一参数管理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  service(options)
}
export default request
