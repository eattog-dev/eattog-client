import {defineStore} from 'pinia'

export const usePerfilStore = defineStore("perfil", {
    state: () => ({
        editProfileModal: false
    }),
    actions: {
        statusEditProfileModal () {
            this.editProfileModal = !this.editProfileModal
        }
    }
})