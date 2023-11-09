<template>
    <section class="cadastro-container" id="cadastro">
        <el-row class="cadastro-row">
            <el-col :span="12" class="cadastro-col cadastro-bg-white">
                <Logo class="" text="Eattog" icon="🟨"></Logo>
                <p class="cadastro-slogan">Delicious Food, Delivered Fast</p>
            </el-col>
            <el-col :span="12" class="cadastro-col">
                <el-form class="cadastro-form" ref="cadastroForm" :model="formulario" label-width="6.25rem"
                    label-position="top">
                    <el-header>
                        <el-divider content-position="center" class="cadastro-divider">Welcome to Eattog</el-divider>
                        <p class="cadastro-create-account">Create your account</p>
                    </el-header>
                    <el-form-item label="Name" prop="nome" :rules="nameRules">
                        <el-input type="text" v-model="formulario.nome"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="Date of Birth" prop="data_nascimento" :rules="dateOfBirthRules">
                        <el-date-picker class="cadastro-inputDate" v-model="formulario.data_nascimento" type="date"
                            placeholder="Select Date" format="DD/MM/YYYY"></el-date-picker>
                    </el-form-item> -->
                    <el-form-item label="Date of Birth" prop="data_nascimento" :rules="dateOfBirthRules">
                        <el-input type="text" v-mask="'####-##-##'" v-model="formulario.data_nascimento"></el-input>
                    </el-form-item>
                    <el-form-item label="Phone number" prop="numberPhone" :rules="phoneRules">
                        <el-input type="text" v-mask="'(##)#####-####'" v-model="formulario.numberPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="CPF" prop="cpf" :rules="cpfRules">
                        <el-input type="text" v-mask="'###.###.###-##'" v-model="formulario.cpf"></el-input>
                    </el-form-item>
                    <el-form-item label="E-mail" prop="email" :rules="emailRules">
                        <el-input type="email" v-model="formulario.email"></el-input>
                    </el-form-item>
                    <el-form-item label="password" prop="password" :rules="passwordRules">
                        <el-input v-model="formulario.password" :type="showPassword ? 'text' : 'password'"></el-input>
                        <el-button class="password-toggle-button" @click="togglePassword" >
                            <span v-if="showPassword">🙉</span>
                            <span v-else>🙈</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item label="Confirm Password" prop="confirmPassword" :rules="confirmPasswordRules">
                        <el-input v-model="formulario.confirmPassword"
                            :type="showPassword ? 'text' : 'password'"></el-input>
                        <el-button class="password-toggle-button" @click="togglePassword">
                            <span v-if="showPassword">🙉</span>
                            <span v-else>🙈</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="cadastro.submitForm(cadastroForm)">Sign Up</el-button>
                    </el-form-item>
                    <div class="loading-cadastro" v-if="loading">
                        <div class="loading-spinner-cadastro"></div>
                    </div>
                    <el-form-item>
                        <el-alert v-if="errorMsg" title="Please fill in all required fields." type="error" show-icon
                            class="cadastro-alert"></el-alert>
                    </el-form-item>
                    <el-form-item>
                        <router-link class="link-login" to="/login">Já tem uma conta? Faça Login</router-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        {{ formulario }}
    </section>
</template>
  
<script setup>
import Logo from "../components/Logo.vue";
import { ref, computed } from "vue";
import {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElRow,
    ElCol,
    ElHeader,
    ElDivider,
    ElDatePicker,
    ElAlert,
} from "element-plus";

import { useCadastroStore } from '../store/cadastro'

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

// const submitForm = () => {
//   cadastro.submitForm(); 
// };
const cadastroForm = ref(null)
</script>
  
<style scoped>
.cadastro-container {
    --el-color-primary: var(--yellow100);
}

.cadastro-bg-white {
    background-color: rgba(240, 252, 172, 0.849);
}

.cadastro-form {
    width: 50rem;
    height: 65.5rem;
    margin: 12.5rem auto 0;
    text-align: center;
    font-family: "Roboto", sans-serif;
}

.cadastro-row {
    width: 100% !important;
    max-width: 100%;
}

.cadastro-col {
    flex: 0 0 100%;
}

.cadastro-slogan {
    font-size: 1rem;
    color: var(--gray400);
    margin: 0.625rem 0 2.25rem 0;
    display: flex;
    justify-content: center;
}

.cadastro-divider {
    margin: 5rem 0 0 0;
}

.cadastro-create-account {
    font-size: 1rem;
    display: flex;
    margin: 0.625rem 0 0 0;
    justify-content: center;
}

.cadastro-inputDate .el-date-table th {
    padding: 0.25rem !important;
}

.cadastro-alert {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 50rem;
    left: 60%;
    width: 30%;
    z-index: 999999;
}

.password-toggle-button {
    background-color: transparent !important;
    border-color: transparent !important;
    width: auto !important;
    margin: 0 !important;
}

.el-button {
    background-color: var(--yellow400);
    color: rgba(0, 0, 0, 0.813);
    border-color: var(--yellow400);
    border-radius: 0.625rem;
    width: 50%;
    margin: 1.25rem auto;
    padding: 1rem 0;
}

.el-button:hover,
.el-button:focus {
    background-color: rgba(255, 255, 0, 0.418);
    color: var(--black100);
    border-color: var(--yellow400);
}

.password-toggle-button {
    position: absolute;
    right: 0.625rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0;
    color: var(--gray400);
}

.loading-cadastro {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 254, 212, 0.409);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner-cadastro {
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

.cadastro-container .el-form--default .el-form--label-top .el-form-item .el-form-item__label {
    margin-bottom: 0.5rem;
    margin-top: 1.688rem;
    line-height: 1.375rem;
}

.cadastro-container .el-form {
    width: 90%;
    margin: auto;
}

@media (width: 74.5rem) {
    .cadastro-container .el-form {
        margin: 1.625rem 0 0 0;
        width: 80%;
    }

    .cadastro-bg-white {
        width: 100%;
    }

    .cadastro-form {
        padding: 2rem;
        width: 50rem;
        height: 80.8rem;
        margin: 12.5rem auto 0;
        text-align: center;
        font-family: "Roboto", sans-serif;
    }
}

@media (max-width: 900px) {
    .cadastro-container .el-form {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        width: 200%;
    }

    .cadastro-container .cadastro-logotipo {
        font-size: 1.813rem;
        display: flex;
        margin: 15% 0 1.25rem 0;
        font-family: cursive;
        font-weight: bold;
        justify-content: center;
    }

    .cadastro-container .el-header {
        --el-header-padding: -1 1.25rem;
    }

    .cadastro-slogan {
        font-size: 1rem;
        color: var(--gray400);
        margin: 0.625rem 0 2.25rem 0;
        display: flex;
        justify-content: center;
    }

    .cadastro-divider {
        margin: 2rem 0 0 0;
    }

    .cadastro-container .cadastro-alert {
        display: flex;
        justify-content: center;
        align-self: center;
        width: 100%;
    }

    .cadastro-container .link-login {
        margin: -2.688rem 0 10rem 0;
        font-style: italic;
    }

    .cadastro-container .el-row,
    .cadastro-container .el-col {
        width: 100% !important;
        max-width: 100%;
    }

    .cadastro-container .el-col-12 {
        flex: 0 0 100%;
    }

    .cadastro-container .el-form {
        width: 100%;
    }
}
</style>
  