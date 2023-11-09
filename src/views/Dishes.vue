<script setup>
    import { computed, onMounted, ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    import Dish from '../components/Dish.vue'
    import Title from '../components/Title.vue'
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    import SelectedDish from '../components/SelectedDish.vue'

    import { usePratosStore } from '../store/pratos'
    import { usePedidoStore } from '../store/pedido'

    const router = useRouter()

    const pratosStore = usePratosStore();
    const pedidoStore = usePedidoStore();

    const todosPratos = computed(() => pratosStore.todosPratos)

    const selecionouPrato = ref(false);


    onMounted(() => pratosStore.listarPratosPorCategoria())

    const irPraCategoria = (id, nome) => router.push(`/categorias/${id}/${nome}`)

    const exibePratoClicado = (dish) => {
        if(!sessionStorage.getItem("token")) {
            router.push("/login");
            return;
        }
        selecionouPrato.value = true;
        pedidoStore.pratao(dish)
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
                    style="display: flex; justify-content: end; cursor: pointer; padding: 0px; margin: 5rem 0 0 0; ">Ver mais pratos</span>
            </el-col>
        </el-row>
    </section>

    <SelectedDish :modalAberto="selecionouPrato"/>
    <Footer></Footer>
</template>

<style>
  
</style>