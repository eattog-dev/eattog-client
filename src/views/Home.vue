<script setup>
    import Carousel from '../components/Carousel.vue';
    import Dishes from '../components/ListDishes.vue';
    import Title from '../components/Title.vue';
</script>
<template>
    <Carousel/>
    <el-row justify="center">
    </el-row>
    <el-row justify="center">
        <el-col :span="20">
            <Title text="Destaque"></Title>
        </el-col>
        <el-col :span="20">
            <Dishes/>
        </el-col>
    </el-row>
</template>      