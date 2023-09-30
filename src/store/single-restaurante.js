import { defineStore } from 'pinia'

export const useSingleRestauranteStore = defineStore('single-restaurante', {
    state: () => ({
        banner: {},
        cardapio: [],
        pratosDesconto: [],
    }),
    actions: {
        async carregarBanner(id) {
            const resposta = await fetch(`http://localhost:3000/restaurante/${id}`);
            this.banner = await resposta.json();
        },
        async listarDescontos(id) {
            const resposta = await fetch(`http://localhost:3000/pratos-restaurante/${id}`);
            this.pratosDesconto = await resposta.json();
        },
        async listarCardapio(id) {
            const resposta = await fetch(`http://localhost:3000/pratos-restaurante/${id}`);
            this.cardapio = await resposta.json();
        }
    },
    getters: {
        filtroDesconto() {
            return this.pratosDesconto.filter(prato => prato.desconto == true) || []
        },
        ordenarMaisCaro() {
            return this.cardapio.sort((a, b) => b.valor - a.valor)
        },
        ordenarMaisBarato() {
            return this.cardapio.sort((a, b) => a.valor - b.valor)
        },
        ordenarAlfbeto() {
            return this.cardapio.sort((a, b) => a.nome.localeCompare(b.nome))
        }
    }
})