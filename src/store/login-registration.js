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

            const login = await axios.post("http://api.eattog.jera.com.br/users/sign-in", {
              "email": this.formulario.email,
              "senha": this.formulario.password
            });

            this.token = login.data.accessToken;
            sessionStorage.setItem("token", this.token);

            const router = useRouter();
            router.push("/admin");
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


