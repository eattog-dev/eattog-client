import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import Splash from './components/Splash.vue';
import Admin from './views/Admin.vue'
const routes = [
    { path: '/', component: Splash },
    { path: '/inicio', component: Home },
    { path: '/restaurants', component: Restaurants },
    { path: '/admin', component: Admin },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;