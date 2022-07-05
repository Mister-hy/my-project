import axios from 'axios'

const http = axios.create({
  timeout: 5000,
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'https://www.markerhub.com/vueadmin-java'
})

//axios设置请求拦截器
http.interceptors.request.use(
  (config) => {
    // config.headers.mytoken = 'nihao' //设置响应头
    // config.headers.Authorization = 'Bearer ' + token
    return config
  },
  (err) => {
    console.log(err)
  }
)

//axios设置响应拦截器
http.interceptors.response.use(
  (response) => {
    return response //拦截处理响应结果，直接返回需要的数据
  },
  (err) => {
    console.log(err)
  }
)
// 统一参数处理
const request = (options) => {
  if (options.method.toLowerCase === 'get') {
    options.params = options.data || []
  }
  http(options)
}

export default request
