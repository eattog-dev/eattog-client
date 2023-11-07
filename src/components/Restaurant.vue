<script setup>
const props = defineProps({
    restaurant: {
        id: Number,
        imagem: String,
        logo: String,
        razao_social: String,
        avaliacao: Number,
        tipo_restaurante: String,
        distancia: String,
        tipo_retirada: String,
        descricao: String
    },
});

const bannerData = {
    razao_social: props.restaurant.razao_social,
    imagem: props.restaurant.imagem,
    logo: props.restaurant.logo,
    descricao: props.restaurant.descricao,
    avaliacao: props.restaurant.avaliacao
}

</script>
<template>
    <el-col :xs="24" :sm="12" :md="8" :lg="8" :span="8" class="card">
        <router-link :to="{
            name: 'SingleRestaurant',
            params: {
                id: restaurant.id,
            },
            // query: {
            //     banner: JSON.stringify(bannerData)
            // }
        }">
            <div class="grid-content">
                <div class="imagem" :style="{ background: 'url(' + restaurant.imagem + ')' }">
                    <div class="restaurant-data">
                        <img :src='restaurant.logo' alt="">
                        <div>
                            <h6>{{ restaurant.razao_social }}</h6>
                            <el-rate disabled v-model="restaurant.avaliacao" />
                        </div>
                    </div>
                </div>
                <div class="details">
                    <div class="details-item">
                        <span class="details-item--type">{{ restaurant.tipo_restaurante }}</span>
                        <span>{{ restaurant.distancia }}</span>
                        <span>{{ restaurant.tipo_retirada }}</span>
                    </div>
                    <p class="descricao">
                        {{ restaurant.descricao }}
                    </p>
                </div>
            </div>
        </router-link>
    </el-col>
</template>
<style>
#restaurants .el-col .card {
    margin: 12px 0;
    height: 300px !important;
}

#restaurants a {
    text-decoration: none;
}

#restaurants .grid-content {
    height: 100%;
    text-align: center;
    background-color: var(--white100);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: 1px solid var(--white300);
    color: var(--gray800);
    text-decoration: none !important;
}

#restaurants .imagem {
    height: 180px !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    display: grid;
    align-content: end;
}


#restaurants .imagem .restaurant-data {
    text-align: left;
    display: flex;
    color: var(--white100);
    padding-left: 20px;
    padding-bottom: 12px;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

#restaurants .imagem .restaurant-data h6 {
    font-size: 16px;
    font-weight: 700;
    text-shadow: 1px 1px #606060;
}

#restaurants .imagem .restaurant-data img {
    width: 50px;
    height: 50px;
    padding-right: 8px;
    object-fit: contain;
}

#restaurants .details {
    padding: 8px 20px 32px 20px;
}

#restaurants .details div {
    display: flex;
    justify-content: space-between;
}

#restaurants .details span {
    font-size: 13px;
}

#restaurants .descricao {
    text-align: left;
    font-size: 14px;
    padding-top: 16px;
}

.details-item {
    font-weight: 500;
}

.details-item--type {
    text-transform: capitalize;
}
</style>