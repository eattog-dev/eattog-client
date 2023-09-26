<template>
    <section id="list-dishes" v-if="!filtredCategory.length  == false">
        <Title :text="categoria" />
        <el-row :gutter=12  >
            <Dish v-for="prato in filtredCategory" :dish="prato"/>
        </el-row>
    </section>
</template>

<script setup>
import Title from './Title.vue' 
import Dish from './Dish.vue'

import { useRouter } from 'vue-router';

const adicionarPrato = (pratoId) => {
    const router = useRouter();
    router.push({ name: 'Plates', query: { id: pratoId } });
};


import { ref } from 'vue';

const apiKey = '0a727021fc924cd9b2ea52e03ccd461e';
const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

const tempos = [35, 40, 30, 45, 35, 40, 30, 50, 50];
const tagsAlimentos = ['Alimentos Saudáveis', 'Alimentos Processados', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Processados', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Saudáveis', 'Alimentos Saudáveis']
//   const pratos = ref([]);
//   fetch(`${apiUrl}?apiKey=${apiKey}`)
//         .then((res) => res.json())
//         .then((json) => {
//         console.log('Requisição bem-sucedida');
//         pratos.value = json.results;
//         })
//         .catch((err) => {
//         console.log('Ocorreu um erro na requisição', err);
//         });

const props = defineProps({
    categoria: String,
    pratos:{
        id: Number,
        image: String,
        title: String,
        ingredients: String,
        time: Number,
        tag: String,
    }

});
console.log(props.categoria)
const filtredCategory = props.pratos.filter(prato => prato.tag == props.categoria) || []
console.log(filtredCategory)
</script> 
<style>
#list-dishes .el-row {
    text-align: center;
    margin: unset!important;
    padding-bottom: 4rem;
}

#list-dishes a{text-decoration: none;}

#list-dishes .tag-aliment {
    position: relative;
    bottom: 16px;
    background-color: #ffe500e8;
    color: #ffffff;
    padding: 5px;
    border-radius: 4px;
    font-weight: 600;
    width: fit-content;
    display: block;
    margin: auto;
}

#list-dishes .image {
    width: 100%;
    object-fit: cover;
}

#list-dishes .bottom {
    margin-top: 10px;
}

#list-dishes .time {
    float: left;
}

#list-dishes .button {
    float: right;
}

/*#list-dishes .card {
    display: flex;
    flex-direction: column;
    height: 100%;
}*/

#list-dishes .el-button--text {
    border-color: transparent;
    background: 0 0;
    color: #f39c12;
    padding-left: 0;
    padding-right: 0;
}
</style>