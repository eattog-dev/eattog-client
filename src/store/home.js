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
            //const resposta = await fetch('http://localhost:3000/pratos');
             const resposta = await fetch('`http://api.eattog.jera.com.br/pratos');
            this.pratos = await resposta.json();
        },
        async loggedUser() {
            if(this.token){
                const response = await  axios
                .post("`http://api.eattog.jera.com.br/users/decoded-user",{
                //.post("http://localhost:3000/users/decoded-user",{
                        token: this.token
                })
                this.userSession = response.data
                return this.userSession
            }
        }
    },
})

