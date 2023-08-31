<script setup>
import Title from './Title.vue';

const props = defineProps({
    dishes: {
        image: String,
        title: String,
        description: String,
        price: Number,
        sale_price: Number
    }
});
console.log(props.dishes.length/6);




</script>
<template>
    <section id="menu">
        <Title text="Cardápio"></Title>
        <el-row justify="center">
            <el-col class="col" :span="20">
                <el-row :gutter=10 justify="start">
                    <el-col :xs="24" :sm="12" :md="12" :lg=12 :span="12" v-for="dish in dishes" :dish="dish">
                        <div class="grid-content dish">
                            <img :src="dish.image" alt="">
                            <div class="info">
                                <div>
                                    <h3>{{ dish.title }}</h3>
                                    <span>R${{ dish.price }}</span>
                                </div>
                                <p>{{ dish.description }}</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </section>
</template>
<style>
#menu .el-col {
    margin: 6px 0;
    /* height: 360px; */
}

#menu .el-row,
#menu .grid-content {
    text-align: unset !important;
}

#menu .grid-content {
    display: flex;
    padding: 12px;
}

#menu .dish .info {
    width: 100%;
    padding-left: 8px;

}

#menu .dish img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
}

#menu .dish .info div {
    display: flex;
    justify-content: space-between;
}


#menu .grid-content {
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    color: #303133;
    text-decoration: none !important;
    ;
}
</style>
