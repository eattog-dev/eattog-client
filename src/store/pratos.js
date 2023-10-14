import { defineStore } from 'pinia'

export const usePratosStore = defineStore('pratos', {
    state: ()=>({
        todosPratos : [],
    }),
    actions: {

        async listarPratosPorCategoria () {
            const resposta = await fetch(`http://localhost:3000/pratos-por-categoria/`);
            this.todosPratos = await resposta.json();
        },
    }
})