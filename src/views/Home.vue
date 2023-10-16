<script setup>
import { ref, computed, onMounted } from 'vue'

import Carousel from '../components/Carousel.vue';
import Dish from '../components/DishHome.vue';
import Title from '../components/Title.vue';

import { useHomeStore } from '../store/home'

const homeStore = useHomeStore();

const pratos = computed(() => homeStore.pratos)

onMounted(() => homeStore.listarPratos())
</script>
<template>
    <Carousel />
    <section id="list-dishes">
        <el-row justify="center">
            <el-col :span="20">
                <Title text="Mais pedidos"></Title>
                <el-row :gutter=20>
                    <Dish v-for="prato in pratos" :dish="prato" />
                </el-row>
            </el-col>
        </el-row>
    </section>
</template>      