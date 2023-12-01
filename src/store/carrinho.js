import { defineStore } from 'pinia'
import axios from "axios";

export const useCarrinhoStore = defineStore('carrinho', {
    state: () => ({
        carrinho: []
    }),
    actions: {
        async listarCarrinho() {
            const response = await axios
                .get("https://api.eattog.jera.com.br/carrinho-compra", {
                    headers: { 'Authorization': sessionStorage.getItem("token") }
                })
            if (response.status == 200) {
                this.carrinho = response.data.carrinhoProduto;
            } else {
                return;
            }
            console.log(response.data.carrinhoProduto)
            console.log(response)
        },
        async finalizarCompra() {
            const checkout = await axios
                .get("https://api.eattog.jera.com.br/carrinho-compra/checkout", {
                    headers: { 'Authorization': sessionStorage.getItem("token") }
                })
            if (checkout.status == 200)
                window.open(checkout.data.url, '_blank');
            else
                console.log("deu merda no pagamento")
        }
    },

})