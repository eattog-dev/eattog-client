import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from 'vue-router';

export const useLoginStore = defineStore("login", {
  state: () => ({
    formulario: {
      email: "",
      password: "",
    },
    nameRules: [
      { required: true, message: "Por favor, insira seu nome", trigger: "blur" },
    ],

    emailRules: [
      { required: true, message: "Por favor introduza o seu e-mail", trigger: "blur" },
      {
        type: "email",
        message: "Por favor insira um endereço de e-mail válido",
        trigger: "blur",
      },
    ],

    passwordRules: [
      { required: true, message: "Por favor insira uma senha", trigger: "blur" },
    ],

    confirmPasswordRules: [
      {
        required: true,
        message: "Por favor confirme sua senha",
        trigger: "blur",
      },
    ],

    errorMsg: "",
    showPassword: false,
    loading: false,
    token: ""
  }),

  actions: {
    async submitForm(loginForm) {
      loginForm.validate(async (valid) => {
        if (valid) {
          try {
            this.errorMsg = ""; 

            fetch("https://api.eattog.jera.com.br/users/sign-in", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "email": this.formulario.email,
                "senha": this.formulario.password,
              })
            })
            .then(response => {
              if (!response.ok) {
                // console.log("Erro ao fazer login")
                throw new Error('Erro ao fazer login');
              }
              return response.json(); 
            })
            .then(data => {
              this.token = data.accessToken; 
              sessionStorage.setItem("token-admin", this.token);
              this.router.push({name: Admin});
            })
            .catch(error => {
              console.error('Erro ao fazer login:', error);
            });
            

          } catch (error) {
            this.errorMsg = "Falha ao fazer login. Tente novamente.";
            console.error("Login error:", error);
          }
        } else {
          this.errorMsg = 'Por favor, preencha todos os campos requisitados.';
        }
      });

      console.log(this.formulario);
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
});


