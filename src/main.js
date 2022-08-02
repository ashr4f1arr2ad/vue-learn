import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import './main.css'
import router from './router/index'

const app = createApp(App).use(store).use(Antd).use(router)
app.mount('#app')
