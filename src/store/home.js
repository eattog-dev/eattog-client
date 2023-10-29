import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
    state: ()=>({
        pratos : [],
    }),
    actions: {
        async listarPratos () {
            const resposta = await fetch('http://54.233.122.212/pratos');
            this.pratos = await resposta.json();
        }
    },
})

