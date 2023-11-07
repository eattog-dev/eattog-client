import { defineStore } from 'pinia'
export const usePedidoStore = defineStore('pedido', {
    state: () => ({
        prato: {},
        pedido: {},
        quantidade: 1,
        valorTotal: 0
    }),
    actions: {
        somar() {
            this.quantidade++
            this.valorTotal = this.valorPrato * this.quantidade
            return this.valorTotal
        },
        subtrair() {
            if (this.quantidade > 1) {
                this.quantidade--
            }
            this.valorTotal = this.valorPrato * this.quantidade
            return this.valorTotal
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