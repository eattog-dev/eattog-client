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
     carrinhoStore.listarCarrinho()
     
   pedidoStore.statusModal();
    // console.log({prato_ID, quantidade, observacoes})
   
}
</script>
<template>
    <div v-show="pedidoStore.modal" class="dish-detail">

        <el-icon @click="pedidoStore.statusModal()" class="closeModal">
            <Close />
        </el-icon>
        <div class="dish">
            <img :src=prato.imagem alt="">
            <div class="data-dish">
                <div class="title-and-price">
                    <h2>{{ prato.nome }}</h2>
                    <div v-if="prato.desconto" class="sale-pricing">
                        <span class="real-price">R${{ prato.valor_desconto }}</span>
                        <span class="price">R${{ prato.valor }}</span>
                    </div>
                    <span v-else class="real-price">R${{ prato.valor }}</span>
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

                        <span class="total">
                            Total: R${{ pedidoStore.valorTotal }}
                        </span>
                    </div>
                </form>
            </div>

        </div>
        <button class="add-carrinho"
            @click.prevent="addCarrinho(prato.id, pedidoStore.quantidade, pedidoStore.observacoes)">
            Adicionar
        </button>
    </div>
</template>

<style scoped>
h2{
    width: 75%;
    line-height: 1;
    margin-bottom: 0.5rem;
}
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
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    padding: 1rem;
}

.dish-detail .closeModal {
    display: block;
    margin: 0.5rem 0.5rem 0 auto;
    font-size: 25px;
    cursor: pointer
}

.dish-detail .dish {
    display: flex;
    flex-direction: row;
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
    border-radius: 0.25rem;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);

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
    border: 0.063rem solid var(--yellow100);
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
    border: 1px solid var(--yellow100);
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
    border-radius: .25rem;
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
    text-transform: uppercase;
    color: var(--white100);
}

.add-carrinho {
    display: flex;
    background-color: var(--yellow100);
    border: none;
    border-radius: .25rem;
    text-transform: uppercase;
    color: var(--white100);
    padding: 0.5rem 0.5rem;
    margin: 0.5rem 0.25rem 0.25rem auto;
    cursor: pointer;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);

}

.total{
    font-size: 1.5em;
}

@media(max-width: 768px) {
    .dish-detail {
        width: 20rem;
        left: calc(50% - 10rem);
    }

    .dish-detail img {
        display: none
    }
}</style>