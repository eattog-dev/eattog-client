<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    pratoSelecionado: {
        imagem: String,
        nome: String,
        valor: Number,
        desconto: Boolean,
        valor_desconto: Number,
        descricao: String
    },
    modalAberto: Boolean
});

import {usePedidoStore} from '../store/pedido'

const pedidoStore = usePedidoStore();

// const quantidade = computed(() => )

let valorPrato = ref(0);
let valorTotal = computed(() => usePedidoStore.valorTotal)

if (props.pratoSelecionado.desconto)
    valorPrato = props.pratoSelecionado.valor_desconto
else
    valorPrato = props.pratoSelecionado.valor

valorTotal = valorPrato


let prato = computed (() => usePedidoStore.prato )

prato = props.pratoSelecionado




</script>
<template>
    <div v-show="modalAberto" class="dish-detail">
        <img :src=pratoSelecionado.imagem alt="">
        <div class="data-dish">
            {{ prato }}
            <button @click="modalAberto = false">X</button>
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
                        <button @click.prevent="pedidoStore.somar()">+</button>
                        <input type="number" v-model="pedidoStore.quantidade" />
                        <button @click.prevent="pedidoStore.subtrair()" class="subtract">-</button>
                    </div>
                    <button class="add-carrinho">
                        <img class="cart" src="../assets/cart-shopping-solid.svg" alt=""> Total: R${{ valorTotal }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.dish-detail {
    color: var(--black100);
    width: 46rem;
    position: fixed;
    bottom: 1rem;
    margin: auto;
    left: calc(50% - 23rem);
    background-color: var(--white100);
}

.dish-detail {
    display: flex;
    flex-direction: row;
    padding: 1rem;
}
.dish-detail .data-dish {
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 0 1.5rem;
}

.dish-detail img {
    display: flex;
    margin: auto 0;
    height: 15.625rem;
    width: 18.75rem;
    object-fit: cover;
}

.dish-detail .data-dish .title-and-price {
    display: flex;
    justify-content: space-between;
}

.dish-detail .data-dish .title-and-price .sale-pricing .sale-price,
.dish-detail .data-dish .title-and-price .real-price {
    font-size: 1.5rem;
}

.dish-detail .data-dish .title-and-price .sale-pricing .price {
    font-size: 1rem;
    color: var(--gray200);
    text-decoration: line-through;
    margin-left: 0.375rem;
}

.dish-detail .data-dish textarea {
    width: 100%;
    border-radius: 0.25rem;
    border: 0.063rem solid var(--gray200);
    font-size: 1rem;
    height: 5rem;
    margin: 0.5rem 0;
}

.dish-detail .data-dish .quantity {
    display: flex;
    flex-direction: row;
}

.cart {
    width: 2.75rem !important;
    height: 2.75rem !important;
    object-fit: cover;
    border-radius: 0.5rem !important;
    background-color: var(--yellow100);
    padding: 0.5rem;
}

.dish-detail .data-dish .quantity input {
    color: var(--black100);
    margin: 0 0.5rem;
    text-align: center;
}

.dish-detail .data-dish .quantity button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bolder;
}

.dish-detail .data-dish .quantity input,
.dish-detail .data-dish .quantity button {
    width: 2.75rem;
    height: 2.75rem;
}

.dish-detail input::-webkit-outer-spin-button,
.dish-detail input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.dish-detail .quantity button {
    padding: 1rem;
    background-color: var(--yellow100);
    border: none;
    border-radius: .5rem;
    text-transform: uppercase;
    color: var(--white100);
}

.add-carrinho {
    flex-direction: row;
    display: flex;
    align-items: center;
    background-color: var(--yellow100);
    border: none;
    border-radius: .5rem;
    text-transform: uppercase;
    color: var(--white100);
    padding: 0.25rem 0.5rem;
}

.total-value {
    float: right;
    font-size: 1.1rem
}
</style>