import { createStore } from 'vuex'
import user from "./modules/user";
import persist from 'vuex-persistedstate'
export default createStore({
  modules: {user},
  plugins: [persist()]
})
