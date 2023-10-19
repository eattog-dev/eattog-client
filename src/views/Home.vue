<script setup>
import { ref, computed, onMounted , reactive} from 'vue'

import Carousel from '../components/Carousel.vue';
import Dish from '../components/DishHome.vue';
import Title from '../components/Title.vue';

import { useHomeStore } from '../store/home'
const homeStore = useHomeStore();

const pratos = computed(() => homeStore.pratos)

onMounted(() => homeStore.listarPratos())

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
    <Carousel />
    <section id="list-dishes">
        <el-row justify="center">
            <el-col :span="20">
                <Title text="Mais pedidos"></Title>
                <el-row :gutter=20>
                    <Dish v-for="prato in pratos" :dish="prato" @pratoClicado="exibePratoClicado"/>
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
</template>      