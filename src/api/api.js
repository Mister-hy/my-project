import request from '../utils/request'

const getCode = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}
//https://www.markerhub.com/vueadmin-java/login?username=test&password=1234567&code=dnfn3&token=5b279f59-740b-4e9e-9797-d01bd1c85190
const login = (data) => {
  return request({
    url: `/login?user=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'GET'
  })
}
export default { getCode, login }
