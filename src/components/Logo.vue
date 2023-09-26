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
    font-size: 68px;
    margin: 30% 50px 0 30%;
    font-family: cursive;
    font-weight: bold;
}

</style>