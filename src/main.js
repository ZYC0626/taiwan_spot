import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import $getAuthorizationHeader from './methods/getAuthorizationHeader'
import { formatCity, formatDate } from './methods/filter'
// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.$getAuthorizationHeader = $getAuthorizationHeader
app.config.globalProperties.$filter = {
  formatCity,
  formatDate
}

app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
