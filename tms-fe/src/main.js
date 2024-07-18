import { createApp } from 'vue'
import './index.css'
import router from './routers'
import store from './store'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
 