import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './routes';
import VueTheMask from 'vue-the-mask';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './registerServiceWorker';
import wb from "./registerServiceWorker";

const app = createApp(App);
const pinia = createPinia();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.use(VueTheMask);

app.config.globalProperties.$workbox = wb;

app.mount('#app');

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

