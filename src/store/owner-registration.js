import { defineStore } from "pinia";
import { } from "element-plus";
import axios from "axios";

export const useCadastroStore = defineStore("owner-registration", {
  state: () => ({
    formulario: {
      nome: "",
      data_nascimento: "",
      cpf: "",
      email: "",
      password: "",
      confirmPassword: "",
      numberPhone: "",
    },
    nameRules: [
      {
        required: true,
        message: "Campo obrigatório",
        trigger: "blur"
      },
    ],
    dateOfBirthRules: [
      {
        required: true,
        message: "Campo obrigatório",
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
              callback(new Error("Você deve ter pelo menos 18 anos."));
            } else {
              callback();
            }
          } else {
            callback(new Error("Campo obrigatório"));
          }
        },
        trigger: "change",
      },
    ],

    phoneRules: [
      {
        required: true,
        message: "Campo obrigatório",
        trigger: "blur",
      },
    ],

    cpfRules: [
      { required: true, message: "Campo obrigatório", trigger: "blur" },
      {
        validator: (rule, value, callback) => {
          const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

          if (cpfRegex.test(value)) {
            callback();
          } else {
            callback(new Error("Por favor insira um CPF válido"));
          }
        },
        trigger: "blur",
      },
    ],

    emailRules: [
      { required: true, message: "Campo obrigatório", trigger: "blur" },
      {
        type: "email",
        message: "Por favor, digite um endereço de e-mail válido",
        trigger: "blur",
      },
    ],

    passwordRules: [
      { required: true, message: "Campo obrigatório", trigger: "blur" },
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
  }),

  actions: {
    submitForm(cadastroForm) {
      cadastroForm.validate(async (valid) => {
        if (valid) {
          this.errorMsgPassword = "";
          const cadastro = await fetch("https://api.eattog.jera.com.br/cadastrar/admin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              "nome": this.formulario.nome,
              "email": this.formulario.email,
              "cpf": this.formulario.cpf,
              "numero_celular": this.formulario.numberPhone,
              "senha": this.formulario.password,
              "data_aniversario": this.formulario.data_nascimento,
            })
          });

          console.log(cadastro.data)
          // this.router.push("login/proprietario")
          window.location.href = 'https://api.eattog.jera.com.br/login/proprietario';
          this.success(`seja bem vindo ao sistema ${this.formulario.nome}`)
        } else {
          this.errorMsgPassword = "";
          this.errorMsg = "Preencha todos os campos obrigatórios.";
        }
      });

      console.log(this.formulario);
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
});