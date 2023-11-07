<script setup>
    import Title from './Title.vue'
    import Dish from './Dish.vue'
    // v-if="!filtredCategory.length  == false"
    import { computed, onMounted } from 'vue'
    import { useRouter } from 'vue-router';
    import { useHomeStore } from '../store/home'

    // const homeStore = useHomeStore();
    // const pratos = computed(() => homeStore.pratos)
    // onMounted(() => homeStore.listaPratos())

    const props = defineProps({
        pratos: Array
    })
    /**
     * {
            id: Number,
            nome: String, 
            valor: Number,
            imagem: String,
            desconto: Boolean,
            valor_desconto: Number,
            ingredientes: Array,
            descricao: String
        }
    */
</script> 

<template>
    <section id="list-dishes">
        {{ pratos }}
        <el-row justify="center">
            <el-col :span="20">
                <Title :text="categoria"> </Title>
            </el-col>
        </el-row>
        <el-row :gutter=12>
            <Dish v-for="prato in pratos" :dish="prato" />
        </el-row>
    </section>
</template>

<style>
    #list-dishes .el-row {
        text-align: center;
        margin: unset !important;
    }

    #list-dishes a {
        text-decoration: none;
    }

    #list-dishes .tag-aliment {
        position: relative;
        bottom: 1rem;
        background-color: var(--yellow200);
        color: var(--white100);
        padding: 0.313rem;
        border-radius: 0.25rem;
        font-weight: 600;
        width: fit-content;
        display: block;
        margin: auto;
    }

    #list-dishes .el-card__body {
    height: 19.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

    #list-dishes .image {
        width: 100%;
        display: block;
        object-fit: cover;
        height: 12.5rem;
    }

    #list-dishes .bottom {
        margin-top: 0.625rem;
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
        color: var(--orange100);
        padding-left: 0;
        padding-right: 0;
    }
</style>