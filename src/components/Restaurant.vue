<script setup>
const props = defineProps({
    restaurant: {
        id: Number,
        imagem: String,
        logo: String,
        titulo: String,
        avaliacao: Number,
        tipoRefeicao: String,
        distancia: String,
        tipoRetirada: String,
        descricao: String
    },
});

const bannerData = {
    titulo: props.restaurant.titulo,
    imagem: props.restaurant.imagem,
    logo: props.restaurant.logo,
    descricao: props.restaurant.descricao,
    avaliacao: props.restaurant.avaliacao
}

</script>
<template>
    <el-col :xs="24" :sm="12" :md="8" :lg="8" :span="8">
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
                            <h6>{{ restaurant.titulo }}</h6>
                            <el-rate disabled v-model="restaurant.avaliacao" />
                        </div>
                    </div>
                </div>
                <div class="details">
                    <div>
                        <span>{{ restaurant.tipoRefeicao }}</span>
                        <span>{{ restaurant.distancia }}</span>
                        <span>{{ restaurant.tipoRetirada }}</span>
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
#restaurants .el-col {
    margin: 12px 0;
}

#restaurants a {
    text-decoration: none;
}

#restaurants .grid-content {
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    color: #303133;
    text-decoration: none !important;
    ;
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
    color: #ffffff;
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
    padding: 4px 20px 32px 20px;
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
}
</style>