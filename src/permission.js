import router from './router'
import store from './store'

// 定义一个用户未登录情况下可以访问的白名单

const whileList = ['/login']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === 'login') {
      next(from.path)
    } else {
      await store.dispatch('user/setUserInfo')
      next()
    }
  } else {
    if (whileList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
