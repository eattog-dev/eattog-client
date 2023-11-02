import { defineStore } from 'pinia'
import axios from "axios";


export const useUserStore = defineStore('user-session', {
    state: () => ({
        userSession: {},
        token: sessionStorage.getItem("token")
    }),
    actions: {
        async listarPratos() {
            const resposta = await fetch('http://localhost:3000/pratos');
            // const resposta = await fetch('http://54.233.122.212/pratos');
            this.pratos = await resposta.json();
        },
        async loggedUser() {

            if (this.token) {
                const response = await axios
                    .post("http://localhost:3000/users/decoded-user", {
                        token: this.token
                    })
                this.userSession = response.data
                return this.userSession
            }


        }
    },
    getters: {
        getNome() {
            this.userSession.nome
        }
    }
})

