import { defineStore } from 'pinia'

export const useRestaurantesStore = defineStore('restaurantes', {
    state: ()=>({
        restaurantes : [],
        restaurante: {}
    }),
    actions: {
        async listaRestaurantes () {
            const resposta = await fetch('http://localhost:3000/restaurantes');
            this.restaurantes = await resposta.json();
        },
        async getRestaurante (id) {
            const resposta = await fetch(`http://localhost:3000/restaurante/${id}`);
            this.restaurante = await resposta.json();
        }
    },
})

