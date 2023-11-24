<script setup>
import { ref, computed, onMounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router';

import Carousel from '../components/Carousel.vue';
import Dish from '../components/DishHome.vue';
import Title from '../components/Title.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import SelectedDish from '../components/SelectedDish.vue';

import { useHomeStore } from '../store/home'
import { usePedidoStore } from '../store/pedido'


const router = useRouter();

const homeStore = useHomeStore();
const pedidoStore = usePedidoStore();

const pratos = computed(() => homeStore.pratos)
onMounted(() => {
    homeStore.listarPratos();
    //homeStore.loggedUser();
})


const exibePratoClicado = (dish) => {
    if (!sessionStorage.getItem("token")) {
        router.push("/login");
        return;
    }
    pedidoStore.statusModal()
    pedidoStore.pratao(dish)
}
</script>
<template>
    <Navbar logo="../assets/logo.svg" alt="Logo" />
    <Carousel />
    <section id="list-dishes">
        <el-row justify="center">
            <el-col :span="20">
                <Title text="Mais pedidos"></Title>
                <el-row :gutter="20">
                    <Dish v-for="prato in pratos" :dish="prato" @pratoClicado="exibePratoClicado" />
                </el-row>
            </el-col>
        </el-row>
    </section>
    <SelectedDish :modalAberto="pedidoStore.modal" />
    <Footer></Footer>
</template>      
