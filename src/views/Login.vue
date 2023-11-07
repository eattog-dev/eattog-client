<template>
  <section id="login">
    <div class="loading-overlay" v-if="login.loading">
      <div class="loading-spinner"></div>
    </div>
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
            <el-form-item label="Password" prop="password" :rules="passwordRules">
              <el-input v-model="formulario.password" :type="showPassword ? 'text' : 'password'">
              </el-input>
              <el-button class="password-login" @click="login.togglePassword">
                <img src="../assets/img-login/monkeySee.svg" v-if="showPassword" style="width: 1.7rem; height: 1.7rem;">
                <img src="../assets/img-login/monkey.svg" v-else style="width: 1.7rem; height: 1.7rem;">
              </el-button>
            </el-form-item>
            <RouterLink class="login-esqueceu-senha" to="#">Esqueceu sua senha?</RouterLink>
            <el-form-item>
              <el-button class="login-button" type="primary" @click="login.submitForm(loginForm)">Login</el-button>
            </el-form-item>
          </div>
          <el-form-item>
            <el-alert v-if="errorMsg" class="login-alert" title="Please fill in all required fields." type="error"
              show-icon></el-alert>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <button @click="mudaRota"></button>
  </section>
</template>
<script setup>
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

import { useLoginStore } from "../store/login";

const login = useLoginStore();

const formulario = computed(() => login.formulario);

const emailRules = computed(() => login.emailRules);

const passwordRules = computed(() => login.passwordRules);

const auth = document.cookie.split("token=")[1];

let isAuth = ref(false)

// onMounted(() => {
//   if(auth != undefined){
//     isAuth = true;
//     alert("ta autenticado")
//   }else{
//     alert("nao ta autenticado")
//   }
// })



// const formData = ref({
//   email: "",
//   password: "",
// });

// const emailRules = [
//   { required: true, message: "Please enter your email", trigger: "blur" },
//   {
//     type: "email",
//     message: "Please enter a valid email address",
//     trigger: "blur",
//   },
// ];

// const passwordRules = [
//   { required: true, message: "Please enter a password", trigger: "blur" },
//   {
//     validator: (rule, value, callback) => {
//       const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;
//       if (!regex.test(value)) {
//         callback(
//           new Error(
//             "Password must have at least 6 characters, one uppercase letter, one lowercase letter, and one special character"
//           )
//         );
//       } else {
//         callback();
//       }
//     },
//     trigger: "blur",
//   },
// ];

// const showPassword = ref(false);
// const loading = ref(false);

// const togglePassword = () => {
//   showPassword.value = !showPassword.value;
// };

// const submitForm = () => {
//   loading.value = true;

//   loginForm.value.validate((valid) => {
//     if (valid) {
//       console.log("Form Data:", formData.value);
//       errorMsg.value = "";
//       setTimeout(() => {
//         loading.value = false;
//       }, 2000);
//     } else {
//       errorMsg.value = "Please fill in all required fields.";
//       loading.value = false;
//     }
//   });
// };

const loginForm = ref(null);
const errorMsg = ref("");
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
  margin: 0rem!important;
}
.password-login .el-input{
  
  background-image: url(../assets/img-login/monkeySee.svg)!important;
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