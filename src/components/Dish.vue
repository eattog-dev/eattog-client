<script setup>
    import { reactive } from 'vue'
    const props = defineProps({
        dish: {
        id: Number,
        image: String,
        nome: String,
        ingredientes: String,
        time: Number,
        prato_categoria: String,
        price: Number,
        desconto: Boolean,
        valor_desconto: Number
        }
    });

    const emits = defineEmits('pratoClicado');

    const handlePratoClicado = () => {
        emits('pratoClicado', props.dish)
    }
</script>

<template>
    <el-col :xs="24" :sm="12" :md="6" :lg="6" :span="8">
        <el-card :body-style="{ padding: '0px' }">
            <img :src="dish.imagem" class="image">
            <!-- <span class="tag-aliment" v-if="dish.prato_categoria.categoria == null">celta</span> 
                    <span class="tag-aliment" v-else>{{ dish.prato_categoria.categoria }}</span>  -->
            <div style="padding: 8px; text-align: center;">
            <span>{{ dish.nome }}</span>
            <div class="dish-price">
                <span class="dish-price__discount">
                    R$ {{ dish.valor }}
                    <span v-if=dish.desconto class="dish-price__original">R$ {{ dish.valor_desconto }}</span>
                </span>
            </div>
            <div class="clearfix">
                <!-- <time class="time">{{ dish.time }} min</time> -->
                <el-button type="text" class="button" @click="handlePratoClicado()">Adicionar</el-button>
            </div>
            </div>
        </el-card>
    </el-col>
</template>

<style>
    #list-dishes a {
        text-decoration: none;
    }

    #list-dishes .el-card {
        margin: 1rem 0;
        height: 18.75rem;
    }

    #list-dishes .time {
        font-size: 0.813rem;
        color: var(--gray300);
    }

    #list-dishes .button {
        padding: 0;
        float: right;
    }

    #list-dishes .button span {
        color: var(--yellow200) !important;
    }


    #list-dishes .image {
        width: 100%;
        display: block;
        object-fit: cover;
        height: 12.5rem;
    }

    #list-dishes .el-card__body {
        margin-top: 0 !important;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #list-dishes .tag-aliment {
        text-align: center;
    }

    #list-dishes .dish-price__discount {
        color: var(--orange100);
        margin-bottom: 0.625rem;
    }

    #list-dishes .dish-price__original {
        position: relative;
        font-size: 0.75rem;
        color: var(--gray200);
        text-decoration: line-through;
        margin-left: 0.375rem;
    }

    #list-dishes .dish-restaurant__divisor {
        border-top: 0.125rem dashed var(--white200);
        margin: 0.5rem 0;
    }
</style>
