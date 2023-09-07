<script setup>
import { ref } from 'vue';

const prop = defineProps({
  dishes: {
    title: String,
    price: Number,
    rating: Number
  }
})

//console.log(prop.dishes)

function filtrar(value) {
  alert(`cliquei em ${value}`)
}

const value = ref('')

const options = [
  {
    value: 'mais-caro',
    label: 'Mais Caro',
  },
  {
    value: 'mais-barato',
    label: 'Mais Barato',
  },
  {
    value: 'ordem-alfabetica',
    label: 'Ordem Alfabética',
  },
  {
    value: 'melhor-avaliacao',
    label: 'Mlehor Avaliação',
  },

]
</script>
<template>
  <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
      @click="filtrar(item.value)" />
  </el-select>
</template> 
<style></style>