<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
import {useSingleRestauranteStore} from '../store/single-restaurante'

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
    height: 320px;
    background-size: cover !important;
    background-position-y: center !important;
}

#banner .bg-gradient {
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 66%);
}

#banner .data {
    display: grid;
    align-content: end;
    padding-bottom: 32px
}

#banner .data h1 {
    font-size: 36px;
}

#banner .data p {
    font-size: 20px;
    color: #ffffff;
}

#banner .data img {
    height: 80px;
    width: 80px;
    border-radius: 8px;
    object-fit: contain;
}
#banner h1 {
    color: white;
}
#banner .el-rate{
    height: unset!important;
}
</style>