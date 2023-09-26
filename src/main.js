import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
import router from './routes'; 

const app = createApp(App);
const pinia = createPinia()

app.use(pinia)
app.use(ElementPlus);
app.use(router); 
app.mount('#app');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../public/service-worker.js')
    .then(registration => {
    console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
    console.error('Service Worker registration failed:', error);
    });
}
