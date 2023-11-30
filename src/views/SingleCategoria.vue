<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, computed, onMounted } from 'vue'

import Title from '../components/Title.vue';
import Dish from '../components/Dish.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

import SelectedDish from '../components/SelectedDish.vue'

import { usePedidoStore } from '../store/pedido'
import { useSingleCategoriaStore } from '../store/single-categoria'

const route = useRoute();
const router = useRouter();

const singleCategoriaStore = useSingleCategoriaStore();

const listaPratos = computed(() => singleCategoriaStore.listaPratos);

onMounted(() => singleCategoriaStore.carregarPratos(route.params.id));

const selecionouPrato = ref(false);


const pedidoStore = usePedidoStore();

const exibePratoClicado = (dish) => {

    if (!sessionStorage.getItem("token")) {
        router.push("/login");
        return;
    }
    selecionouPrato.value = true;
    pedidoStore.pratao(dish)
}

</script>
<template>
    <Navbar logo="../assets/logo.svg" alt="Logo" />
        <el-row justify="center">
            <el-col :span=20 class="sessao">
                <Title :text=route.params.nome></Title>
                <el-row :gutter=20>
                    <Dish v-for="prato in listaPratos" :dish="prato" @pratoClicado="exibePratoClicado" />
                </el-row>
            </el-col>
        </el-row>

    <SelectedDish :modalAberto="selecionouPrato" />
</template>

<style scoped>
.el-row, .el-col{
    height: 100%;
}
.sessao {
    padding: 1.5rem 0;
}
</style>