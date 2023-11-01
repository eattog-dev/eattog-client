<script setup>
    import { computed, onMounted, ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    import Dish from '../components/Dish.vue'
    import Title from '../components/Title.vue'
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'

    import { usePratosStore } from '../store/pratos'

    const router = useRouter()

    const pratosStore = usePratosStore();

    const todosPratos = computed(() => pratosStore.todosPratos)

    const quantidade = ref(1)
    const selecionouPrato = ref(false);
    const pratoSelecionado = ref({});

    let valorTotal = ref(0);
    let valorPrato = ref(0);

    onMounted(() => pratosStore.listarPratosPorCategoria())

    const irPraCategoria = (id, nome) => router.push(`/categorias/${id}/${nome}`)

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
    <Navbar logo="../assets/logo.svg" alt="Logo"></Navbar>
    <section id="list-dishes" v-for="sessao in todosPratos">
        <el-row justify="center" v-if="!sessao.categoria_prato.length == false">
            <el-col :span=20>
                <Title :text="sessao.categoria" style="text-transform: capitalize;"/>
                <el-row :gutter=12>
                    <Dish v-for="prato in sessao.categoria_prato" :dish="prato" @pratoClicado="exibePratoClicado" />
                </el-row>
                <span @click="irPraCategoria(sessao.id, sessao.categoria)"
                    style="float: right; cursor: pointer; padding: 0 6px;">Ver mais pratos</span>
            </el-col>
        </el-row>
    </section>

    <el-dialog v-model="selecionouPrato" class="dish-detail">
        <img :src=pratoSelecionado.imagem alt="">
        <div class="data-dish">
            <div class="title-and-price">
                <h2>{{ pratoSelecionado.nome }}</h2>
                <div v-if="pratoSelecionado.desconto" class="sale-pricing">
                    <span class="sale-price">R$ {{ pratoSelecionado.valor_desconto }}</span>
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

<style>
    .dish-detail {
        color: var(--black100);
        width: 46rem;
        /* position: fixed;
        bottom: 1rem;
        margin: unset;
        left: calc(50% - 23rem); 
        box-shadow: 0.125rem 0.125rem 0.125rem 0.063rem rgba(0, 0, 0, 0.5) */
    }
    .dish-detail .el-overlay{
        position: unset;
        background-color: unset
    }
    .dish-detail .el-dialog__body {
        display: flex;
        flex-direction: row;
        padding: 1rem;
    }

    .dish-detail .el-dialog__header, .dish-detail .el-dialog__headerbtn {
        display: none;
    }

    .dish-detail .data-dish {
        background-color: var(--white100);
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
        border: 0.063rem solid  var(--gray200);
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
    .add-carrinho{
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