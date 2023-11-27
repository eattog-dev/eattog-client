import { defineStore } from 'pinia'
import axios from "axios";

export const usePerfilStore = defineStore("perfil", {
    state: () => ({
        editProfileModal: false,
        perfil: {},
        novoPerfil: {},
        endereco: {}
    }),
    actions: {
        statusEditProfileModal() {
            this.editProfileModal = !this.editProfileModal
        },
        async loggedUser() {
            await axios
                .get("http://api.eattog.jera.com.br/meu-perfil", {
                    headers: { 'Authorization': `Bearer ${sessionStorage.getItem("token")}` }
                })
                .then(response => {
                    console.log(response.data)
                    this.perfil = response.data
                    this.endereco = JSON.parse(JSON.stringify(response.data.addresses[response.data.addresses.length -1]))
                    this.editedProfile()
                })
                .catch(error => {
                    if(error.status == 404)
                        sessionStorage.removeItem("token");
                })
        },
        editedProfile() {
            this.novoPerfil = JSON.parse(JSON.stringify(this.perfil))
            this.novoPerfil.addresses = this.endereco
        },

    },
    getters: {
    }
})