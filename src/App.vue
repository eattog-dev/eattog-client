<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { usePerfilStore } from './store/perfil'

const perfilStore =  usePerfilStore();

perfilStore.loggedUser();

</script>

<template>
    <router-view ></router-view>
    <div style="padding-bottom:5rem!important"></div>
    <Footer/>
</template>

<style scoped></style>