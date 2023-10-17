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

.logotipo {
    font-size: 80px;
    display: flex;
    margin: 35% 0px 18px 0%;
    font-family: cursive;
    font-weight: bold;
    justify-content: center;
}

</style>