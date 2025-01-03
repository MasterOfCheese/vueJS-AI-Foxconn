import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css';


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(vuetify)

app.mount('#app')