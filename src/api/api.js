import request from '../utils/request'

/**
 * 登录接口
 *
 */
// /login?username=test&password=1234567&code=48eng&token=ebcf3702-9b06-43d3-9b49-1670de0d2efc
export const captcha = () => {
  return request({
    url: 'https://www.markerhub.com/vueadmin-java/captcha',
    method: 'GET'
  })
}
