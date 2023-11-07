import { defineStore } from "pinia";
import {} from "element-plus";

export const useCadastroStore = defineStore("cadastro", {
  state: () => ({
    formulario: {
      nome: "",
      data_nascimento: "",
      cpf: "",
      email: "",
      Password: "",
      confirmPassword: "",
      numberPhone: "",
    },
    nameRules: [
      { required: true, message: "Please enter your name", trigger: "blur" },
    ],

    // dateOfBirthRules: [
    //   {
    //     required: true,
    //     message: "Please select your date of birth",
    //     trigger: "change",
    //   },
    // ],
    dateOfBirthRules: [
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
              const age = today.getFullYear() - birthDate.getFullYear();
      
              if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
                age--;
              }
      
              if (age < 18) {
                callback(new Error("You must be at least 18 years old."));
              } else {
                callback();
              }
            } else {
              callback(new Error("Please select your date of birth"));
            }
          },
          trigger: "change",
        },
      ],

    phoneRules: [
      {
        required: true,
        message: "Please enter your phone number",
        trigger: "blur",
      },
    ],

    cpfRules: [
      { required: true, message: "Please enter your CPF", trigger: "blur" },
      {
        validator: (rule, value, callback) => {
          const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

          if (cpfRegex.test(value)) {
            callback();
          } else {
            callback(new Error("Please enter a valid CPF"));
          }
        },
        trigger: "blur",
      },
    ],

    emailRules: [
      { required: true, message: "Please enter your email", trigger: "blur" },
      {
        type: "email",
        message: "Please enter a valid email address",
        trigger: "blur",
      },
    ],

    passwordRules: [
      { required: true, message: "Please enter a password", trigger: "blur" },
      {
        validator: (rule, value, callback) => {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{6,}$/;
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
    ],

    confirmPasswordRules: [
      {
        required: true,
        message: "Please confirm your password",
        trigger: "blur",
      },
      {
        validator: (rule, value, callback) => {
          if (value !== this.formulario.Password) {
            callback(new Error("Passwords do not match"));
          } else {
            callback();
          }
        },
        trigger: "blur",
      },
    ],

    errorMsg: "",
    showPassword: false,
    loading: false,
  }),

  actions: {
    submitForm() {
        
      this.loading = true;

      cadastroForm.validate((valid) => {
        if (valid) {
          this.errorMsgPassword = "";
        } else {
          this.errorMsgPassword = "";
          this.errorMsg = "Please fill in all required fields.";
          this.loading = false;
        }

        setTimeout(() => {
          this.errorMsg = "";
          this.loading = false;
        }, 2000);
      });

      console.log(this.formulario);
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
});
