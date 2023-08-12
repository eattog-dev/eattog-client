<script setup>
    import { ref } from 'vue';
    import Navbar from './components/Navbar.vue';

    const restaurants = ref([]);

    const apiKey = '97930d91663b4081a1190bdf8e6af9f2';
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

    fetch(`${apiUrl}?apiKey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        console.log('Requisição bem-sucedida');
        console.log(json);
        restaurants.value = json.results; 
      })
      .catch((err) => {
        console.log('Ocorreu um erro na requisição', err);
      });
</script>

<template>
  <div>
    <Navbar logo="/assets/logo.svg" alt="Logo" />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
