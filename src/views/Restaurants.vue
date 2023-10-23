<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRestaurantesStore } from '../store/restaurantes'

import Title from '../components/Title.vue';
import Restaurant from '../components/Restaurant.vue'
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

const restaurantesStore = useRestaurantesStore();

const restaurantes = computed(() => restaurantesStore.restaurantes)
const paginaAtual = computed(() => restaurantesStore.pagina)

onMounted(() => {
    restaurantesStore.carregarPagina()
})

// const restaurants = ref([
//     {
//         imagem: 'https://rioandlearn.com/wp-content/uploads/Vocabulário-Lanchonete.png',
//         logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
//         id: 2,
//         titulo: 'Lanchonete Chalé',
//         avaliacao: 5.0,
//         tipoRefeicao: 'refeição',
//         distancia: '2,5km',
//         tipoRetirada: 'Local',
//         descricao: 'Lanchonete com vários salgados, doces e aperitivos para seu lanche a qualquer hora'
//     },
//     {
//         id: 1,
//         imagem: 'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg',
//         logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
//         titulo: 'Burger King',
//         avaliacao: 4.0,
//         tipoRefeicao: 'refeição',
//         distancia: '1,5km',
//         tipoRetirada: 'Retirada apenas',
//         descricao: 'um fastfood porem depende so que é bom e faz mal'
//     },
//     {
//         imagem: 'https://receitinhas.com.br/wp-content/uploads/2022/12/maxresdefault-2022-12-29T063755.521-730x365.jpg',
//         logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
//         id: 0,
//         titulo: 'Divina Espetaria',
//         avaliacao: 5.0,
//         tipoRefeicao: 'refeição',
//         distancia: '7,5km',
//         tipoRetirada: 'Local e retirada',
//         descricao: 'Espetinho de gato do bom e muito barato que vale a pena'
//     },
//     {
//         imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg',
//         logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
//         titulo: 'Churrascaria Tchê',
//         avaliacao: 5.0,
//         id: 4,
//         tipoRefeicao: 'refeição',
//         distancia: '2,5km',
//         tipoRetirada: 'Local',
//         descricao: 'A melhor churrascaria do sul fora do sul perto da sua casa tchê'
//     },
//     {
//         imagem: 'https://receitasrapidas.org/wp-content/uploads/2023/02/risoto-de-camarao.jpg',
//         logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
//         titulo: 'Res tau ran te',
//         avaliacao: 4.0,
//         id: 5,
//         tipoRefeicao: 'refeição',
//         distancia: '1,5km',
//         tipoRetirada: 'Retirada apenas',
//         descricao: 'Restaurante a peso, self-service com direito a uma sobremesa gostosa'
//     },
//     {
//         imagem: 'https://receitasdedelicias.com.br/wp-content/uploads/2023/05/Lasanha-de-Carne-Moida.jpg',
//         logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
//         titulo: 'Butiquim do zé',
//         avaliacao: 5.0,
//         id: 6,
//         tipoRefeicao: 'refeição',
//         distancia: '7,5km',
//         tipoRetirada: 'Local e retirada',
//         descricao: 'Comida caseira de muita qualidade acompanhada de bastante cerveja'
//     },
// ])
const value = ref('Selecione');

</script>
<template>
    <Navbar logo="../assets/logo.svg" alt="Logo" />

    <section id="restaurants">

        <el-row justify="center">
            <el-col :span="20">
                <Title text="Restaurantes"></Title>

                <el-select v-model="value" class="m-2" placeholder="Select" size="large">
                    <el-option label="Ordem Alfabética" value="Ordem Alfabética" @click="restaurantesStore.ordenarAlfabeto()" />
                    <el-option label="Melhor Avaliado" value="Melhor Avaliado" @click="restaurantesStore.ordenarAvaliacao()" />
                </el-select>
            </el-col>
        </el-row>
        <el-row justify="center">
            <el-col :span="20">
                <el-row :gutter=8>
                    <Restaurant v-for="restaurante in restaurantes" :restaurant="restaurante" />
                </el-row>
                <el-row justify=center>
                    <button @click="restaurantesStore.voltarPagina()">Anterior</button>
                    <span>{{ paginaAtual }}</span>
                    <button @click="restaurantesStore.passarPagina()">Próximo</button>
                </el-row>
            </el-col>
        </el-row>
    </section>
    <Footer></Footer>
</template>