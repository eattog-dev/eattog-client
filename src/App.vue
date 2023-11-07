<script setup>
//import axios from "axios";

import { useUserStore } from './store/user-session'

const userStore =  useUserStore();

userStore.loggedUser();

</script>

<template>
    <router-view></router-view>
</template>

<style scoped></style>