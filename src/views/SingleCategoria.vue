<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, computed, onMounted } from 'vue'

import Title from '../components/Title.vue';
import Dish from '../components/Dish.vue'

import { useSingleCategoriaStore } from '../store/single-categoria'

const route = useRoute();

const singleCategoriaStore = useSingleCategoriaStore();

const listaPratos = computed(() => singleCategoriaStore.listaPratos);

onMounted(() => singleCategoriaStore.carregarPratos(route.params.id));
</script>
<template>
    <section id="list-dishes">
        <el-row justify="center">
            <el-col :span=20>
                <Title :text=route.params.nome></Title>

                <el-row>
                    <Dish v-for="prato in listaPratos" :dish="prato" />
                </el-row>
            </el-col>
        </el-row>
    </section>
</template>