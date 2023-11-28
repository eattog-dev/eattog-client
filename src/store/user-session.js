import { defineStore } from 'pinia'
import axios from "axios";


export const useUserStore = defineStore('user-session', {
    state: () => ({
        userSession: {},
    }),
    actions: {
        async loggedUser() {

            if (this.token) {
                const response = await axios
                    .get("https://api.eattog.jera.com.br/meu-perfil", {
                        headers: { 'Authorization': `Bearer ${sessionStorage.getItem("token")}` }
                    })
                if (response.status == 200 || response.status == 201) {
                    this.userSession = response.data
                    return this.userSession
                } else if (response.status == 401 || response.status == 404) {
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

