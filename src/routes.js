import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import Splash from './components/Splash.vue';
import Admin from './views/Admin.vue';
import Plates from './components/Plate.vue';
import StateOrder from './views/StateOrder.vue';
import Cadastro from './views/Cadastro.vue';
import Notification from './views/Notification.vue';

const routes = [
    { path: '/', component: Splash },
    { path: '/cadastro', component: Cadastro},
    { path:'/notification', component: Notification},
    { path: '/inicio', component: Home },
    { path: '/restaurants', component: Restaurants },
    { path: '/admin', component: Admin },
    { path: '/plates',name: Plates, component: Plates},
    { path: '/stateorder',name: StateOrder, component: StateOrder }
];

  

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;