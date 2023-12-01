<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import Dish from '../components/Dish.vue'
import Title from '../components/Title.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import SelectedDish from '../components/SelectedDish.vue'

import { usePratosStore } from '../store/pratos'
import { usePedidoStore } from '../store/pedido'

const router = useRouter()

const pratosStore = usePratosStore();
const pedidoStore = usePedidoStore();

const todosPratos = computed(() => pratosStore.todosPratos)




onMounted(() => pratosStore.listarPratosPorCategoria())

const irPraCategoria = (id, nome) => router.push(`/categorias/${id}/${nome}`)

const exibePratoClicado = (dish) => {
    if (!sessionStorage.getItem("token")) {
        router.push("/login");
        return;
    }

    pedidoStore.pratao(dish)
}
console.log(window.innerHeight)
</script>
<template>
    <Navbar logo="../assets/logo.svg" alt="Logo"></Navbar>

    <el-row v-for="sessao in todosPratos" justify="center">
        <el-col :span=20 class="categoria" v-if="!sessao.categoria_prato.length == false">
            <Title :text="sessao.categoria" style="text-transform: capitalize;" />

            <el-row :gutter=12>
                <Dish v-for="prato in sessao.categoria_prato" :dish="prato" @pratoClicado="exibePratoClicado" />
            </el-row>
            <span @click="irPraCategoria(sessao.id, sessao.categoria)" class="mais-categorias">Ver
                mais pratos</span>
        </el-col>
    </el-row>

    <SelectedDish />
</template>

<style scoped>
.el-row,
.el-col {
    height: 100%;
}

.categoria {
    padding: 1.5rem 0;
}

.mais-categorias {
    display: flex;
    cursor: pointer;
    margin: 1.5rem 0 0 auto;
    width: fit-content;
}
</style>