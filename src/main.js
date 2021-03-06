import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.scss'
import installIcons from './icons/index.js'
const app = createApp(App)
installIcons(app)
app.use(store).use(router).use(Vant).use(ElementPlus).mount('#app')
