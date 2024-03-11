import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import socketPlugin from './plugins/socketPlugin';
import { createPinia } from 'pinia';
 
const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(socketPlugin, {
    connection: "http://localhost:3001", 
    options: { },
  });
  
app.mount('#app')
