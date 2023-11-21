import { defineStore } from 'pinia'
import axios from "axios";

export const usePerfilStore = defineStore("perfil", {
    state: () => ({
        editProfileModal: false,
        perfil: {},
        novoPerfil: {}
    }),
    actions: {
        statusEditProfileModal() {
            this.editProfileModal = !this.editProfileModal
        },
        async loggedUser() {
            await axios
                .get("http://54.233.122.212/meu-perfil", {
                    headers: { 'Authorization': `Bearer ${sessionStorage.getItem("token")}` }
                })
                .then(response => {
                    console.log(response.data)
                    this.perfil = response.data
                    this.editedProfile()
                })
                .catch(error => {
                    if (error.response.status == 401) {
                        sessionStorage.removeItem("token");
                    }
                })
        },
        editedProfile() {
            this.novoPerfil = JSON.parse(JSON.stringify(this.perfil))
        }
    },

})