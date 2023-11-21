<script setup>
//import axios from "axios";

import { usePerfilStore } from './store/perfil'

const perfilStore =  usePerfilStore();

perfilStore.loggedUser();

</script>

<template>
    <router-view></router-view>
</template>

<style scoped></style>