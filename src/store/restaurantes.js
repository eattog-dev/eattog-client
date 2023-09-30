import { defineStore } from 'pinia'

export const useRestaurantesStore = defineStore('restaurantes', {
    state: ()=>({
        restaurantes : [],
    }),
    actions: {
        async listaRestaurantes () {
            const resposta = await fetch('http://localhost:3000/restaurantes');
            this.restaurantes = await resposta.json();
        }
    },
})

