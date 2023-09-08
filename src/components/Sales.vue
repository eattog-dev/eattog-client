<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

import Title from './Title.vue';


const props = defineProps({
    dishes: {
        image: String,
        title: String,
        description: String,
        price: Number,
        isSale: Boolean,
        sale_price: Number
    }
});

const sales = props.dishes.filter(sale => sale.isSale == true) || []
</script>

<template>
    <section id="sales" v-if="!sales.length == false">
        <Title text="Promoções"></Title>
        <el-row justify="center">
            <el-col class="col" :span="20">
                <el-row :gutter=10>
                    <el-col :span="24">
                        <Swiper :autoplay="{delay: 50}" :slides-per-view="3.3" space-between="30">
                            <SwiperSlide v-for="sale in sales">
                                <div class="grid-content">
                                    <div class="image" :style="{ background: 'url(' + sale.image + ')' }">
                                    </div>
                                    <div class="details">
                                        <h6>{{ sale.title }}</h6>
                                        <p>{{ sale.description }}</p>
                                        <div class="prices">
                                            <span class="original">De: R${{ sale.price }}</span>
                                            <span class="sale">Por: R${{ sale.sale_price }}</span>
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
    background-color: #ffffff;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    color: #303133;
    text-decoration: none !important;
    height: 332px;
}

#sales .image {
    height: 180px !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    display: grid;
    align-content: end;
}

#sales .details {
    padding: 4px 20px 32px 20px;
}

#restaurants .details div {
    display: flex;
    justify-content: space-between;
}

#sales .details h6 {
    font-size: 16px;
    font-weight: 700;
}

#sales .details span {
    font-size: 13px;
}
</style>