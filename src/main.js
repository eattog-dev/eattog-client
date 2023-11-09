import './assets/main.css'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
import router from './routes'; 
import VueTheMask from 'vue-the-mask';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
const pinia = createPinia()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(pinia)
app.use(ElementPlus);
app.use(router); 
app.use(VueTheMask);
app.mount('#app');

pinia.use(({ store }) => {
  store.router = markRaw(router)
  })


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../public/service-worker.js')
    .then(registration => {
    console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
    console.error('Service Worker registration failed:', error);
    });
}
