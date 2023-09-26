<script setup>
import { ref, computed, onMounted } from 'vue';

import { usePratosStore } from '../store/pratos'

const pratosStore = usePratosStore();


const handleMaisCaro = () => onMounted(() => pratosStore.ordenarMaisCaro());
const handleMaisBarato = () => onMounted(() => pratosStore.ordenarMaisBarato())
const handleOrdemAlfabetica = () => onMounted(() => pratosStore.ordenarMaisCaro())


function filtrar(value) {
  alert(`cliquei em ${value}`)
}

const value = ref('Selecione')

</script>
<template>
  <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option label="Mais Caro" value="Mais Caro" @click="handleMaisCaro()"/>
    <el-option label="Mais Barato" value="Mais Barato" @click="handleMaisBarato()"/>
    <el-option label="Ordem Alfabética" value="Ordem Alfabética" @click="handleOrdemAlfabetica()"/>
  </el-select>
</template> 
<style></style>