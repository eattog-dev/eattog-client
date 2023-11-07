<script setup>
    import { useRouter, useRoute } from 'vue-router'
    import { ref, computed, onMounted } from 'vue'
    import {useSingleRestauranteStore} from '../store/single-restaurante'

    const route = useRoute()
    const singleRestaurante = useSingleRestauranteStore();
    const banner = computed (()=> singleRestaurante.banner);

    onMounted(()=> singleRestaurante.carregarBanner(route.params.id))
</script>

<template>
    <section id="banner" :style="{ background: 'url(' + banner.imagem + ')' }">
        <el-row justify="center" class="bg-gradient">
            <el-col class="data" :span=20>
                <div style="display: flex">
                    <img :src=banner.logo alt="">
                    <div style="padding-left: 12px;">
                        <h1>{{ banner.titulo }}</h1>
                        <el-rate disabled v-model="banner.avaliacao" />
                    </div>
                </div>
                <p>{{ banner.descricao }}</p>
            </el-col>
        </el-row>
    </section>
</template>

<style>
    #banner .el-row,
    #banner .grid-content {
        text-align: unset !important;
    }

    #banner {
        height: 20rem;
        background-size: cover !important;
        background-position-y: center !important;
    }

    #banner .bg-gradient {
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 66%);
    }

    #banner .data {
        display: grid;
        align-content: end;
        padding-bottom: 2rem;
    }

    #banner .data h1 {
        font-size: 2.25rem;
    }
    #banner .data p {
        font-size: 1.25rem;
        color: var(--white100);
    }

    #banner .data img {
        height: 5rem;
        width: 5rem;
        border-radius: 0.5rem;
        object-fit: contain;
    }

    #banner h1 {
        color: var(--white100);
    }
    #banner .el-rate{
        height: unset!important;
    }
</style>