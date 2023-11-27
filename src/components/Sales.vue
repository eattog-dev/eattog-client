<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Title from './Title.vue';
import { Autoplay } from 'swiper/modules';
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { useSingleRestauranteStore } from '../store/single-restaurante'

const modulo = [Autoplay];

const route = useRoute()

const singleRestaurante = useSingleRestauranteStore();

onMounted(() => singleRestaurante.listarDescontos(route.params.id))

const emits = defineEmits('pratoClicado');

const handlePratoClicado = (prato) => {
    emits('pratoClicado', prato)
}

const formatarIgredientes = (listaIngredientes) => {
    let lista = ""
    listaIngredientes.forEach((ingrediente, i) => {
        console.log(i)
        if (i == listaIngredientes.length - 1)
            lista += `${ingrediente}.`
        else
            lista += `${ingrediente}, `
    });

    return lista
}
</script>

<template>
    <section id="sales" v-if="!singleRestaurante.filtroDesconto.length == false">
        <el-row justify="center">
            <el-col :span="20">
                <Title text="Promoções"></Title>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col class="col" :span="20">
                <el-row :gutter=10>
                    <el-col :span="24">
                        <Swiper loop=true :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }" :pagination="{
    clickable: true,
}" :navigation="true" :slides-per-view="3.3" :modules="modulo" space-between="30">
                            <SwiperSlide v-for="prato in singleRestaurante.filtroDesconto">
                                <div class="grid-content" @click="handlePratoClicado(prato)">
                                    <div class="image" :style="{ background: 'url(' + prato.imagem + ')' }">
                                    </div>
                                    <div class="details">
                                        <h6>{{ prato.nome }}</h6>
                                        <p>{{ formatarIgredientes(prato.ingredientes) }}</p>
                                        <div class="prices">
                                            <span v-if=prato.desconto class="original">De: R${{ prato.valor }}</span>
                                            <span v-else> R${{ prato.valor }}</span>
                                            <span v-if=prato.desconto class="sale">Por: R${{ prato.valor_desconto }}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </section>
</template>

<style>
#sales .el-row,
#sales .grid-content {
    text-align: unset !important;
}

#sales a {
    text-decoration: none;
}

#sales .details p {
    margin: 0;
}

#sales .prices {
    display: grid;
    text-align: end;
}

#sales .prices .original {
    text-decoration: line-through
}

#sales .grid-content {
    text-align: center;
    background-color: var(--white100);
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.12);
    border-radius: 0.25rem;
    border: 0.063rem solid var(--white300);
    color: var(--gray800);
    text-decoration: none !important;
    height: 20.75rem;
    width: 300px
}

#sales .image {
    height: 11.25rem !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    display: grid;
    align-content: end;
}

#sales .details {
    padding: 0.25rem 1.25rem 2rem 1.25rem;
}

#restaurants .details div {
    display: flex;
    justify-content: space-between;
}

#sales .details h6 {
    font-size: 1rem;
    font-weight: 700;
}

#sales .details span {
    font-size: 0.813rem;
}
</style>