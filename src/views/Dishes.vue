<script setup>
import { ref } from 'vue'

import ListDishes from '../components/ListDishes.vue'
import Title from '../components/Title.vue' 


import lanche from '../assets/img-pratos/lanche.jpg';
import pacu from '../assets/img-pratos/pacu-recheado.jpg';
import soba from '../assets/img-pratos/soba-pantaneiro.jpg';
import salada from '../assets/img-pratos/salada-pantaneira.jpg';
import pintado from '../assets/img-pratos/pintado-na-telha.webp';
import moqueca from '../assets/img-pratos/moqueca-pantaneira.jpg';
import feijao_tropeiro from '../assets/img-pratos/feijao-tropeiro.jpg';

//const tempos = [35, 40, 30, 45, 35, 40, 30, 50, 50];
const tagsAlimentos = ['Alimentos Saudáveis', 'Alimentos Processados', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Processados', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Saudáveis']

const pratos = ref([
    {
        id: 1,
        image: pacu,
        title: 'Pacu Assado',
        ingredients: 'Pacu, temperos, ervas',
        time: 35,
        tag: tagsAlimentos[0],
        price: 25,
        isSale: false,
        sale_price: 22
    },
    {
        id: 2,
        image: lanche,
        title: 'Lanche',
        ingredients: 'Pão, carne, queijo, alface, tomate',
        time: 10,
        tag: tagsAlimentos[1],
        price: 30,
        isSale: true,
        sale_price: 25
    },
    {
        id: 3,
        image: soba,
        title: 'Sobá Pantaneiro',
        ingredients: 'Macarrão, carne de porco, cebola, verduras',
        time: 30,
        tag: tagsAlimentos[1],
        price: 21,
        isSale: true,
        sale_price: 20
    },
    {
        id: 4,
        image: pintado,
        title: 'Pintado na Telha',
        ingredients: 'Pintado, temperos, legumes',
        time: 45,
        tag: tagsAlimentos[0],
        price: 40,
        isSale: true,
        sale_price: 33
    },
    {
        id: 5,
        image: feijao_tropeiro,
        title: 'Feijão Tropeiro',
        ingredients: 'Feijão, linguiça, torresmo, ovos, farinha de mandioca',
        time: 35,
        tag: tagsAlimentos[0],
        price: 30,
        isSale: true,
        sale_price: 25

    },
    {
        id: 9,
        image: lanche,
        title: 'Lanche Pantaneiro',
        ingredients: 'Pão, carne, temperos, queijo',
        time: 25,
        tag: tagsAlimentos[1],
        price: 18,
        isSale: true,
        sale_price: 15
    },
    {
        id: 8,
        image: moqueca,
        title: 'Moqueca Pantaneira',
        ingredients: 'Peixe, temperos, verduras',
        time: 30,
        tag: tagsAlimentos[1],
        price: 12,
        isSale: false,
        sale_price: 0
    },
    {
        id: 10,
        image: salada,
        title: 'Salada',
        ingredients: 'Verduras, frutas, castanhas, molho especial',
        time: 15,
        tag: tagsAlimentos[0],
        price: 10,
        isSale: false,
        sale_price: 0
    },
]);
</script>
<template>
    <el-row justify="center">
        <el-col :span=20>
            <ListDishes :pratos="pratos" categoria="destaque"/>

            <ListDishes :pratos="pratos" categoria="Alimentos Saudáveis"/>

            <ListDishes :pratos="pratos" categoria="Alimentos Processados"/>
        </el-col>
    </el-row>
</template>