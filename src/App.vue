<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { usePerfilStore } from './store/perfil'
import { useRouter, useRoute } from 'vue-router'

const perfilStore =  usePerfilStore();
const route = useRoute()

perfilStore.loggedUser();
const isAdminView = route.path.startsWith('/admin');
const isAdminConsoleView = route.path.startsWith('/adminconsole');
const isLoginView = route.path.startsWith('/login');
const isCadastroView = route.path.startsWith('/cadastro');
const isCadastroProprietarioView = route.path.startsWith('/cadastro/proprietario');
const isLoginProprietarioView = route.path.startsWith('/login/proprietario');

</script>

<template>
    <router-view ></router-view>
    <div style="padding-bottom:5rem!important"></div>
    <Footer v-if="isAdminView && isAdminConsoleView && isLoginProprietarioView && isCadastroProprietarioView && isCadastroView && isLoginView" />
</template>

<style scoped></style>
