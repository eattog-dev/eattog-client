<script setup>
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import Dish from '../components/Dish.vue'
import Title from '../components/Title.vue'

import { usePratosStore } from '../store/pratos'

const router = useRouter()

const pratosStore = usePratosStore();
const todosPratos = computed(() => pratosStore.todosPratos)

onMounted(() => pratosStore.listarPratosPorCategoria())

const irPraCategoria = (id, nome) => router.push(`/categorias/${id}/${nome}`)

// const pratos = ref([
//     {
//         id: 1,
//         image: pacu,
//         title: 'Pacu Assado',
//         ingredients: 'Pacu, temperos, ervas',
//         time: 35,
//         tag: tagsAlimentos[0],
//         price: 25,
//         isSale: false,
//         sale_price: 22
//     },
//     {
//         id: 2,
//         image: lanche,
//         title: 'Lanche',
//         ingredients: 'Pão, carne, queijo, alface, tomate',
//         time: 10,
//         tag: tagsAlimentos[1],
//         price: 30,
//         isSale: true,
//         sale_price: 25
//     },
//     {
//         id: 3,
//         image: soba,
//         title: 'Sobá Pantaneiro',
//         ingredients: 'Macarrão, carne de porco, cebola, verduras',
//         time: 30,
//         tag: tagsAlimentos[1],
//         price: 21,
//         isSale: true,
//         sale_price: 20
//     },
//     {
//         id: 4,
//         image: pintado,
//         title: 'Pintado na Telha',
//         ingredients: 'Pintado, temperos, legumes',
//         time: 45,
//         tag: tagsAlimentos[0],
//         price: 40,
//         isSale: true,
//         sale_price: 33
//     },
//     {
//         id: 5,
//         image: feijao_tropeiro,
//         title: 'Feijão Tropeiro',
//         ingredients: 'Feijão, linguiça, torresmo, ovos, farinha de mandioca',
//         time: 35,
//         tag: tagsAlimentos[0],
//         price: 30,
//         isSale: true,
//         sale_price: 25

//     },
//     {
//         id: 9,
//         image: lanche,
//         title: 'Lanche Pantaneiro',
//         ingredients: 'Pão, carne, temperos, queijo',
//         time: 25,
//         tag: tagsAlimentos[1],
//         price: 18,
//         isSale: true,
//         sale_price: 15
//     },
//     {
//         id: 8,
//         image: moqueca,
//         title: 'Moqueca Pantaneira',
//         ingredients: 'Peixe, temperos, verduras',
//         time: 30,
//         tag: tagsAlimentos[1],
//         price: 12,
//         isSale: false,
//         sale_price: 0
//     },
//     {
//         id: 10,
//         image: salada,
//         title: 'Salada',
//         ingredients: 'Verduras, frutas, castanhas, molho especial',
//         time: 15,
//         tag: tagsAlimentos[0],
//         price: 10,
//         isSale: false,
//         sale_price: 0
//     },
// ]);
</script>
<template>
    <section id="list-dishes">
        <el-row v-for="sessao in todosPratos" justify="center">
            <el-col :span=20>
                <Title :text="sessao.categoria" />
                <el-row :gutter=12>
                    <Dish v-for="prato in sessao.categoria_prato" :dish="prato" />
                </el-row>
                <span @click="irPraCategoria(sessao.id, sessao.categoria)" style="float: right; cursor: pointer; padding: 0 6px;">Ver mais pratos</span>
            </el-col>
        </el-row>
    </section>
</template>