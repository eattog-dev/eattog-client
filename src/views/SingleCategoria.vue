<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, computed, onMounted } from 'vue'

import Title from '../components/Title.vue';
import Dish from '../components/Dish.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

import { useSingleCategoriaStore } from '../store/single-categoria'

const route = useRoute();
const router = useRouter();

const singleCategoriaStore = useSingleCategoriaStore();

const listaPratos = computed(() => singleCategoriaStore.listaPratos);

onMounted(() => singleCategoriaStore.carregarPratos(route.params.id));

const quantidade = ref(1)
const selecionouPrato = ref(false);
const pratoSelecionado = ref({});

let valorTotal = ref(0);
let valorPrato = ref(0);

import SelectedDish from '../components/SelectedDish.vue'

import { usePedidoStore } from '../store/pedido'

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
    <section id="list-dishes">
        <el-row justify="center">
            <el-col :span=20>
                <Title :text=route.params.nome></Title>
                <el-row :gutter=20>
                    <Dish v-for="prato in listaPratos" :dish="prato" @pratoClicado="exibePratoClicado" />
                </el-row>
            </el-col>
        </el-row>
    </section>

    <SelectedDish :modalAberto="selecionouPrato" />
</template>