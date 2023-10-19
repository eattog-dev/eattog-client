<template>
  <section id="login">
    <div class="loading-overlay" v-if="loading">
      <div class="loading-spinner"></div>
    </div>
    <el-row>
      <el-col :span="12" class="login-bg-white">
        <Logo class="" text="Eattog" icon="🟨"></Logo>
        <p class="login-slogan">Delicious Food, Delivered Fast</p>
      </el-col>
      <el-col :span="12">
        <el-form class="login-container-form" ref="loginForm" :model="formData" label-width="100px" label-position="top">
          <el-header>
            <el-divider class="text-login" content-position="center">Login</el-divider>
          </el-header>

          <div class="login-account">
            <el-form-item label="E-mail" prop="email" :rules="emailRules">
              <el-input type="email" v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password" :rules="passwordRules">
              <el-input v-model="formData.password" :type="showPassword ? 'text' : 'password'"></el-input>
              <el-button class="password-toggle-button" @click="togglePassword">
                <span v-if="showPassword">🙉</span>
                <span v-else>🙈</span>
              </el-button>
            </el-form-item>
            <RouterLink class="link-esqueceu-senha" to="#">Esqueceu sua senha?</RouterLink>
            <el-form-item>
              <el-button type="primary" @click="submitForm">Login</el-button>
            </el-form-item>
          </div>
          <el-form-item>
            <el-alert v-if="errorMsg" title="Please fill in all required fields." type="error" show-icon></el-alert>
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
  ElAlert,
} from "element-plus";

const formData = ref({
  email: "",
  password: "",
});

const emailRules = [
  { required: true, message: "Please enter your email", trigger: "blur" },
  {
    type: "email",
    message: "Please enter a valid email address",
    trigger: "blur",
  },
];

const passwordRules = [
  { required: true, message: "Please enter a password", trigger: "blur" },
  {
    validator: (rule, value, callback) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;
      if (!regex.test(value)) {
        callback(
          new Error(
            "Password must have at least 6 characters, one uppercase letter, one lowercase letter, and one special character"
          )
        );
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

  loginForm.value.validate((valid) => {
    if (valid) {
      console.log("Form Data:", formData.value);
      errorMsg.value = "";
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    } else {
      errorMsg.value = "Please fill in all required fields.";
      loading.value = false;
    }
  });
};

const loginForm = ref(null);
const errorMsg = ref("");
</script>

<style setup>
@import url("https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Indie+Flower&display=swap");

#login {
  --el-color-primary: #ffe500;
}

#login .login-bg-white {
  background-color: rgba(240, 252, 172, 0.849);
}

#login .login-container-form {
  width: 80%;
  height: 99vh;
  margin: 200px auto 0 0;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

#login .login-slogan {
  display: flex;
  font-size: 16px;
  color: #888;
  margin: 10px 0% 0 0%;
  justify-content: center;
}

#login .login-account {
  display: block;
}

#login .el-form {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
}

#login .link-esqueceu-senha {
  display: flex;
  justify-content: flex-end;
}

#login .el-alert {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80%;
  left: 60%;
  width: 30%;
  z-index: 999999;
}

#login .password-toggle-button {
  background-color: transparent !important;
  border-color: transparent !important;
  width: auto !important;
  margin: 0px !important;
}

#login .el-button {
  background-color: #ffe600;
  color: rgba(0, 0, 0, 0.813);
  border-color: #ffe600;
  border-radius: 10px;
  width: 50%;
  margin: 20px auto;
  padding: 16px 0;
}

#login .el-button:hover,
.el-button:focus {
  background-color: rgba(255, 255, 0, 0.418);
  color: black;
  border-color: #ffe600;
}

#login .loading-overlay {
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

#login .loading-spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid var(--rgba-yellow);
  border-radius: 50%;
  width: 50px;
  height: 50px;
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

@media (max-width: 800px) {
  #login .login-slogan {
    font-size: 16px;
    display: flex;
    color: #888;
    margin: 10px 0% 18px 0%;
    justify-content: center;
  }

  #login .login-account {
    display: block;
    margin: 27px 0 0px 0;
  }

  #login .login-container-form {
    width: 80%;
    height: 45vh;
  }

  #login .el-header {
    height: 30px;
  }

  #login .el-form-item__label {
    margin-top: 15px;
  }

  #login .el-divider {
    margin: 4rem 0 0 0;
  }

  #login .el-divider__text {
    padding: 0 2px;
  }

  #login.el-divider__text.is-center {
    transform: translate(-50%, -30%);
  }

  #login .el-form {
    width: 80%;
    margin: auto;
  }

  #login .el-alert {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 60%;
    left: auto;
    width: 80%;
    z-index: 999999;
  }
}
</style>
