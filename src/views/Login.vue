<template>
  <section id="login">
    
    <el-row>
      <el-col :span="12" class="login-bg-white">
        <Logo class="" text="Eattog" icon="🟨"></Logo>
        <p class="login-slogan">Delicious Food, Delivered Fast</p>
      </el-col>
      <el-col :span="12">
        <el-form class="login-container-form" ref="loginForm" :model="formulario" label-width="6.25rem"
          label-position="top">
          <el-header class="custom-header">
            <el-divider class="text-login" content-position="center">Login</el-divider>
          </el-header>

          <div class="login-account">
            <el-form-item label="E-mail" prop="email" :rules="emailRules">
              <el-input type="email" v-model="formulario.email"></el-input>
            </el-form-item>
            <el-form-item label="Senha" prop="password" :rules="passwordRules">
              <el-input v-model="formulario.password" :type="showPassword ? 'text' : 'password'">
              </el-input>
              <el-button class="password-login" @click="togglePassword()">
                <span v-if="showPassword">🙉</span>
                <span v-else>🙈</span>
              </el-button>

            </el-form-item>
            <span class="login-esqueceu-senha" @click="goToCadastro()">Nao tem conta ainda? Cadastre-se agora</span>
            <el-form-item>
              <el-button class="login-button" type="primary" @click="submitForm(loginForm)">Login</el-button>
            </el-form-item>
          </div>
          <el-form-item>
            <el-alert v-if="errorMsg" class="login-alert" title="Please fill in all required fields." type="error"
              show-icon></el-alert>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </section>
</template>
<script setup>
import axios from "axios";

import Logo from "../components/Logo.vue";
import { ref, computed, onMounted } from "vue";
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElRow,
  ElCol,
  ElHeader,
  ElDivider,
  ElAlert,
} from "element-plus";

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();


const goToCadastro = () => router.push("/cadastro");

const formulario = ref({})

const emailRules = [
  { required: true, message: "Por favor digite a senha", trigger: "blur" },
  {
    type: "email",
    message: "Please digite um email válido",
    trigger: "blur",
  },
];

const passwordRules = { required: true, message: "Por Favor digite a senha", trigger: "blur" };
  

const loginForm = ref(null);
const errorMsg = ref("");

const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
}

const submitForm = (cadastroForm) => {
  cadastroForm.validate(async (valid) => {
    if (valid) {
      await axios
        .post("http://api.eattog.jera.com.br/users/sign-in", {
          "email": formulario.value.email,
          "senha": formulario.value.password
        })
        .then(response => {
          sessionStorage.setItem("token", response.data.accessToken);
          alert("logado com sucesso")
          router.push("/inicio");
        })
        .catch(error => {
          alert("Algo deu errado. Tente Novamente")
        })
    } else {
      errorMsgPassword = "";
      errorMsg = "Please fill in all required fields.";
    }
  });
}
</script>

<style scoped>
#login {
  --el-color-primary: var(--yellow100);
}

.login-bg-white {
  background-color: rgba(240, 252, 172, 0.849);
}

.login-container-form {
  width: 80%;
  height: 99vh;
  margin: 20rem auto 0 0;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

.login-slogan {
  display: flex;
  font-size: 1.6rem;
  color: var(--gray400);
  margin: 1rem 0 0 0;
  justify-content: center;
}

.login-account {
  display: block;
}

.el-form {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
}

.login-esqueceu-senha {
  display: flex;
  justify-content: flex-end;
  color: var(--black100);
  cursor: pointer;
}

.login-alert {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80%;
  left: 60%;
  width: 30%;
  z-index: 999999;
}

.password-login {
  background-color: transparent !important;
  border-color: transparent !important;
  width: auto !important;
  margin: 0rem !important;
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

.password-login .el-input {
  position: relative;
  background-image: url(../assets/img-login/monkeySee.svg) !important;
  background-size: 20px !important;
}

.login-button {
  background-color: var(--yellow400);
  color: rgba(0, 0, 0, 0.813);
  border-color: var(--yellow400);
  border-radius: 1rem !important;
  width: 20rem !important;
  margin: 2rem auto !important;
  padding: 1.6rem 0 !important;
}

.login-button:hover,
.login-button:focus {
  background-color: rgba(255, 255, 0, 0.418);
  color: var(--black100);
  border-color: var(--yellow400);
}

.loading-overlay {
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


.loading-spinner {
  border: 0.6rem solid var(--white200);
  border-top: 0.6rem solid var(--rgba-yellow);
  border-radius: 5rem;
  width: 5rem;
  height: 5rem;
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

@media (max-width: 50rem) {
  .login-slogan {
    font-size: 1.6rem;
    display: flex;
    color: var(--gray400);
    margin: 1rem 0 1.8rem 0;
    justify-content: center;
  }

  .login-account {
    display: block;
    margin: 2.7rem 0 0 0;
  }

  .custom-header {
    height: 3rem;
  }

  .custom-form-item__label {
    margin-top: 1.5rem;
  }

  .custom-divider {
    margin: 4rem 0 0 0;
  }

  .custom-divider__text {
    padding: 0 0.2rem;
  }

  .custom-divider__text.is-center {
    transform: translate(-50%, -30%);
  }

  .custom-alert {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 60%;
    left: auto;
    width: 8rem;
    z-index: 999999;
  }
}
</style>