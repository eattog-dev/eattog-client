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
import UserProfile from './views/UserProfile.vue';
import Cart from './views/Cart.vue';
import OwnerRegistration from './views/OwnerRegistration.vue';
import OwnerLogin from './views/OwnerLogin.vue';
import NotFound from './views/NotFound.vue';
import SobreNos from './views/SobreNos.vue';

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', component: Splash },
    { path: '/cadastro', component: Cadastro, meta: { onlyWithoutAuth: true ,  hasFooter: false}, name: 'Cadastro' },
    { path: '/login', component: Login, meta: { onlyWithoutAuth: true, hasFooter: false }, name: 'Login' },
    { path: '/perfil', component: UserProfile, meta: { onlyAuth: true, hasFooter: true }, name: 'UserProfile' },
    { path: '/carrinho', component: Cart, meta: { onlyAuth: false, hasFooter: true}, name: 'Cart' },
    { path: '/cardadd', component: CardAdd},
    { path: '/notification', component: Notification, meta: {hasFooter: true} },
    { path: '/inicio', component: Home, name: 'Home', meta: {hasFooter: true}},
    { path: '/restaurants', component: Restaurants, meta: {hasFooter: true} },
    { path: '/restaurants/:id', name: 'SingleRestaurant', props: true, query: true, component: SingleRestaurant, meta: {hasFooter: true} },
    { path: '/admin', component: Admin, name: 'Admin', meta: {hasFooter: false} },
    { path: '/dishes', name: 'Dishes', component: Dishes, meta: {hasFooter: true} },
    { path: '/adminconsole', name: 'ManageSystem', component: ManageSystem , meta: {hasFooter: false}},
    { path: '/categorias/:id/:nome', name: 'SingleCategoria', component: SingleCategoria, meta: { meta: {hasFooter: true} } },
    { path: '/stateorder', name: 'StateOrder', component: StateOrder, meta: {hasFooter: true} },
    { path: '/cadastro/proprietario', component: OwnerRegistration, meta: { onlyWithoutAuth: true , hasFooter: false }, name: 'OwnerRegistration' },
    { path: '/login/proprietario', component: OwnerLogin, meta: { onlyWithoutAuth: true,  hasFooter: false }, name: 'OwnerLogin' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {

    if (to.meta.onlyWithoutAuth && sessionStorage.getItem("token")) next({ name: Home })
    else if (to.meta.onlyAuth && !sessionStorage.getItem("token")) next({ name: Login })
    else next()
    if (to.meta.onlyWithoutAuth && sessionStorage.getItem("token-admin")) next({ name: Admin })
    else if (to.meta.onlyAuth && !sessionStorage.getItem("token-admin")) next({ name: OwnerLogin })
    else next()
})

export default router;