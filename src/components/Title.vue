<template>
    <h2 class="cmp-title">{{ text }}</h2>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        text: String
    });
</script>

<style>
    .cmp-title{
        left: 8.5%;
        font-weight: 700;
        padding-top: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--yellow100);
        width: fit-content;
    }
</style>