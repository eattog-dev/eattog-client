<script setup>
    import Carousel from '../components/Carousel.vue';
    import Dishes from '../components/ListDishes.vue';
    import Title from '../components/Title.vue';
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
</script>
<template>
    <Navbar logo="/assets/logo.svg" alt="Logo" />
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
    <Footer> </Footer>
</template>      