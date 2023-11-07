import { defineStore } from 'pinia'
import axios from "axios";


export const useHomeStore = defineStore('home', {
    state: ()=>({
        pratos : [],
        userSession: {},
        token: sessionStorage.getItem("token")
    }),
    actions: {
        async listarPratos () {
            const resposta = await fetch('http://http://54.233.122.212/pratos');
            // const resposta = await fetch('http://54.233.122.212/pratos');
            this.pratos = await resposta.json();
        },
        async loggedUser() {
            if(this.token){
                const response = await  axios
                .post("http://http://54.233.122.212/users/decoded-user",{
                    token: this.token
                })
                this.userSession = response.data
                return this.userSession
            }
        }
    },
})

