<script setup>
import Title from '../components/Title.vue';
import Filtro from '../components/Filter.vue'

import { ref, computed, onMounted } from 'vue'

import { useSingleRestauranteStore } from '../store/single-restaurante'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()

const singleRestauranteStore = useSingleRestauranteStore();
const cardapio = computed(() => singleRestauranteStore.cardapio);
const pagina = computed(() => singleRestauranteStore.pagina)

onMounted(() => {
    singleRestauranteStore.listarCardapio(route.params.id)
    singleRestauranteStore.qtdPratos
})

const value = ref('Selecione');


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
    <section class="menu">

        <el-row justify="center">
            <el-col class="title-and-filter" :span=20>
                <Title text="Cardápio"></Title>
                <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                    <el-option label="Mais Caro" value="Mais Caro" @click="singleRestauranteStore.ordenarMaisCaro()" />
                    <el-option label="Mais Barato" value="Mais Barato"
                        @click="singleRestauranteStore.ordenarMaisBarato()" />
                    <el-option label="Ordem Alfabética" value="Ordem Alfabética"
                        @click="singleRestauranteStore.ordenarAlfbeto()" />
                </el-select>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col :span="20">
                <el-row :gutter=10 justify="start">
                    <el-col v-for="dish in cardapio" :xs="24" :sm="12" :md="12" :lg=12 :span="12" @click="exibePratoClicado(dish)">
                        <div class="grid-content dish">
                            <img :src="dish.imagem" alt="">
                            <div class="info">
                                <div>
                                    <h3>{{ dish.nome }}</h3>
                                    <span v-if="dish.desconto">R$ {{ dish.valor_desconto }}</span>
                                    <span>R${{ dish.valor }}</span>
                                </div>
                                <p>{{ dish.descricao }}</p>
                            </div>
                        </div>
                    </el-col> 
                </el-row>
            </el-col>
        </el-row>
        <el-row justify="center" class="paginacao">
            <button @click="singleRestauranteStore.voltarPagina()">Anterior</button>
            <span>{{ pagina }}</span>
            <button @click="singleRestauranteStore.passarPagina()">Próximo</button>
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
<style scoped>
 .paginacao span {
    margin: 0 1rem !important;
}
    .menu .el-col {
        margin: 6px 0;
        /* height: 360px; */
    }

    .menu .el-row,
    .menu .grid-content {
        text-align: unset !important;
    }

    .menu a {
        text-decoration: none;
    }

    .menu .title-and-filter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .menu .grid-content {
        display: flex;
        padding: 12px;
    }

    .menu .dish .info {
        width: 100%;
        padding-left: 8px;

    }

    .menu .dish img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 4px;
    }

    .menu .dish .info div {
        display: flex;
        justify-content: space-between;
    }

    .menu .grid-content {
        text-align: center;
        background-color: var(--white100);
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        border: 1px solid var(--white300);
        color: var(--gray800);
        text-decoration: none !important;
        ;
    }
</style>
