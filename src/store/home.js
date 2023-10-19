import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
    state: ()=>({
        pratos : [],
    }),
    actions: {
        async listarPratos () {
            const resposta = await fetch('http://localhost:3000/pratos');
            this.pratos = await resposta.json();
        }
    },
})

