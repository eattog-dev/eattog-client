import { defineStore } from 'pinia'

export const usePratosStore = defineStore('pratos', {
    state: ()=>({
        cardapio : [],
    }),
    actions: {

        async listaCardapio (id) {
            const resposta = await fetch(`http://localhost:3000/pratos-restaurante/${id}`);
            this.cardapio = await resposta.json();
        },
    }
})