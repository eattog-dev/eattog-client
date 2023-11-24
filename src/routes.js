import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Restaurants from './views/Restaurants.vue';
import SingleRestaurant from './views/SingleRestaurant.vue';
import Splash from './components/Splash.vue';
import Admin from './views/Admin.vue';
import Dishes from './views/Dishes.vue'
import Cadastro from './views/Cadastro.vue';
import Notification from './views/Notification.vue';
import Login from './views/Login.vue';
import CardAdd from './components/CardAdd.vue';
import SingleCategoria from './views/SingleCategoria.vue';
import StateOrder from './views/StateOrder.vue';
import ManageSystem from './views/ManageSystem.vue';
import UserProfile from './views/UserProfile.vue'


const routes = [
    { path: '/', component: Splash },
    { path: '/cadastro', component: Cadastro, meta: {onlyWithoutAuth: true}, name: Cadastro },
    { path: '/login', component: Login, meta: {onlyWithoutAuth: true}, name: Login },
    { path: '/perfil', component: UserProfile, meta: {onlyAuth: true}, name: UserProfile },
    { path: '/cardadd', component: CardAdd },
    { path: '/notification', component: Notification },
    { path: '/inicio', component: Home, name: Home },
    { path: '/restaurants', component: Restaurants },
    { path: '/restaurants/:id', name: 'SingleRestaurant', props: true, query: true, component: SingleRestaurant },
    { path: '/admin', component: Admin },
    { path: '/dishes', name: Dishes, component: Dishes },
    { path: '/gerenciar',name: ManageSystem , component: ManageSystem},
    { path: '/categorias/:id/:nome', name: SingleCategoria, component: SingleCategoria },
    { path: '/stateorder', name: StateOrder, component: StateOrder },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    if (to.meta.onlyWithoutAuth && sessionStorage.getItem("token")) next({ name: Home })
    else if (to.meta.onlyAuth  && !sessionStorage.getItem("token")) next({ name: Login })
    else next()
})

export default router;