<template>
    <Navbar/>
    <div class="not-found">
        <h1>Ops, Página não encontrada 🙈</h1>
        <span @click="backToHome">Voltar pra Home</span>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';

import Footer from '../components/Footer.vue';

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const backToHome = () => router.push("/inicio")
</script>
<style scoped>
h1, span{
    color: var(--black100);
}
span{
    cursor: pointer;
    color: var(--yellow400);
    font-weight: bolder;
}
.not-found{
    padding: 3rem;
}
</style>