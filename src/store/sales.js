import { defineStore } from 'pinia'

export const useDescontoStore = defineStore('pratos', {
    state: ()=>({

        pratosRestaurante : [],
    }),
    actions: {

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
        promocao () {
           return this.pratosRestaurante.filter(prato => prato.desconto == true) || []
        },
        ordenarMaisBarato () {
           return this.pratosRestaurante.sort((a, b) => a.valor - b.valor )
        },
        ordenarAlfbeto () {
           return this.pratosRestaurante.sort((a, b) => a.nome.localeCompare(b.nome))
        }
    }
})