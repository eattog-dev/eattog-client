<template>
    <section id="login">
      <el-row>
        <el-col :span="12" class="login-bg-white">
          <Logo class="" text="Eattog" icon="🟨"></Logo>
          <p class="login-slogan">Delicious Food, Delivered Fast</p>
        </el-col>
        <el-col :span="12">
          <el-form class="login-container-form" ref="loginForm" :model="formData" label-width="100px" label-position="top">
            <el-header>
              <el-divider content-position="center">Welcome to Eattog</el-divider>
              <p class="login-account">Login to your account</p>
            </el-header>
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
            <el-form-item>
              <el-button type="primary" @click="submitForm">Login</el-button>
            </el-form-item>
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
    { type: "email", message: "Please enter a valid email address", trigger: "blur" },
  ];
  
  const passwordRules = [
    { required: true, message: "Please enter a password", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;
        if (!regex.test(value)) {
          callback(new Error("Password must have at least 6 characters, one uppercase letter, one lowercase letter, and one special character"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ];
  
  const showPassword = ref(false);
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  const submitForm = () => {
    loginForm.value.validate((valid) => {
      if (valid) {
        console.log("Form Data:", formData.value);
        errorMsg.value = "";
      } else {
        errorMsg.value = "Please fill in all required fields.";
      }
  
      setTimeout(() => {
        errorMsg.value = "";
      }, 3000);
    });
  };
  
  const loginForm = ref(null);
  const errorMsg = ref("");
  </script>
  
  <style setup>
  #login {
    --el-color-primary: #ffe500;
  }
  
  #login .login-bg-white {
    background-color: rgba(240, 252, 172, 0.849);
  }
  
  #login .login-container-form {
    width: 80%;
    height: 80vh;
    margin: 200px auto 0 0;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }
    
  #login .login-slogan {
    font-size: 16px;
    color: #888;
    margin: 10px 30% 0 30%;
  }

  #login .login-account{
    display: block;
    
}

  #login .el-form {
    width: 80%;
    margin: auto;
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
  
  #login .password-toggle-button{
  background-color: transparent!important;
  border-color:transparent!important;
  width: auto!important;
  margin: 0px!important;
  
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
  </style>
  