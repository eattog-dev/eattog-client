<template>
    <section id="cadastro">
        <el-row>
            <el-col :span="12" class="cadastro-bg-white">
                <Logo class="" text="Eattog" icon="🟨"></Logo>
                <p class="cadastro-slogan">Delicious Food, Delivered Fast</p>
            </el-col>
            <el-col :span="12">
                <el-form class="cadastro-container-form" ref="cadastroForm" :model="formulario" label-width="6.25rem" label-position="top">
                    <el-header>
                        <el-divider content-position="center">Welcome to Eattog</el-divider>
                        <p>Create your account</p>
                    </el-header>
                    <el-form-item label="Name" prop="nome" :rules="nameRules">
                        <el-input type="text" v-model="formulario.nome"></el-input>
                    </el-form-item>
                    <el-form-item label="Date of Birth" prop="data_nascimento" :rules="dateOfBirthRules">
                        <el-date-picker class="cadastro-inputDate" v-model="formulario.data_nascimento" type="date"
                        placeholder="Select Date" format="DD/MM/YYYY"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="Phone number" prop="numberPhone" :rules="phoneRules">
                        <el-input type="text" v-mask="'(##) #####-####'" v-model="formulario.numberPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="CPF or CNPJ" prop="cpf_cnpj" :rules="cpfCnpjRules">
                        <el-input type="text" v-mask="'###.###.###-##', '##.###.###/####-##'" v-model="formulario.cpf_cnpj">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="E-mail" prop="email" :rules="emailRules">
                        <el-input type="email" v-model="formulario.email"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="Password" :rules="passwordRules">
                        <el-input v-model="formulario.Password" :type="showPassword ? 'text' : 'password'"></el-input>
                        <el-button class="password-toggle-button" @click="togglePassword">
                            <span v-if="showPassword">🙉</span>
                            <span v-else>🙈</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item label="Confirm Password" prop="confirmPassword" :rules="confirmPasswordRules">
                        <el-input v-model="formulario.confirmPassword" :type="showPassword ? 'text' : 'password'"></el-input>
                        <el-button class="password-toggle-button" @click="togglePassword">
                            <span v-if="showPassword">🙉</span>
                            <span v-else>🙈</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">Sign Up</el-button>
                    </el-form-item>
                    <div class="loading-cadastro" v-if="loading">
                        <div class="loading-spinner-cadastro"></div>
                    </div>
                    <el-form-item>
                        <el-alert v-if="errorMsg" title="Please fill in all required fields." type="error" show-icon></el-alert>
                    </el-form-item>
                    <el-form-item>
                        <router-link class="link-login" to="/login">Já tem uma conta? Faça Login</router-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </section>
</template>

<script setup>
    import Logo from "../components/Logo.vue";
    import { ref } from "vue";
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

    const formulario = ref({
    nome: "",
    data_nascimento: "",
    cpf_cnpj: "",
    email: "",
    Password: "",
    confirmPassword: "",
    numberPhone: "",
    });

    const nameRules = [
    { required: true, message: "Please enter your name", trigger: "blur" },
    ];

    const dateOfBirthRules = [
    { required: true, message: "Please select your date of birth", trigger: "change" },
    ];

    const phoneRules = [
    { required: true, message: "Please enter your phone number", trigger: "blur" },
    ];

    const cpfCnpjRules = [
    { required: true, message: "Please enter your CPF or CNPJ", trigger: "blur" },
    {
        validator: (rule, value, callback) => {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

        if (cpfRegex.test(value) || cnpjRegex.test(value)) {
            callback();
        } else {
            callback(new Error("Please enter a valid CPF or CNPJ"));
        }
        },
        trigger: "blur",
    },
    ];

    const emailRules = [
    { required: true, message: "Please enter your email", trigger: "blur" },
    { type: "email", message: "Please enter a valid email address", trigger: "blur" },
    ];

    const passwordRules = [
    { required: true, message: "Please enter a password", trigger: "blur" },
    {
        validator: (rule, value, callback) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{6,}$/;
        if (!regex.test(value)) {
            callback(new Error("A senha deve ter pelo menos 6 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial"));
        } else {
            callback();
        }
        },
        trigger: "blur",
    },
    ];

    const confirmPasswordRules = [
    { required: true, message: "Please confirm your password", trigger: "blur" },
    {
        validator: (rule, value, callback) => {
        if (value !== formulario.value.Password) {
            callback(new Error("Passwords do not match"));
        } else {
            callback();
        }
        },
        trigger: "blur",
    },
    ];

    const showPassword = ref(false);
    const loading = ref(false);

    const togglePassword = () => {
    showPassword.value = !showPassword.value;
    };

    const submitForm = () => {
    loading.value = true;

    cadastroForm.value.validate((valid) => {
        if (valid) {
        console.log("Dados do formulário:", formulario.value);
        errorMsgPassword.value = "";
        } else {
        errorMsgPassword.value = "";
        errorMsg.value = "Please fill in all required fields.";
        loading.value = false;
        }

        setTimeout(() => {
        errorMsg.value = "";
        loading.value = false;
        }, 3000);
    });
    };

    const cadastroForm = ref(null);
    const errorMsg = ref("");
    const errorMsgPassword = ref("");
</script>

<style setup>
    #cadastro {
        --el-color-primary: var(--yellow100);
    }

    #cadastro .cadastro-bg-white {
        background-color: rgba(240, 252, 172, 0.849);
    }

    #cadastro .cadastro-container-form {
        width: 50rem;
        height: 65.5rem;
        margin: 12.5rem auto 0;
        text-align: center;
        font-family: "Roboto", sans-serif;
    }

    .el-date-table th {
        padding: 0.25rem !important;
    }

    #cadastro .cadastro-container-form p {
        margin: 1.375rem 0 0 0;
    }

    #cadastro .cadastro-slogan {
        font-size: 1rem;
        color: var(--gray400);
        display: flex;
        margin: 0.625rem 0% 0 0%;
        justify-content: center;
    }
    
    #cadastro .loading-cadastro {
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

    #cadastro .loading-spinner-cadastro {
        border: 0.375rem solid var(--white200);
        border-top: 0.375rem solid var(--rgba-yellow);
        border-radius: 50%;
        width: 3.125rem;
        height: 3.125rem;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #cadastro .el-form--default 
    .el-form--label-top 
    .el-form-item 
    .el-form-item__label {
        margin-bottom: 0.5rem;
        margin-top: 1.688rem;
        line-height: 1.375rem;
    }

    #cadastro .el-form {
        width: 90%;
        margin: auto;
    }

    #cadastro .el-alert {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 50rem;
        left: 60%;
        width: 30%;
        z-index: 999999;
    }

    #cadastro .password-toggle-button {
        background-color: transparent !important;
        border-color: transparent !important;
        width: auto !important;
        margin: 0 !important;
    }

    #cadastro .el-button {
        background-color: var(--yellow400);
        color: rgba(0, 0, 0, 0.813);
        border-color: var(--yellow400);
        border-radius: 0.625rem;
        width: 50%;
        margin: 1.25rem auto;
        padding: 1rem 0;
    }

    #cadastro .el-button:hover,
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
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #cadastro.el-divider {
        margin: 5rem 0 0 0;
    }

    #cadastro.el-divider__text.is-center {
        display: flex;
        margin: 0 0 5rem 0;
        transform: translateX(-50%) translateY(-50%);
    }

    @media (width: 1192px) {
        #cadastro .el-form {
            margin: 1.625rem 0 0 0;
            width: 80%;
        }

        #cadastro .cadastro-bg-white {
            width: 100%;
        }

        #cadastro .cadastro-container-form {
            padding: 2rem;
            width: 50rem;
            height: 80.8rem;
            margin: 12.5rem auto 0;
            text-align: center;
            font-family: "Roboto", sans-serif;
        }
    }

    @media (max-width: 900px) {
        #cadastro .el-form {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            width: 200%;
        }

        .logotipo {
            font-size: 1.813rem;
            display: flex;
            margin: 15% 0 1.25rem 0;
            font-family: cursive;
            font-weight: bold;
            justify-content: center;
        }

        #cadastro .el-header {
            --el-header-padding: -1 1.25rem;
        }

        #cadastro .cadastro-slogan {
            font-size: 1rem;
            color: var(--gray400);
            margin: 0.625rem 0 2.25rem 0;
            display: flex;
            justify-content: center;
        }

        #cadastro.el-divider {
            margin: 2rem 0 0 0;
        }

        #cadastro.el-divider__text {
            position: absolute;
            padding: 0 !important;
        }

        #cadastro.el-divider__text.is-center {
            transform: translate(-52%, -32%);
        }

        #cadastro.cadastro-container-form p {
            margin: 2.313rem 0 0 0;
        }

        #cadastro .el-alert {
            display: flex;
            justify-content: center;
            align-self: center;
            width: 100%;
        }

        .link-login {
            margin: -2.688rem 0 10rem 0;
            font-style: italic;
        }

        .el-row,
        .el-col {
            width: 100% !important;
            max-width: 100%;
        }

        .el-col-12 {
            flex: 0 0 100%;
        }

        #cadastro .el-form {
            width: 100%;
        
        }
    }
</style>