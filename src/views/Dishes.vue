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
                    style="display: flex; justify-content: center; cursor: pointer; justify-content: center; padding: 0px; margin: 5rem 0 0 0; ">Ver mais pratos</span>
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
  
</style>