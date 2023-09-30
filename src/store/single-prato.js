import { defineStore } from 'pinia'

export const useSinglPratoStore = defineStore('single-prato', {
    state: () => ({
        prato: {},
        quantidade: 1,
        valorTotal: 0
    }),
    actions: {
        async carregarPrato(id) {
            const resposta = await fetch(`http://localhost:3000/prato/${id}`);
            this.prato = await resposta.json();
        },
        somar() {
            this.quantidade++
            return this.valorTotal = this.valorPrato * this.quantidade
        },
        subtrair() {
            if (this.quantidade > 1) {
                this.quantidade--
            }
            return this.valorTotal = this.valorPrato * this.quantidade
        },
    },
    getters: {
        valorPrato() {
            if (this.prato.desconto)
                return this.valorTotal = this.prato.valor_desconto
            else
                return this.valorTotal = this.prato.valor
        }
    }
})