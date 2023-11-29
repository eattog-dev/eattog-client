<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from "axios";


const props = defineProps({
    modalAberto: Boolean
});

import { usePedidoStore } from '../store/pedido'
import { useCarrinhoStore } from '../store/carrinho'

const pedidoStore = usePedidoStore();
const carrinhoStore = useCarrinhoStore();

const prato = computed(() => pedidoStore.prato)


const addCarrinho = async (prato_ID, quantidade, observacoes) => {
    await axios.post(`https://api.eattog.jera.com.br/carrinho-compra`, {
        "productId": prato_ID,
        "quantidade": quantidade,
        "descricao": observacoes
    }, {
        headers: {
            'Authorization': sessionStorage.getItem("token")
        }
    })
    // console.log({prato_ID, quantidade, observacoes})
    carrinhoStore.listarCarrinho()
    pedidoStore.statusModal();
}
</script>
<template>
    <div v-show="modalAberto" class="dish-detail">
        <!-- {{ prato }} -->
        <button @click="pedidoStore.statusModal()" class="closeModal">X</button>
        <div class="dish">
            <img :src=prato.imagem alt="">
            <div class="data-dish">
                <div class="title-and-price">
                    <h2>{{ prato.nome }}</h2>
                    <div v-if="prato.desconto" class="sale-pricing">
                        <span class="real-price">R$ {{ prato.valor_desconto }}</span>
                        <span class="price">R$ {{ prato.valor }}</span>
                    </div>
                    <span v-else class="real-price">R$ {{ prato.valor }}</span>
                </div>
                <p>{{ prato.descricao }}</p>
                <form action="">
                    <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observações"
                        v-model="pedidoStore.observacoes"></textarea>
                    <div style="display: flex; justify-content: space-between; align-content: center; align-items: center;">
                        <div class="quantity">
                            <button @click.prevent="pedidoStore.somar()">+</button>
                            <input type="number" v-model="pedidoStore.quantidade" />
                            <button @click.prevent="pedidoStore.subtrair()" class="subtract">-</button>
                        </div>
                        <button class="add-carrinho"
                            @click.prevent="addCarrinho(prato.id, pedidoStore.quantidade, pedidoStore.observacoes)">
                            <img class="cart" src="../assets/cart-shopping-solid.svg" alt="">
                            Total: R${{ pedidoStore.valorTotal }}
                        </button>
                    </div>
                </form>
            </div>
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
    z-index: 9999999999;
    border-radius: 0.25rem;
}

.dish-detail .closeModal {
    display: block;
    margin: 0.5rem 0.5rem 0 auto;
    border: none;
    background-color: transparent;
    font-weight: bolder;
    font-size: 20px;
}

.dish-detail .dish {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    justify-content: space-around;
}

.dish-detail .data-dish {
    border-radius: 0 0 0.5rem 0.5rem;
    align-content: center;
    display: grid;
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

.dish-detail .data-dish .quantity,
.add-carrinho {
    margin: 0 0.25rem;
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

@media(max-width: 768px) {
    .dish-detail {
        width: 20rem;
        left: calc(50% - 10rem);
    }

    .dish-detail img {
        display: none
    }
}
</style>