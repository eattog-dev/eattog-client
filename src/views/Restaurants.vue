<template>
    <section id="restaurants">
        <Title text="Restaurantes"></Title>
        <el-row justify="center">
            <el-col :span="20">
                <el-row :gutter=8>
                    <Restaurant v-for="restaurant in restaurants" :restaurant="restaurant" />
                </el-row>
            </el-col>
        </el-row>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import Title from '../components/Title.vue';

import Restaurant from '../components/Restaurant.vue'

const restaurants = ref([
    {
        image: 'https://rioandlearn.com/wp-content/uploads/Vocabulário-Lanchonete.png',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        id:2,
        title: 'Lanchonete Chalé',
        rating: 5.0,
        type: 'refeição',
        distance: '2,5km',
        retiring: 'Local',
        description: 'Lanchonete com vários salgados, doces e aperitivos para seu lanche a qualquer hora'
    },
    {
        id:1,
        image: 'https://img.cybercook.com.br/receitas/802/molho-a-carbonara-forum-madalena-saifi.jpeg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Burger King',
        rating: 4.0,
        type: 'refeição',
        distance: '1,5km',
        retiring: 'Retirada apenas',
        description: 'um fastfood porem depende so que é bom e faz mal'
    },
    {
        image: 'https://receitinhas.com.br/wp-content/uploads/2022/12/maxresdefault-2022-12-29T063755.521-730x365.jpg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        id: 0,
        title: 'Divina Espetaria',
        rating: 5.0,
        type: 'refeição',
        distance: '7,5km',
        retiring: 'Local e retirada',
        description: 'Espetinho de gato do bom e muito barato que vale a pena'
    },
    {
        image: 'https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Churrascaria Tchê',
        rating: 5.0,
        id:4,
        type: 'refeição',
        distance: '2,5km',
        retiring: 'Local',
        description: 'A melhor churrascaria do sul fora do sul perto da sua casa tchê'
    },
    {
        image: 'https://receitasrapidas.org/wp-content/uploads/2023/02/risoto-de-camarao.jpg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Res tau ran te',
        rating: 4.0,
        id:5,
        type: 'refeição',
        distance: '1,5km',
        retiring: 'Retirada apenas',
        description: 'Restaurante a peso, self-service com direito a uma sobremesa gostosa'
    },
    {
        image: 'https://receitasdedelicias.com.br/wp-content/uploads/2023/05/Lasanha-de-Carne-Moida.jpg',
        logo: 'https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000',
        title: 'Butiquim do zé',
        rating: 5.0,
        id:6,
        type: 'refeição',
        distance: '7,5km',
        retiring: 'Local e retirada',
        description: 'Comida caseira de muita qualidade acompanhada de bastante cerveja'
    },
])

</script>
