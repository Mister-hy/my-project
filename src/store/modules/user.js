import api from '../../api/api'
import { localStoragesetItem, localStorageGetItem } from '../../utils/storage'
export default {
  namespaced: true, //true must be added here
  state: () => ({
    token: localStorageGetItem('token') || []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStoragesetItem('token', token)
    }
  },
  actions: {
    async setUserFrom({ commit }, payload) {
      try {
        const res = await api.getCode(payload)
        // console.log(res)
        commit('setToken', res.token)
        return res
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: () => {}
}
