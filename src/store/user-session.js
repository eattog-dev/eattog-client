import { defineStore } from 'pinia'
import axios from "axios";


export const useUserStore = defineStore('user-session', {
    state: () => ({
        userSession: {},
        token: sessionStorage.getItem("token")
    }),
    actions: {
        async loggedUser() {

            if (this.token) {
                const response = await axios
                .post("http://54.233.122.212/users/decoded-user", {
                //.post("http://localhost:3000/users/decoded-user", {
                    token: this.token
                    })
                if (response.status == 200 || response.status == 201) {
                    this.userSession = response.data
                    return this.userSession
                } else if (response.status == 500) {
                    alert("Sessao suspendida, se reconecte ao sistema")
                    return localStorage.removeItem("token")
                } else {
                    alert("Erro ao Logar tente novamente")
                }
                this.userSession = response.data
                return this.userSession
            }
        },
       
    },

})

