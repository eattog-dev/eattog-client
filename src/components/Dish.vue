<script setup>
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
        <div class="prato">

            <img :src="dish.imagem" class="image">
            <div style="padding: 8px; text-align: center;">
                <span>{{ dish.nome }}</span>
                <div class="dish-price">
                    <span v-if=dish.desconto class="dish-price__original" style=" color: #50a773;font-weight: 500;">R$ {{
                        dish.valor - dish.valor_desconto }}</span>
                    <span class="dish-price__discount" v-if=dish.desconto
                        style=" text-decoration: line-through; color: var(--gray400); font-size: 14px; margin-right: 5px;">
                        R$ {{ dish.valor }}
                    </span>
                    <span v-else class="dish-price__discount" style="font-weight: 500;">
                        R$ {{ dish.valor }}
                    </span>
                </div>
            </div>
            <span class="add-carrrinho " @click="handlePratoClicado()">Adicionar</span>
        </div>
    </el-col>
</template>

<style scoped>
a {
    text-decoration: none;
}

.el-col {
    height: 10rem;
}

.prato {
    background-color: var(--white100);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    border: 1px solid var(--white300);
    color: var(--gray800);
    text-decoration: none !important;
    border-radius: 5px;
    transition: 0.2s;
}

.el-card {
    margin: 1rem 0;
    height: 5.75rem;
    /* transition: 0.2s; */
    border-radius: 0px 0px 5px 5px;
}

.prato:hover {
    scale: 1.02
}

.time {
    font-size: 0.813rem;
    color: var(--gray300);
}

.add-carrrinho {
    display: flex;
    color: var(--yellow500);
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: 500;
}



.image {
    width: 100%;
    display: block;
    object-fit: cover;
    height: 12.5rem;
    border-radius: 5px 5px 0px 0px;
}

.el-card__body {
    margin-top: 0 !important;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.el-card:hover {
    scale: 1.02;
}

.tag-aliment {
    text-align: center;
}

.dish-price__discount {
    color: var(--orange100);
    margin-bottom: 0.625rem;
}

/* 
.dish-price__original {
    position: relative;
    font-size: 0.75rem;
    color: var(--gray200);
    text-decoration: line-through;
    margin-left: 0.375rem;
} */

.dish-restaurant__divisor {
    border-top: 0.125rem dashed var(--white200);
    margin: 0.5rem 0;
}

@media (max-width: 992px) {
    .el-col {
        padding: 8px;
    }
}
</style>
