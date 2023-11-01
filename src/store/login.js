import { defineStore } from "pinia";
import { } from "element-plus";
import axios from "axios";

export const useLoginStore = defineStore("login", {
  state: () => ({
    formulario: {
      email: "",
      password: "",
    },
    nameRules: [
      { required: true, message: "Please enter your name", trigger: "blur" },
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
      // {
      //   validator: (rule, value, callback) => {
      //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{6,}$/;
      //     if (!regex.test(value)) {
      //       callback(
      //         new Error(
      //           "Password must have at least 6 characters, one uppercase letter, one lowercase letter, and one special character"
      //         )
      //       );
      //     } else {
      //       callback();
      //     }
      //   },
      //   trigger: "blur",
      // },
    ],

    confirmPasswordRules: [
      {
        required: true,
        message: "Please confirm your password",
        trigger: "blur",
      },
      // {
      //   validator: (rule, value, callback) => {
      //     if (value !== this.formulario.Password) {
      //       callback(new Error("Passwords do not match"));
      //     } else {
      //       callback();
      //     }
      //   },
      //   trigger: "blur",
      // },
    ],

    errorMsg: "",
    showPassword: false,
    loading: false,
    token: ""
  }),

  actions: {
    submitForm(loginForm) {

      //this.loading = true;

      loginForm.validate(async (valid) => {
        if (valid) {
          this.errorMsgPassword = "";

          const login = await axios
            .post("http://localhost:3000/users/sign-in",
              {
                "email": this.formulario.email,
                "senha": this.formulario.password
              });

          this.token = login.data.accessToken;

          sessionStorage.setItem("token", this.token);
        } else {
          this.errorMsgPassword = "";
          this.errorMsg = "Please fill in all required fields.";
          //this.loading = false;
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
