<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, computed, onMounted } from 'vue'

import Title from '../components/Title.vue';
import Dish from '../components/Dish.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

import { useSingleCategoriaStore } from '../store/single-categoria'

const route = useRoute();

const singleCategoriaStore = useSingleCategoriaStore();

const listaPratos = computed(() => singleCategoriaStore.listaPratos);

onMounted(() => singleCategoriaStore.carregarPratos(route.params.id));

const quantidade = ref(1)
const selecionouPrato = ref(false);
const pratoSelecionado = ref({});

let valorTotal = ref(0);
let valorPrato = ref(0);

const exibePratoClicado = (dish) => {
    selecionouPrato.value = true;
    pratoSelecionado.value = dish;

    if (pratoSelecionado.value.desconto)
        valorPrato.value = pratoSelecionado.value.valor_desconto
    else
        valorPrato.value = pratoSelecionado.value.valor

    valorTotal.value = valorPrato.value

    return quantidade.value = 1

}

const somar = () => {
    quantidade.value++
    return valorTotal.value = valorPrato.value * quantidade.value
}
const subtrair = () => {
    if (quantidade.value > 1)
        quantidade.value--

    return valorTotal.value = valorPrato.value * quantidade.value
}

</script>
<template>
    <Navbar logo="../assets/logo.svg" alt="Logo" />
    <section id="list-dishes">
        <el-row justify="center">
            <el-col :span=20>
                <Title :text=route.params.nome></Title>
                <el-row :gutter=20>
                    <Dish v-for="prato in listaPratos" :dish="prato" @pratoClicado="exibePratoClicado"/>
                </el-row>
            </el-col>
        </el-row>
    </section>

    <el-dialog v-model="selecionouPrato" class="dish-detail">
        <img :src=pratoSelecionado.imagem alt="">
        <div class="data-dish">
            <div class="title-and-price">
                <h2>{{ pratoSelecionado.nome }}</h2>
                <div v-if="pratoSelecionado.desconto" class="sale-pricing">
                    <span class="real-price">R$ {{ pratoSelecionado.valor_desconto }}</span>
                    <span class="price">R$ {{ pratoSelecionado.valor }}</span>
                </div>
                <span v-else class="real-price">{{ pratoSelecionado.valor }}</span>
            </div>
            <p>{{ pratoSelecionado.descricao }}</p>
            <form action="">
                <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observações"></textarea>
                <div style="display: flex; justify-content: space-between; align-content: center; align-items: center;">
                    <div class="quantity">
                        <button @click.prevent="somar()">+</button>
                        <input type="number" v-model="quantidade" />
                        <button @click.prevent="subtrair()" class="subtract">-</button>
                    </div>
                    <button class="add-carrinho">
                        <img class="cart" src="../assets/cart-shopping-solid.svg" alt=""> Total: R${{ valorTotal }}
                    </button>
                </div>
            </form>
        </div>
    </el-dialog>
    <Footer></Footer>
</template>