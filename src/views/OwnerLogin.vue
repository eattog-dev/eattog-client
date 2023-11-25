<template>
    <section class="cmp-owner-with-background">
        <div class="cmp-owner-form-container cmp-owner-form-container--login">
            <h3 class="nav-name-logo cmp-owner-form-logo">Eattog🟨</h3>

        <el-form class="cmp-owner-form" ref="loginForm" :model="formulario" label-position="top">
            <el-form-item  class="cmp-owner-form-item--margin" label="E-mail" prop="email" :rules="emailRules">
                <el-input class="cmp-owner-form-input" type="email" v-model="formulario.email"></el-input>
            </el-form-item>
                <el-form-item  class="cmp-owner-form-item--margin" label="Senha" prop="password" :rules="passwordRules">
                    <el-input class="cmp-owner-form-input" v-model="formulario.password" :type="showPassword ? 'text' : 'password'"></el-input>
                    <el-button class="cmp-owner-password-toggle-button" @click="togglePassword">
                        <span v-if="showPassword">🔓</span>
                        <span v-else>🔒</span>
                    </el-button>
                </el-form-item>

            <el-form-item class="cmp-owner-form-item--margin">
                <el-button class="cmp-owner-form-button" type="primary" @click="login.submitForm(loginForm)">Login</el-button>
            </el-form-item>

            <router-link class="cmp-owner-backlink" to="/cadastro/proprietario">Não tem uma conta? Faça o cadastro</router-link>

            <div class="cmp-owner-loading-cadastro" v-if="loading">
                <div class="cmp-owner-loading-spinner-cadastro"></div>
            </div>

            <el-alert v-if="errorMsg" title="Por favor, preencha todos os campos requisitados." type="error" show-icon
                    class="cmp-owner-cadastro-alert"></el-alert>
        </el-form>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from "vue";
import {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElAlert,
} from "element-plus";

import { useLoginStore } from "../store/login-registration";
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const login = useLoginStore();

const formulario = computed(() => login.formulario);

const emailRules = computed(() => login.emailRules);

const passwordRules = computed(() => login.passwordRules);

const auth = document.cookie.split("token=")[1];

const loginForm = ref(null);
const errorMsg = ref("");

const showPassword = ref(false);

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.cmp-owner-form-item--margin {
    margin-bottom: 1rem;
}
.cmp-owner .el-form-item__error {
    position: relative !important;
}
.cmp-owner .el-button>span {
    top: -12px;
    position: relative;
}
.cmp-owner-backlink {
    text-align: center;
    display: block;
    color: var(--yellow400);
}
.cmp-owner-form-button {
    background-color: var(--yellow400);
    color:  var(--white100) !important;
    border-color: var(--yellow400);
    border-radius: 0.1rem;
    width: 100% !important;
    padding: 1rem 0;
    margin: 1rem 0;
    font-weight: bold;
}
.cmp-owner-form-logo {
    display: flex;
    position: relative;
    padding: 0.5rem 0;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 800;
}
.cmp-owner-with-background {
    background-image: url(../assets/img-background/ower.jfif);
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    order: 1;
    display: flex;
    justify-content: center;
}
.cmp-owner-form-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.cmp-owner-form .el-form-item {
    margin-bottom: 1rem;
}
.cmp-owner-form-container--login {
    top: 15% !important;
    right: initial !important;
}
.cmp-owner-form-container {
    position: absolute;
    top: 5%;
    right: 10%;
    background-color: var(--white100);
    padding: 1.25rem;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.625rem var( --rgba-gray100);
}
.cmp-owner-form-container .el-form {
    width: 25rem;
}
.cmp-owner-password-toggle-button {
    border: transparent;
    margin: 0 !important;
    position: absolute;
    right: 0.1rem;
    transform: translateY(-50%);
    background-color: transparent;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0rem;
    color: var(--gray400);
    width: 2rem !important;
    height: 0rem;
}
.cmp-owner-form-input .el-form-item__error {
    position: relative !important;
}
.cmp-owner-cadastro-alert {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 50rem;
    left: 60%;
    width: 30%;
    z-index: 999999;
}
.cmp-owner-loading-cadastro {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--rgba-lightgray100);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
.cmp-owner-loading-spinner-cadastro {
    border: 0.375rem solid var(--white200);
    border-top: 0.375rem solid var(--rgba-yellow);
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
    animation: spin 2s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
@media (max-width: 1024px) {
    .cmp-owner-form-container {
        right: 5%;
    }
}
@media (max-width: 768px) {
    .cmp-owner-form-container {
        right: inherit;
        top: inherit;
        border-radius: none;
    }
    .cmp-owner-form-container .el-form {
        width: 100%;
    }
    .cmp-owner-form-item {
        display: block;
    }
}
</style>