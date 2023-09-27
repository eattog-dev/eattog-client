<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { usePratosStore } from '../store/pratos'


const route = useRoute()





console.log(route.params.id_dish)
const pratosStore = usePratosStore();


const prato = computed(() => pratosStore.prato)
onMounted(() => pratosStore.getPrato(route.params.id_dish))

let quantity = ref(1)

let realPrice = ref(0);


if (prato.desconto) {
    realPrice = prato.valor_desconto
} else {
    realPrice = prato.valor
}

let totalValue = realPrice;
console.log(totalValue)

const add = () => {
    quantity.value++;
    document.querySelector(".subtract").removeAttribute("disabled");
    totalValue = realPrice * quantity.value;
    console.log(totalValue)
}

const subtract = () => {
    if (quantity.value <= 1) {
        document.querySelector(".subtract").setAttribute("disabled", "disabled");
    }
    else {
        quantity.value--;
        totalValue -= realPrice;
    }
}
</script>
<template>
    <section id="dish-detail">
        <el-row justify="center">
            <el-col span="14">
                <el-card class="dish">
                    <div style="align-items: center; display: flex;">
                        <img :src=prato.imagem alt="">
                    </div>
                    <div class="data-dish">
                        <div class="data-dish">
                            <div class="title-and-price">
                                <h2>{{ prato.nome }}</h2>
                                <div v-if="prato.isSale" class="sale-pricing">
                                    <span class="sale-price">{{ prato.valor }}</span>
                                    <span class="price">{{ prato.valor }}</span>
                                </div>
                                <span class="real-price">{{ prato.valor }}</span>
                            </div>
                            <p>{{ prato.igredientes }}</p>
                            <form action="">
                                <textarea name="obs" id="obs" cols="30" rows="10" placeholder="Observações"></textarea>
                                <div
                                    style="display: flex; justify-content: space-between; align-content: center; padding: 20px 0;">
                                    <div class="quantity">
                                        <button @click.prevent="add">+</button>
                                        <input type="number" v-model="quantity" />
                                        <button @click.prevent="subtract" class="subtract">-</button>
                                    </div>
                                    <div>
                                        <img class="cart" src="../assets/cart-shopping-solid.svg" alt="">
                                    </div>
                                </div>
                            </form>
                            <span class="total-value">Valor Total: R${{ prato.valor }}</span>
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
    padding: 20px 0;
    color: #000000;
}

#dish-detail .el-card__body {
    display: flex;
}

#dish-detail .data-dish {
    background-color: #fff;
    border-radius: 0 0 8px 8px;
    padding: 0 12px;
}

#dish-detail .el-card__body img {
    display: flex;
    place-items: center;
    height: 250px;
    width: 300px;
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
    color: #dbdad9;
    text-decoration: line-through;
    margin-left: 6px;
}

#dish-detail .data-dish textarea {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #dbdad9;
    font-size: 1rem;
}

#dish-detail .data-dish .quantity {
    display: flex;
    flex-direction: row;
}

.cart {
    width: 44px !important;
    height: 44px !important;
    object-fit: cover;
    border-radius: 8px !important;
    background-color: #ffe500;
    padding: 8px;
}

#dish-detail .data-dish .quantity input {
    color: #000000;
    margin: 0 8px;
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
    width: 44px;
    height: 44px;
}

#dish-detail input::-webkit-outer-spin-button,
#dish-detail input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

#dish-detail .data-dish button {
    padding: 16px;
    background-color: #ffe500;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    color: #ffffff;

}

.total-value {
    float: right;
    font-size: 1.1rem
}
</style>