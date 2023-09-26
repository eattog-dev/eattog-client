import { defineStore } from 'pinia'

export const usePratosStore = defineStore('pratos', {
    state: ()=>({
        pratos : [],
        pratosRestaurante : [],
        prato: {}
    }),
    actions: {
        async listaPratos () {
            const resposta = await fetch('http://localhost:3000/pratos');
            this.pratos = await resposta.json();
        },
        async listaPratosRestaurante (id) {
            const resposta = await fetch(`http://localhost:3000/pratos-restaurante/${id}`);
            this.pratosRestaurante = await resposta.json();
        },
        async getPrato(id) {
            const resposta = await fetch(`http://localhost:3000/prato/${id}`);
            this.prato = await resposta.json();
        },
    },
    getters:{
        ordenarMaisCaro () {
           return this.pratosRestaurante.sort((a, b) => b.valor - a.valor )
        },
        ordenarMaisBarato () {
           return this.pratosRestaurante.sort((a, b) => a.valor - b.valor )
        },
        ordenarAlfbeto () {
           return this.pratosRestaurante.sort((a, b) => a.nome.localeCompare(b.nome))
        }
    }
})