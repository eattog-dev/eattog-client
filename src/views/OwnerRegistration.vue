<template>
    <section class="cmp-owner-with-background">
        <div class="cmp-owner-title">
            Cadastre sua loja! Visibilidade pra vender mais. ->
        </div>
        <div class="cmp-owner-form-container">
            <h3 class="nav-name-logo cmp-owner-form-logo">Eattog🟨</h3>

        <el-form class="cmp-owner-form" ref="cadastroForm" :model="formulario" label-position="top">
            <el-form-item label="Nome do proprietário" prop="nome" :rules="nameRules">
                <el-input class="cmp-owner-form-input" type="text" v-model="formulario.nome"></el-input>
            </el-form-item>
            <div class="cmp-owner-form-item">
                <el-form-item label="Data de nascimento" prop="data_nascimento" :rules="dateOfBirthRules">
                    <el-input class="cmp-owner-form-input" type="text" v-mask="'####-##-##'" v-model="formulario.data_nascimento"></el-input>
                </el-form-item>
                <el-form-item label="Número de telefone" prop="numberPhone" :rules="phoneRules">
                    <el-input class="cmp-owner-form-input" type="text" v-mask="'(##)#####-####'" v-model="formulario.numberPhone"></el-input>
                </el-form-item>
            </div>
            <el-form-item label="CPF" prop="cpf" :rules="cpfRules">
                <el-input class="cmp-owner-form-input" type="text" v-mask="'###.###.###-##'" v-model="formulario.cpf"></el-input>
            </el-form-item>
            <el-form-item label="E-mail" prop="email" :rules="emailRules">
                <el-input class="cmp-owner-form-input" type="email" v-model="formulario.email"></el-input>
            </el-form-item>
            <div class="cmp-owner-form-item">
                <el-form-item label="Senha" prop="password" :rules="passwordRules">
                    <el-input class="cmp-owner-form-input" v-model="formulario.password" :type="showPassword ? 'text' : 'password'"></el-input>
                    <el-button class="cmp-owner-password-toggle-button" @click="togglePassword">
                        <span v-if="showPassword">👁️</span>
                        <span v-else>👁️‍🗨️</span>
                    </el-button>
                </el-form-item>
                <el-form-item label="Confirmar senha" prop="confirmPassword" :rules="confirmPasswordRules">
                    <el-input class="cmp-owner-form-input" v-model="formulario.confirmPassword"
                        :type="showPassword ? 'text' : 'password'"></el-input>
                    <el-button class="cmp-owner-password-toggle-button" @click="togglePassword">
                        <span v-if="showPassword">👁️</span>
                        <span v-else>👁️‍🗨️</span>
                    </el-button>
                </el-form-item>
            </div>
            <el-form-item>
                <el-button class="cmp-owner-form-button" type="primary" @click="cadastro.submitForm(cadastroForm)">Cadastrar</el-button>
            </el-form-item>

            <div class="cmp-owner-format-link">
                <router-link class="cmp-owner-backlink" to="/inicio">Ir para Home</router-link>
                <router-link class="cmp-owner-backlink" to="/login/proprietario">Já tem uma conta? Faça Login</router-link>
            </div>

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

    import { useCadastroStore } from '../store/owner-registration'

    const cadastro = useCadastroStore();

    const formulario = computed(() => cadastro.formulario);
    const nameRules = computed(() => cadastro.nameRules);
    const dateOfBirthRules = computed(() => cadastro.dateOfBirthRules);
    const phoneRules = computed(() => cadastro.phoneRules);
    const cpfRules = computed (() => cadastro.cpfRules);
    const emailRules = computed(() => cadastro.emailRules);
    const passwordRules = computed(() => cadastro.passwordRules);
    const confirmPasswordRules = computed(() => cadastro.confirmPasswordRules);
    const loading = computed(() => cadastro.loading);
    const errorMsg = computed(() => cadastro.errorMsg);

    const showPassword = computed(() => cadastro.showPassword);

    const togglePassword = () => {
        cadastro.togglePassword();
    };

    const cadastroForm = ref(null)
</script>

<style scoped>
.cmp-owner-format-link{
    display: flex;
    justify-content: space-between;
}
.cmp-owner-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    position: absolute;
    left: 10%;
    background-color: var(--yellow200);
    padding: 1rem;
    color: var(--white100);
    font-weight: 900;
    border-radius: 1rem;
    font-size: x-large;
    height: 5rem;
}
.cmp-owner-backlink{
    text-align: center;
    display: block;
    color: var(--yellow400);
    text-decoration: none;
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

.cmp-owner-form-button:hover , .cmp-owner-form-button:focus {
    background-color: var(--yellow100) !important;
    color: var(--white100) !important;
    border-color: var(--yellow100);
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
    .cmp-owner-title {
        left: 5%;
        height: 7rem;
        width: 25rem;
        display: flex;
    }
}
@media (max-width: 768px) {
    .cmp-owner-title {
        display: none;
    }
    .cmp-owner-form-container {
        right: inherit;
        top: inherit;
        border-radius: 0;
        width: 100%;
    }
    .cmp-owner-form-container .el-form {
        width: 100%;
    }
    .cmp-owner-form-item {
        display: block;
    }
}
</style>