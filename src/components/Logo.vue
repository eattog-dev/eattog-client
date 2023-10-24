<template>
    <h2 class="logotipo"> {{ text }}{{ icon }}</h2>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        text: String,
        icon: String
    });
</script>

<style setup>
    .logotipo{
        font-size: 4.25rem;
        margin-top: 20%;
        font-family: cursive;
        font-weight: bold;
    }
</style>