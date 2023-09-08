import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import SingleRestaurant from './views/SingleRestaurant.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/restaurants', component: Restaurants },
    {path: '/restaurants/:id', name: 'SingleRestaurant', props: true, query: true, component: SingleRestaurant}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;