import { defineStore } from 'pinia'
export const usePedidoStore = defineStore('pedido', {
    state: () => ({
        prato: {},
        carrinho: [],
        quantidade: 1,
        valorTotal: 0,
        modal: false,
        observacoes: ""

    }),
    actions: {
        statusModal(){
            this.modal = !this.modal
            return this.modal
        },
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
        pratao(prato) {
            this.prato = prato
            this.valorPrato
            this.quantidade = 1
            this.observacoes = ""
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