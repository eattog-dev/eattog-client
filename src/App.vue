<script setup>
    import Navbar from './components/Navbar.vue';
    //import Footer from './components/Footer.vue';
    // import MobileNavigation from './components/MobileNavigation.vue';
    // import Restaurante from './views/Restaurants.vue';
    // import Dishes from './components/Dishes.vue';
    // import MenuRestaurant from './views/MenuRestaurant.vue';
    // import Home from './views/Home.vue'
</script>

<template>
  <div>
    <Navbar logo="/assets/logo.svg" alt="Logo" />
     <router-view></router-view>
     <!--
    <Footer> </Footer> 
    <MobileNavigation></MobileNavigation>-->
    <!-- <Restaurante/>
    <Dishes/> -->
    <!-- <MenuRestaurant/> -->
  </div>
</template>

<style scoped>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
