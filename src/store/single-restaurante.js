import { defineStore } from 'pinia'
export const useSingleRestauranteStore = defineStore('single-restaurante', {
    state: () => ({
        id: 0,
        banner: {},
        cardapio: [],
        pratosDesconto: [],
        pagina: 1,
    }),
    actions: {
        async carregarBanner(id) {
            const resposta = await fetch(`http://54.233.122.212/restaurante/${id}`);
            this.banner = await resposta.json();
        },
        async listarDescontos(id) {
            const resposta = await fetch(`http://54.233.122.212/pratos-restaurante/${id}`);
            this.pratosDesconto = await resposta.json();
        },
        async listarCardapio(id) {
            const resposta = await fetch(`http://http://54.233.122.212/pagina-cardapio/${id}/${this.pagina}`);
            this.cardapio = await resposta.json()
            this.id = id
        },
        async passarPagina() {
            let count = this.pagina
            const proximaPagina = await fetch(`http://http://54.233.122.212/prox-pagina/${this.id}/${count + 1}`);

            if (await proximaPagina.json()) {
                this.pagina++
                return this.listarCardapio(this.id)
            }
        },
        async voltarPagina() {
            if (this.pagina > 1) {
                this.pagina--
                return this.listarCardapio(this.id)
            }
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
        },

    }
})