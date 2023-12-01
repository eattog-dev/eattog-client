<template>
    <section class="cadastro-container" id="cadastro">
        <el-row class="cadastro-row">
            <el-col :xs="24" :span="12" class="cadastro-col cadastro-bg-white">
                <Logo class="" text="Eattog" icon="🟨"></Logo>
                <p class="cadastro-slogan">Delicious Food, Delivered Fast</p>
            </el-col>
            <el-col :xs="24" :span="12" class="cadastro-col">
                <el-form class="cadastro-form" ref="cadastroForm" :model="formulario" label-width="6.25rem"
                    label-position="top">
                    <el-header>
                        <el-divider content-position="center" class="cadastro-divider">Bem-vindo ao Eattog</el-divider>
                        <p class="cadastro-create-account">Crie sua conta</p>
                    </el-header>
                    <el-form-item label="Nome" prop="nome" :rules="nameRules">
                        <el-input type="text" v-model="formulario.nome"></el-input>
                    </el-form-item>

                    <!-- <el-form-item label="Data de nascimento" prop="data_nascimento" :rules="dateOfBirthRules">
                        <el-date-picker class="cadastro-inputDate" v-model="formulario.data_nascimento" type="date"
                            placeholder="Selecione a data" format="DD/MM/YYYY" value-format="DD/MM/YYYY"></el-date-picker>
                    </el-form-item> -->
                    <el-form-item label="Data de nascimento (AAAA/MM/DD)" prop="data_nascimento" :rules="dateOfBirthRules">
                        <el-input type="text" v-mask="'####-##-##'" v-model="formulario.data_nascimento"></el-input>
                    </el-form-item  >
                    <!-- value-format="YYYY/MM/DD" -->
                    <el-form-item label="Número de Telefone" prop="numberPhone" :rules="phoneRules">
                        <el-input type="text" v-mask="'(##)#####-####'" v-model="formulario.numberPhone"></el-input>
                    </el-form-item>
                    <el-form-item label="CPF" prop="cpf" :rules="cpfRules">
                        <el-input type="text" v-mask="'###.###.###-##'" v-model="formulario.cpf"></el-input>
                    </el-form-item>
                    <el-form-item label="E-mail" prop="email" :rules="emailRules">
                        <el-input type="email" v-model="formulario.email"></el-input>
                    </el-form-item>
                    <el-form-item label="Senha" prop="password" :rules="passwordRules">
                        <el-input v-model="formulario.password" :type="showPassword ? 'text' : 'password'"></el-input>
                        <el-button class="password-toggle-button" @click="togglePassword">
                            <span v-if="showPassword">🙉</span>
                            <span v-else>🙈</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item label="Confirmar Senha" prop="confirmPassword" :rules="confirmPasswordRules">
                        <el-input v-model="formulario.confirmPassword"
                            :type="showConfirmPassword ? 'text' : 'password'"></el-input>
                        <el-button class="password-toggle-button" @click="toggleConfirmPassword">
                            <span v-if="showConfirmPassword">🙉</span>
                            <span v-else>🙈</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(cadastroForm)">Cadastrar</el-button>
                    </el-form-item>
   
                    <span class="link-login" @click="goToLogin()">Já tem uma conta? Faça Login</span>
                </el-form>
            </el-col>
        </el-row>
    </section>
</template>
  
<script setup>
import axios from "axios";

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

import { useRouter, useRoute } from 'vue-router';

const router = useRouter()

const formulario = ref({})


const nameRules = { required: true, message: "Please enter your name", trigger: "blur" };
const dateOfBirthRules = [
    {
        required: true,
        message: "Please select your date of birth",
        trigger: "change",
    },
    {
        validator: (rule, value, callback) => {
            if (value) {
                const birthDate = new Date(value);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();

                if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
                    age--;
                }

                if (age < 18) {
                    callback(new Error("Você deve ter pelo menos 18 anos"));
                } else {
                    callback();
                }
            } else {
                callback(new Error("Por favor selecione sua data de nascimento"));
            }
        },
        trigger: "change",
    },
];

const phoneRules = {
    required: true,
    message: "Por favor digite seu numero de celular",
    trigger: "blur",
};


const cpfRules = [
    { required: true, message: "Por favor digite o CPF", trigger: "blur" },
    {
        validator: (rule, value, callback) => {
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

            if (cpfRegex.test(value)) {
                callback();
            } else {
                callback(new Error("Por favor digite um CPF válido"));
            }
        },
        trigger: "blur",
    },
];

const emailRules = [
    { required: true, message: "Por favor digite o email", trigger: "blur" },
    {
        type: "email",
        message: "Por favor digite um email válido",
        trigger: "blur",
    },
];

const passwordRules = [
    { required: true, message: "Por favor digite a senha", trigger: "blur" },
    {
        validator: (rule, value, callback) => {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{6,}$/;
            if (!regex.test(value)) {
                callback(
                    new Error(
                        "A senha deve ter ao menos 6 caracteres, uma letra maiúscula, uma letra minúscula e um caracter especial"
                    )
                );
            } else {
                callback();
            }
        },
        trigger: "blur",
    },
];

const confirmPasswordRules = [
    {
        required: true,
        message: "Por favor confirme a sua senha",
        trigger: "blur",
    },
    {
        validator: (rule, value, callback) => {
            if (value !== formulario.value.password) {
                callback(new Error("Senhas diferentes"));
            } else {
                callback();
            }
        },
        trigger: "blur",
    },
]


const submitForm = (cadastroForm) => {
    cadastroForm.validate(async (valid) => {
        if (valid) {
            await axios
                .post("https://api.eattog.jera.com.br/cadastrar/user", {
                    "nome": formulario.value.nome,
                    "email": formulario.value.email,
                    "cpf": formulario.value.cpf,
                    "numero_celular": formulario.value.numberPhone,
                    "senha": formulario.value.password,
                    "data_aniversario": formulario.value.data_nascimento,
                })
                .then(response => {
                    alert("Cadastro realizado com sucesso")
                    router.push("/login")
                })
                .catch(error => {
                    alert('Falha ao se cadastrar ao sistema. Tente novamente.')
                })
        } else {
            this.errorMsgPassword = "";
            this.errorMsg = "Please fill in all required fields.";
        }
    });
}

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const togglePassword = () => {
    showPassword.value = !showPassword.value;
}

const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
}

const cadastroForm = ref(null)

const goToLogin = () => router.push("/login")
</script>
  
<style scoped>
.cadastro-container {
    --el-color-primary: var(--yellow100);

}

.cadastro-bg-white {
    background-color: rgba(240, 252, 172, 0.849);
}

.cadastro-form {
    text-align: center;
    font-family: "Roboto", sans-serif;
    padding: 1.5rem;
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



.cadastro-create-account {
    font-size: 1rem;
    display: flex;
    margin: 0.625rem 0 0 0;
    justify-content: center;
    color: var(--yellow400);
    font-weight: 700;
}

.link-login{
    color: var(--black100);
    cursor: pointer;
    float: right;
    padding-bottom: 1.5rem;
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




@media (max-width:768px){
    .logotipo,
    .cadastro-slogan{
        margin: unset;
    }
    .cadastro-col{
        padding: 0.5rem 0;
    }

    .cadastro-form{
        padding: 0.5rem 0 ;

        height: unset;
    }
}
</style>
  