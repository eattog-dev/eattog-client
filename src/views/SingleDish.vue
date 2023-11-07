<template>
    <Navbar logo="/assets/logo.svg" alt="Logo" />
    <div>
        flamengo
    </div>
    <Footer></Footer>
</template>

<script setup>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
</script>

<!-- <script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useSinglPratoStore } from '../store/single-prato'

const route = useRoute();

const singlePratoStore = useSinglPratoStore();

console.log(route.params.id_dish)

const prato = computed(() => singlePratoStore.prato);
const valorTotal = computed (() => singlePratoStore.valorTotal)

onMounted(() =>  {
    singlePratoStore.carregarPrato(route.params.id_dish);
})

</script>
<template>
    <section id="dish-detail">
        <el-row justify="center">
            <el-col :span="14">
                <el-card class="dish">
                    <div style="align-items: center; display: flex;">
                        <img :src=prato.imagem alt="">
                    </div>
                    <div class="data-dish">
                        <div class="data-dish">
                            <div class="title-and-price">
                                <h2>{{ prato.nome }}</h2>
                                <div v-if="prato.desconto" class="sale-pricing">
                                    <span class="sale-price">R$ {{ prato.valor_desconto }}</span>
                                    <span class="price">R$ {{ prato.valor }}</span>
                                </div>
                                <span v-else class="real-price">{{ prato.valor }}</span>
                            </div>
                            <p>{{ prato.descricao }}</p>
                            <form action="">
                                <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observações"></textarea>
                                <div
                                    style="display: flex; justify-content: space-between; align-content: center; padding: 1.25rem 0;">
                                    <div class="quantity">
                                        <button @click.prevent="singlePratoStore.somar()">+</button>
                                        <input type="number" v-model="singlePratoStore.quantidade" />
                                        <button @click.prevent="singlePratoStore.subtrair()" class="subtract">-</button>
                                    </div>
                                    <div>
                                        <img class="cart" src="../assets/cart-shopping-solid.svg" alt="">
                                    </div>
                                </div>
                            </form>
                            <span class="total-value">Valor Total: R${{ valorTotal }}</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </section>
</template>
<style>
.el-row,
.el-col {
    text-align: unset !important;
}

#dish-detail {
    padding: 1.25rem 0;
    color: var(--black100);
}

#dish-detail .el-card__body {
    display: flex;
}

#dish-detail .data-dish {
    background-color: var(--white100);
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 0 0.75rem;
}

#dish-detail .el-card__body img {
    display: flex;
    place-items: center;
    height: 15.625rem;
    width: 18.75rem;
    object-fit: cover;
}

#dish-detail .data-dish .title-and-price {
    display: flex;
    justify-content: space-between;
}

#dish-detail .data-dish .title-and-price .sale-pricing .sale-price,
#dish-detail .data-dish .title-and-price .real-price {
    font-size: 1.5rem;
}

#dish-detail .data-dish .title-and-price .sale-pricing .price {
    font-size: 1rem;
    color:  var(--gray200);
    text-decoration: line-through;
    margin-left: 0.375rem;
}

#dish-detail .data-dish textarea {
    width: 100%;
    border-radius: 0.25rem;
    border: 0.063rem solid  var(--gray200);
    font-size: 1rem;
}

#dish-detail .data-dish .quantity {
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

#dish-detail .data-dish .quantity input {
    color: var(--black100);
    margin: 0 0.5rem;
    text-align: center;
}

#dish-detail .data-dish .quantity button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bolder;
}

#dish-detail .data-dish .quantity input,
#dish-detail .data-dish .quantity button {
    width: 2.75rem;
    height: 2.75rem;
}

#dish-detail input::-webkit-outer-spin-button,
#dish-detail input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

#dish-detail .data-dish button {
    padding: 1rem;
    background-color: var(--yellow100);
    border: none;
    border-radius: 0.5rem;
    text-transform: uppercase;
    color: var(--white100);

}

.total-value {
    float: right;
    font-size: 1.1rem
}
</style> -->