# eattog-client

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


## Padrão de desenvolvimento recomendado

-Nomeação de classe, seguindo a regra BEM.
-Estilos do CSS em REM. Caso estejam em pixels (px), convertê-los para REM. A equivalência é de 16px para 1 REM.
-Os códigos de cores estão em variáveis no arquivo main.css; utilize var(--namexxx).

## criar restaurante pela url  http://54.233.122.212/criar/restaurante ex: 
{
        "imagem": "https://rioandlearn.com/wp-content/uploads/Vocabulário-Lanchonete.png",
        "logo": "https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000",
        "banner": "https://img.freepik.com/vetores-gratis/uma-estrela-restaurante-icon-ilustracao_53876-40629.jpg?w=2000",
        "titulo": "pit lanches",
        "avaliacao": 5.0,
        "tipoRefeicao": "refeição",
        "distancia": "2,5km",
        "tipoRetirada": "Local e retirada",
        "descricao": "Lanchonete tradicional de campo grnade",
        "localizacao": "Avenida Mascarenhas de Moraes"
}

## criar prato pela url http://54.233.122.212/criar/prato ex:
{
  "nome": "Feijoada",
  "valor": 25.99,
  "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg",
  "ingredientes": ["Feijão Preto", "Carne de Porco", "Arroz"],
  "restaurante": 2,
  "categoria_prato": 0, 
  "desconto": false,
  "valor_desconto": 0,
  "descricao": "A feijoada é um prato brasileiro clássico, preparado com feijão preto e diversas carnes de porco, como linguiça e bacon. É um prato rico em sabor, acompanhado de arroz, couve e laranja."
}

## criar categoria pela url http://54.233.122.212/criar/categoria ex: 
{
    "categoria_prato": "comida mexicana"
}

## criar usuário pela url http://54.233.122.212/users/sign-up ex: 
{
    "nome": "Gabigol Bruno Henrique De Arrascaeta",
    "email": "flamengoJJ2019@gmail.com",
    "cpf": "23112019185",
    "numero_celular": "11111111111",
    "senha": "biLibertadores19"
}