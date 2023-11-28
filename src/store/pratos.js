import { defineStore } from 'pinia'

export const usePratosStore = defineStore('pratos', {
    state: () => ({
        todosPratos: [],
    }),
    actions: {

        async listarPratosPorCategoria() {
            const resposta = await fetch(`https://api.eattog.jera.com.br/pratos-por-categoria/`);
            //const resposta = await fetch(`http://localhost:3000/pratos-por-categoria/`);
            this.todosPratos = await resposta.json();

            return this.todosPratos.map((e) => {
                e.categoria_prato = e.categoria_prato.slice(0, 4);
                return e;
            })
        },
    }
})