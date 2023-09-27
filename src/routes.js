import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import SingleRestaurant from './views/SingleRestaurant.vue';

import Splash from './components/Splash.vue';
import Admin from './views/Admin.vue';
import Dishes from './views/Dishes.vue'
import SingleDish from './views/SingleDish.vue'
const routes = [
    { path: '/', component: Splash },
    { path: '/inicio', component: Home },
    { path: '/restaurants', component: Restaurants },
    { path: '/restaurants/:id', name: 'SingleRestaurant', props: true, query: true, component: SingleRestaurant },
    { path: '/admin', component: Admin },
    { path: '/dishes', name: Dishes, component: Dishes },
    { path: '/dishes/:id_dish/:nome', name: 'SingleDish', props: true, query: true, component: SingleDish }
];



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;