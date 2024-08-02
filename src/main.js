import './assets/style/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://127.0.0.1/api/'
axios.defaults.headers.authorization = 'Bearer ' + localStorage.getItem('access_token')

const app = createApp(App)

app.use(router).use(VueAxios, axios).mount('#app')
